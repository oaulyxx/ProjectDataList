<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>height90up</span></h1>
        <p><button v-on:click="create">Create height90up</button></p>
        <div v-for="height90up in height90ups" v-bind:key="height90up.id">
            <div><a>ชื่อ:</a> <a1>{{ height90up.name_thai }} {{ height90up.name_eng }}</a1></div>
            <div><a>ความพร้อมใช้งาน:</a> <a1>{{ height90up.availability }}</a1></div>
            <div><a>ความจุ:</a> <a1>{{ height90up.capacity }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/height90up/' + height90up.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/height90up/edit/' + height90up.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteheight90up(height90up)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import height90upService from '@/services/height90upService'
export default {
    data() {
        return {
            height90ups: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.height90ups = (await height90upService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'height90up-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteheight90up(height90up) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await height90upService.delete(height90up)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.height90ups = (await height90upService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>
