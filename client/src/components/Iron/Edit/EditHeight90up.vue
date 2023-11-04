<template>
    <div>
        <h1><span>Edit Height90up</span></h1>
        <form v-on:submit.prevent="editheight90up">
            <p>ชื่อ: <input type="text" v-model="height90up.name_thai"></p>
            <p>name: <input type="text" v-model="height90up.name_eng"></p>
            <p>รายละเอียด: <input type="text" v-model="height90up.detail"></p>
            <p>ความพร้อมใช้งาน: <input type="text" v-model="height90up.availability"></p>
            <p>ความจุ: <input type="text" v-model="height90up.capacity"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ height90up.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ height90up.name_eng }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ height90up.detail }}</a1></p>
            <p><a>ความพร้อมใช้งาน:</a> <a1>{{ height90up.availability }}</a1></p>
            <p><a>ความจุ:</a> <a1>{{ height90up.capacity }}</a1></p>
            <p></p>
        </div>
    </div>
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
                capacity: '',
            }
        }
    },
    methods: {
        async editheight90up() {
            try {
                await height90upService.put(this.height90up)
                this.$router.push({
                    name: 'height90ups'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let height90upId = this.$route.params.height90upId
            this.height90up = (await height90upService.show(height90upId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>