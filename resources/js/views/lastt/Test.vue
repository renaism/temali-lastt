<template>
    <div class="test">
        <div class="role-icons mb-5">
            <img class="role-icon mx-3" src="/images/role_icons/JOURNALIST.png">
            <img class="role-icon mx-3" src="/images/role_icons/ADMINISTRATOR.png">
            <img class="role-icon mx-3" src="/images/role_icons/ANALYST.png">
            <img class="role-icon mx-3" src="/images/role_icons/VISIONARY.png">
            <img class="role-icon mx-3" src="/images/role_icons/CARETAKER.png">
        </div>
        <div class="description mb-3">
            <p v-if="section === 0">
                Pertama, pilih 5-7 aktivitas yang menurutmu "Aku enjoy banget ngerjainnya! Malah jadi dapet energi."
            </p>
            <p v-else-if="section === 1">
                Nah, sekarang pilih 5-7 aktivitas yang "Hmm, kayaknya aku lumayan suka aktivitas ini.." (walaupun nggak pake banget).
            </p>
            <p v-else-if="section === 2">
                Kemudian, pilih 5-7 aktivitas yang "Sebenernya nggak begitu suka sih, tapi okelah kalau emang harus dikerjain."
            </p>
            <p v-else-if="section === 3">
                Yeay, terakhir nih! Pilih 5-7 aktivitas yang "Nggak enjoy banget ngerjainnya. Bikin capek jiwa. Bahkan kalau bisa, ngehindarin aktivitas-aktivitas ini.."
            </p>
        </div>
        <swiper ref="choiceSwiper" :options="swiperOptions" class="mb-3">
            <swiper-slide :key="i" v-for="i in pageTotal">
                <div class="choices">
                    <div class="choice card mx-auto mb-3" :key="choice.id" v-for="choice in sectionChoices.slice((i-1) * choicePerPage, i * choicePerPage)" :class="{selected: choice.selected !== -1}" @click="selectChoice(choice.id)">
                        <div class="card-body d-flex justify-content-center align-items-center">
                            <p class="noselect m-0">{{ choice.label }}</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="navigation d-flex justify-content-center align-items-center font-weight-bold mb-3">
            <p class="my-0 mr-2">KUOTA</p>
            <h2 class="my-0 mr-3"><span class="quota badge rounded-lg badge-primary py-3 px-4">{{ maxSelect - selectedCount[section] }}</span></h2>
            <button v-if="section < 3" @click="nextPage()" class="btn btn-lg btn-temali rounded-pill font-weight-bold py-4" :class="{disabled: selectedCount[section] < minSelect}">LANJUT!</button>
            <button v-else @click="submit()" class="btn btn-lg btn-warning rounded-pill font-weight-bold py-4" :class="{disabled: selectedCount[section] < minSelect}">PROSES HASILNYA!</button>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';

import axios from 'axios';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    name: "Test",
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            section: 0,
            choices: [],
            selectedCount: [0, 0, 0, 0],
            minSelect: 2,
            maxSelect: 7,
            choicePerPage: 6,
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }
            }
        };
    },
    computed: {
        sectionChoices: function() {
            // Get the choices that either are not selected anywhere or selected in the current section
            return this.choices.filter(c => c.selected === -1 || c.selected === this.section);
        },
        pageTotal: function() {
            // Number of page in pagination based on available choices in the current section
            return Math.ceil(this.sectionChoices.length / this.choicePerPage)   
        }
    },
    methods: {
        // Toggle a choice selected state
        selectChoice(id) {
            const choice = this.choices.find(c => c.id === id);
            // Set the choice to selected state
            if (choice.selected === -1 && this.selectedCount[this.section] < this.maxSelect) {
                choice.selected = this.section;
                this.selectedCount[this.section]++;
            // Set the choice to deselcted state
            } else if (choice.selected !== -1) {
                choice.selected = -1;
                this.selectedCount[this.section]--;
            }
        },
        // Move to the next section 
        nextPage() {
            if (this.selectedCount[this.section] < this.minSelect) {
                return;
            }

            if (this.section < 3) {
                this.section++;
                this.$refs.choiceSwiper.swiper.slideTo(0);
                window.scrollTo(0, 0);
            }
        },
        // Move to the previous section
        previousPage() {
            if (this.section > 0) {
                this.section--;
                this.$refs.choiceSwiper.swiper.slideTo(0);
                window.scrollTo(0, 0);
            }
        },
        // Submit user input and open the result page
        submit() {
            if (this.selectedCount[this.section] < this.minSelect) {
                return;
            }

            let sel = [[], [], [], [], []];
            this.choices
                .filter(c => c.selected !== -1)
                .forEach(c => {
                    sel[c.selected+1].push(c.id);
                });
            this.$router.push({
                name: "result",
                params: { selectedOptions: sel }
            });
        }
    },
    created() {
        axios.get('http://light-assessment-api.temali.space/options')
            .then(res => {
                this.choices = res.data;
                this.choices.forEach(c => this.$set(c, 'selected', -1));
            })
            .catch(err => console.log(err));
    }
};
</script>

<style scoped>
.description {
    max-width: 500px;
    margin: auto;
    font-weight: bold;
    font-size: 18px;
}

.choices {
    margin-bottom: 50px;
}

.choice {
    max-width: 500px;
    cursor: pointer;
    border-style: solid;
    border-width: 5px;
    border-color: rgba(0,0,0,0);
    font-weight: bold;
    background-color: #51A5A8;
    color: #FFF; 
}

.choice.sec-0 {
    background-color: #FAA200;
}

.choice.sec-0:hover {
    background-color: #F2D399;
} 

.choice.sec-1 {
    background-color: #9FBA4A;
}

.choice.sec-1:hover {
    background-color: #D6E6A3;
}

.choice.sec-2 {
    background-color: #FFF;
}

.choice.sec-2:hover {
    background-color: #FFF;
}

.choice.sec-3 {
    background-color: #FFF;
}

.choice.sec-3:hover {
    background-color: #FFF;
}

.choice:hover {
    background-color: #3A7C80;
}

.choice.selected {
    border-color: #333;
}

.quota {
    background-color: #566FB8;
    box-shadow: 0 5px #94A3CF;
}
</style>