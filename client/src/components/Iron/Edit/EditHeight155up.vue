<template>
    <div>
        <h1><span>Edit height155up</span></h1>
        <form v-on:submit.prevent="editheight155up">
            <p>ชื่อ: <input type="text" v-model="height155up.name_thai"></p>
            <p>name: <input type="text" v-model="height155up.name_eng"></p>
            <p>รายละเอียด: <input type="text" v-model="height155up.detail"></p>
            <p>ความพร้อมใช้งาน: <input type="text" v-model="height155up.availability"></p>
            <p>ความจุ: <input type="text" v-model="height155up.capacity"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ height155up.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ height155up.name_eng }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ height155up.detail }}</a1></p>
            <p><a>ความพร้อมใช้งาน:</a> <a1>{{ height155up.availability }}</a1></p>
            <p><a>ความจุ:</a> <a1>{{ height155up.capacity }}</a1></p>
            <p></p>
        </div>

    </div>
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
        async editheight155up() {
            try {
                await height155upService.put(this.height155up)
                this.$router.push({
                    name: 'height155ups'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let height155upId = this.$route.params.height155upId
            this.height155up = (await height155upService.show(height155upId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>