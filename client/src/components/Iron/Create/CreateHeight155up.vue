<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create height155up</span></h1>
                <form class="register-form" v-on:submit.prevent="createheight155up">
                    <input type="text" placeholder="ชื่อ *" v-model="height155up.name_thai" required>
                    <input type="text" placeholder="name" v-model="height155up.name_eng">
                    <input type="text" placeholder="รายละเอียด" v-model="height155up.detail" required>
                    <input type="text" placeholder="ความพร้อมใช้งาน" v-model="height155up.availability">
                    <input type="text" placeholder="ความจุ *" v-model="height155up.capacity" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/height155ups')">กลับ</button>                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import height155upService from '@/services/height155upService'
export default {
    data() {
        return {
            height155up: {
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
        async createheight155up() {
            try {
                await height155upService.post(this.height155up)
                this.$router.push({
                    name: 'height155ups'
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