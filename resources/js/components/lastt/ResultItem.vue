<template>
    <div class="result-item d-flex">
        <div class="icon mr-3">
            <img class="role-icon mx-3" :src="'/images/role_icons/' + item.result.toUpperCase() + '.png'">
        </div>
        <div class="details">
            <h5 class="font-weight-bold mb-3">{{ item.result }}</h5>
            <p class="text-justify">{{ item.exp_pos}}</p>
            <p class="text-justify">{{ item.exp_neg}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResultItem',
    props: ['item']
}
</script>

<style scoped>
* {
    text-align: left;
}

p {
    white-space: pre-line;
}
</style>