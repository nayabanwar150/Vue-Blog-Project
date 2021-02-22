<template>
    <div class="search-box">
        <input type="text" v-model="search" placeholder="Search..." />
    </div>
</template>

<script>
export default {
    data(){
        return{
            search: ''
        }
    }
}
</script>

<style scoped>
    input[type='text']{
        border: none;
        padding: 10px;
        /* width: 300px; */
        border-radius: 5px;
    }
</style>