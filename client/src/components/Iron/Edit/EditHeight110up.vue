<template>
    <div>
        <h1><span>Edit Height110up</span></h1>
        <form v-on:submit.prevent="editheight110up">
            <p>ชื่อ: <input type="text" v-model="height110up.name_thai"></p>
            <p>name: <input type="text" v-model="height110up.name_eng"></p>
            <p>รายละเอียด: <input type="text" v-model="height110up.detail"></p>
            <p>ความพร้อมใช้งาน: <input type="text" v-model="height110up.availability"></p>
            <p>ความจุ: <input type="text" v-model="height110up.capacity"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ height110up.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ height110up.name_eng }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ height110up.detail }}</a1></p>
            <p><a>ความพร้อมใช้งาน:</a> <a1>{{ height110up.availability }}</a1></p>
            <p><a>ความจุ:</a> <a1>{{ height110up.capacity }}</a1></p>
            <p></p>
        </div>

    </div>
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
        async editheight110up() {
            try {
                await height110upService.put(this.height110up)
                this.$router.push({
                    name: 'height110ups'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let height110upId = this.$route.params.height110upId
            this.height110up = (await height110upService.show(height110upId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>