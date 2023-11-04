<template>
    <div>
        <h1><span>Height90up</span></h1>
        <div>id: <a1>{{ height90up.id }}</a1></div>
        <div>ชื่อ: <a1>{{ height90up.name_thai }} {{ height90up.name_eng }}</a1></div>
        <div>รายละเอียด: <a1>{{ height90up.detail }}</a1></div>
        <div>ความพร้อมใช้งาน: <a1>{{ height90up.availability }}</a1></div>
        <div>ความจุ: <a1>{{ height90up.capacity }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/height90ups')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import height90upService from '@/services/height90upService'

export default {
    data() {
        return {
            height90up:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let height90upId = this.$route.params.height90upId
            this.height90up = (await height90upService.show(height90upId)).data
            console.log(this.height90up)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   