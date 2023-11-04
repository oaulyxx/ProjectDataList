<template>
    <div>
        <h1><span>Height155up</span></h1>
        <div>id: <a1>{{ height155up.id }}</a1></div>
        <div>ชื่อ: <a1>{{ height155up.name_thai }} {{ height155up.name_eng }}</a1></div>
        <div>รายละเอียด: <a1>{{ height155up.detail }}</a1></div>
        <div>ความพร้อมใช้งาน: <a1>{{ height155up.availability }}</a1></div>
        <div>ความจุ: <a1>{{ height155up.capacity }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/height155ups')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import height155upService from '@/services/height155upService'

export default {
    data() {
        return {
            height155up:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let height155upId = this.$route.params.height155upId
            this.height155up = (await height155upService.show(height155upId)).data
            console.log(this.height155up)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   