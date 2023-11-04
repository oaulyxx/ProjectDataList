<template>
    <div>
        <h1><span>Height130up</span></h1>
        <div>id: <a1>{{ height130up.id }}</a1></div>
        <div>ชื่อ: <a1>{{ height130up.name_thai }} {{ height130up.name_eng }}</a1></div>
        <div>รายละเอียด: <a1>{{ height130up.detail }}</a1></div>
        <div>ความพร้อมใช้งาน: <a1>{{ height130up.availability }}</a1></div>
        <div>ความจุ: <a1>{{ height130up.capacity }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/height130ups')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import height130upService from '@/services/height130upService'

export default {
    data() {
        return {
            height130up:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let height130upId = this.$route.params.height130upId
            this.height130up = (await height130upService.show(height130upId)).data
            console.log(this.height130up)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   