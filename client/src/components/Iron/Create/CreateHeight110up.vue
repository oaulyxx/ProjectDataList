<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Height110up</span></h1>
                <form class="register-form" v-on:submit.prevent="createheight110up">
                    <input type="text" placeholder="ชื่อ *" v-model="height110up.name_thai" required>
                    <input type="text" placeholder="name" v-model="height110up.name_eng">
                    <input type="text" placeholder="รายละเอียด" v-model="height110up.detail" required>
                    <input type="text" placeholder="ความพร้อมใช้งาน" v-model="height110up.availability">
                    <input type="text" placeholder="ความจุ *" v-model="height110up.capacity" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/height110ups')">กลับ</button>                </form>
            </div>
        </div> 
    </div2>
</template>
<script>
import height110upService from '@/services/height110upService'
export default {
    data() {
        return {
            height110up: {
                name_thai: '',
                name_eng: '',
                detail: '',
                availability: '',
                capacity: '',
            }
        }
    }, 
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        async createheight110up() {
            try {
                await height110upService.post(this.height110up)
                this.$router.push({
                    name: 'height110ups'
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
   