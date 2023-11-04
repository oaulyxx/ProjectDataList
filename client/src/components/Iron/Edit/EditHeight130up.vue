<template>
    <div>
        <h1><span>Edit height130up</span></h1>
        <form v-on:submit.prevent="editheight130up">
            <p>ชื่อ: <input type="text" v-model="height130up.name_thai"></p>
            <p>name: <input type="text" v-model="height130up.name_eng"></p>
            <p>รายละเอียด: <input type="text" v-model="height130up.detail"></p>
            <p>ความพร้อมใช้งาน: <input type="text" v-model="height130up.availability"></p>
            <p>ความจุ: <input type="text" v-model="height130up.capacity"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ height130up.name_thai }}</a1></p>
            <p><a>name:</a> <a1>{{ height130up.name_eng }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ height130up.detail }}</a1></p>
            <p><a>ความพร้อมใช้งาน:</a> <a1>{{ height130up.availability }}</a1></p>
            <p><a>ความจุ:</a> <a1>{{ height130up.capacity }}</a1></p>
            <p></p>
        </div>

    </div>
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
        async editheight130up() {
            try {
                await height130upService.put(this.height130up)
                this.$router.push({
                    name: 'height130ups'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let height130upId = this.$route.params.height130upId
            this.height130up = (await height130upService.show(height130upId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>