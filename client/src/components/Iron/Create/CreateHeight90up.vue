<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create height90up</span></h1>
                <form class="register-form" v-on:submit.prevent="createheight90up">
                    <input type="text" placeholder="ชื่อ *" v-model="height90up.name_thai" required>
                    <input type="text" placeholder="name" v-model="height90up.name_eng">
                    <input type="text" placeholder="รายละเอียด" v-model="height90up.detail" required>
                    <input type="text" placeholder="ความพร้อมใช้งาน" v-model="height90up.availability">
                    <input type="text" placeholder="ความจุ *" v-model="height90up.capacity" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/height90ups')">กลับ</button>                
                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import height90upService from '@/services/height90upService'
export default {
    data() {
        return {
            height90up: {
                name_thai: '',
                name_eng: '',
                detail: '',
                availability: '',
                capacity: ''
            }
        }
    },
    methods: {
        async createheight90up() { 
            try {
                await height90upService.post(this.height90up)
                this.$router.push({
                    name: 'height90ups'
                })
            } catch (err) {
                console.log(err)
            }
        },
        navigateTo(route){
            this.$router.push(route)
        }
    },
     
}
</script>
<style scoped></style>
   