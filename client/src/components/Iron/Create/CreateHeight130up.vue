<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Height130up</span></h1>
                <form class="register-form" v-on:submit.prevent="createheight130up">
                    <input type="text" placeholder="ชื่อ *" v-model="height130up.name_thai" required>
                    <input type="text" placeholder="name" v-model="height130up.name_eng">
                    <input type="text" placeholder="รายละเอียด" v-model="height130up.detail" required>
                    <input type="text" placeholder="ความพร้อมใช้งาน" v-model="height130up.availability">
                    <input type="text" placeholder="ความจุ *" v-model="height130up.capacity" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/height130ups')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import height130upService from '@/services/height130upService'
export default {
    data() {
        return {
            height130up: {
                name_thai: '',
                name_eng: '',
                detail: '',
                availability: '',
                capacity: '',
            }
        }
    },
    methods: {
        async createheight130up() {
            try {
                await height130upService.post(this.height130up)
                this.$router.push({
                    name: 'height130ups'
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
   