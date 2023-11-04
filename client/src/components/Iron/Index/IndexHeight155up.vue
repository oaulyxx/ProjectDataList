<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Height155up</span></h1>
        <p><button v-on:click="create">Create Height155up</button></p>
        <div v-for="height155up in height155ups" v-bind:key="height155up.id">
            <div><a>ชื่อ:</a> <a1>{{ height155up.name_thai }} {{ height155up.name_eng }}</a1></div>
            <div><a>ความพร้อมใช้งาน:</a> <a1>{{ height155up.availability }}</a1></div>
            <div><a>ความจุ:</a> <a1>{{ height155up.capacity }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/height155up/' + height155up.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/height155up/edit/' + height155up.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteHeight155up(height155up)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import height155upService from '@/services/height155upService'
export default {
    data() {
        return {
            height155ups: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.height155ups = (await height155upService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'height155up-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteHeight155up(height155up) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await height155upService.delete(height155up)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.height155ups = (await height155upService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>
