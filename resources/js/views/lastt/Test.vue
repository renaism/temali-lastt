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
        <div class="choicesWrapper mx-auto overflow-auto">
            <div class="choices">
                <div class="choice card mx-auto mb-3" :key="choice.id" v-for="choice in sectionChoices" :class="choiceClass(choice.selected !== -1)" @click="selectChoice(choice.id)">
                    <div class="card-body d-flex justify-content-center align-items-center">
                        <p class="noselect m-0">{{ choice.label }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigation d-flex justify-content-center align-items-center font-weight-bold mb-3">
            <p class="my-0 mr-2">KUOTA</p>
            <h2 class="my-0 mr-3"><span class="quota badge rounded-lg badge-primary py-3 px-4">{{ maxSelect - selectedCount[section] }}</span></h2>
            <button v-if="section < 3" @click="nextPage()" class="btn btn-lg btn-temali rounded-pill font-weight-bold py-4" :class="{invisible: selectedCount[section] < minSelect}">LANJUT!</button>
            <button v-else @click="submit()" class="btn btn-lg btn-temali rounded-pill font-weight-bold py-4" :class="{invisible: selectedCount[section] < minSelect}">PROSES HASILNYA!</button>
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
            minSelect: 5,
            maxSelect: 7,
            choicePerPage: 6,
            btnWarning: "Pilih minimal 5",
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
        choiceClass(selected) {
            return {
                'selected': selected,
                'sec-0': this.section == 0,
                'sec-1': this.section == 1,
                'sec-2': this.section == 2,
                'sec-3': this.section == 3
            };
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

.choicesWrapper {
    height: 500px;
    margin-bottom: 50px;
    max-width: 550px;
}

.choice {
    max-width: 90%;
    cursor: pointer;
    border-style: solid;
    border-width: 5px;
    border-color: rgba(0,0,0,0);
    font-weight: bold;
    background-color: #51A5A8;
    color: #FFF; 
}

.choice.sec-0 {
    background-color: #51A5A8;
}

.choice.sec-0:hover {
    background-color: #3A7C80;
} 

.choice.sec-1 {
    background-color: #9FBA4A;
}

.choice.sec-1:hover {
    background-color: #687931;
}

.choice.sec-2 {
    background-color: #FAA200;
}

.choice.sec-2:hover {
    background-color: #9e6803;
}

.choice.sec-3 {
    background-color: #c74545;
}

.choice.sec-3:hover {
    background-color: #7a3d3d;
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

.btn.invisible {
    display: none;
}
</style>