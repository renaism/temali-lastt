<template>
    <div class="result">
        <div v-if="Object.keys(result).length > 0">
            <h3 class="text-center font-weight-bold mb-5">PERAN-PERAN KUAT</h3>
            <div class="row">
                <div class="col-12 col-md-6 mb-3" :key="item.id" v-for="item in result['very_fit']">
                    <div class="result-item d-flex flex-column flex-md-row">
                        <div class="icon mr-3 mb-3">
                            <img class="role-icon mx-3" :src="'/images/role_icons/' + item.result.toUpperCase() + '.png'">
                        </div>
                        <div class="details">
                            <h5 class="font-weight-bold mb-3">{{ item.result }}</h5>
                            <p class="text-justify">{{ item.exp_pos}}</p>
                            <p class="text-justify">{{ item.exp_neg}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="text-center font-weight-bold my-5">PERAN-PERAN LEMAH</h3>
            <div class="row">
                <div class="col-12 col-md-4 mb-3" :key="item.id" v-for="item in result['very_not_fit']">
                    <div class="details">
                        <h5 class="font-weight-bold mb-3">{{ item.result }}</h5>
                        <p class="text-justify">{{ item.exp_neg}}</p>
                    </div>
                </div>
            </div>
            <p class="text-center lead mt-5">
                Masukan nama kamu dan dapatkan laporan test ini dalam bentuk PDF:
            </p>
            <form @submit="downloadPDF" class="form-inline my-3">
                <input type="text" class="form-control form-control-lg ml-auto mb-2 mr-sm-2" placeholder="Nama" name="name" v-model="inputName" required/>
                <button type="submit" class="btn btn-lg btn-warning rounded-pill font-weight-bold py-4 mx-auto ml-sm-0 mb-2">DOWNLOAD PDF</button>
            </form>
        </div>
        <router-link to="/lastt/test">
            <a class="btn-lg btn-link text-center d-block mx-auto my-3">Test Lagi</a>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Result",
    props: ["selectedOptions"],
    components: {},
    data() {
        return {
            result: {},
            inputName: ''
        };
    },
    methods: {
        downloadPDF(e) {
            e.preventDefault();
            axios
                .post(
                    'http://light-assessment-api.temali.space/result/pdf',
                    {
                        selectedOptions: this.selectedOptions,
                        name: this.inputName
                    },
                    { responseType: "blob" }
                )
                .then(res => {
                    const pdf = new Blob([res.data], {
                        type: "application/pdf"
                    });

                    // For IE
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(newBlob);
                        return;
                    }

                    // Other browsers
                    const fileURL = URL.createObjectURL(pdf);
                    const link = document.createElement("a");
                    link.href = fileURL;
                    link.download = "Temali Hasil Light Assessment.pdf";
                    link.click();

                    // For Firefox
                    setTimeout(function() {
                        window.URL.revokeObjectURL(fileURL);
                    }, 100);
                })
                .catch(err => console.log(err));
        }
    },
    created() {
        axios.post('http://light-assessment-api.temali.space/result', {
                selectedOptions: this.selectedOptions
            })
            .then(res => {
                this.result = res.data;
            })
            .catch(err => console.log(err));
    }
};
</script>

<style scoped>
.result-item {
    text-align: left;
}

.result-item p {
    white-space: pre-line;
}
</style>