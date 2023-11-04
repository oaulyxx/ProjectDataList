<template>
    <div>
        <h1><span>Height110up</span></h1>
        <div>id: <a1>{{ height110up.id }}</a1></div>
        <div>ชื่อ: <a1>{{ height110up.name_thai }} {{ height110up.name_eng }}</a1></div>
        <div>รายละเอียด: <a1>{{ height110up.detail }}</a1></div>
        <div>ความพร้อมใช้งาน: <a1>{{ height110up.availability }}</a1></div>
        <div>ความจุ: <a1>{{ height110up.capacity }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/height110ups')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import height110upService from '@/services/height110upService'

export default {
    data() {
        return {
            height110up:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let height110upId = this.$route.params.height110upId
            this.height110up = (await height110upService.show(height110upId)).data
            console.log(this.height110up)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   