<template>
    <div class="test">
        <div class="role-icons mb-5">
            <img class="mx-3" src="/images/role_icons/JOURNALIST.png">
            <img class="mx-3" src="/images/role_icons/ADMINISTRATOR.png">
            <img class="mx-3" src="/images/role_icons/ANALYST.png">
            <img class="mx-3" src="/images/role_icons/VISIONARY.png">
            <img class="mx-3" src="/images/role_icons/CARETAKER.png">
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
        <swiper :options="swiperOptions">
            <swiper-slide :key="i" v-for="i in 3">
                <div class="choices">
                    <div class="choice card mx-auto mb-3" :key="choice.id" v-for="choice in choices.slice(i*6, (i+1)*6)">
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
    methods: {
        // Toggle a choice selected state
        selectOption(id) {
            const choice = this.choices.find(opt => opt.id === id);
            // Set the choice to selected state
            if (
                choice.selected === -1 &&
                this.selectedCount[this.section] < this.maxSelect
            ) {
                choice.selected = this.section;
                this.selectedCount[this.section]++;
            // Set the choice to deselcted state
            } else {
                choice.selected = -1;
                this.selectedCount[this.section]--;
            }
        },
        // Move to the next section 
        nextPage() {
            if (this.section < 3) {
                this.section++;
                window.scrollTo(0, 0);
            }
        },
        // Move to the previous section
        previousPage() {
            if (this.section > 3) {
                this.section--;
                window.scrollTo(0, 0);
            }
        },
        // Submit user input and open the result page
        submit() {
            let sel = { 1: [], 2: [], 3: [], 4: [] };
            this.choices
                .filter(cho => cho.selected != 0)
                .forEach(cho => {
                    sel[cho.selected].push(cho.id);
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
                this.choices.forEach(choice => this.$set(choice, 'selected', 0));
            })
            .catch(err => console.log(err));
    }
};
</script>

<style scoped>
.role-icons img {
    width: auto;
    height: 75px;
}

.description {
    font-weight: bold;
    font-size: 18px;
}

.choices {
    margin-bottom: 50px;
}

.choice {
    max-width: 500px;
    cursor: pointer;
    border-width: 5px;
    border-color: rgba(0,0,0,0);
    font-weight: bold;
    background-color: #51A5A8;
    color: #FFF; 
}

.choice:hover {
    background-color: #3A7C80;
}
</style>