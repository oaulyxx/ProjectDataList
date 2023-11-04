<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Height110up</span></h1>
        <p><button v-on:click="create">Create Height110up</button></p>
        <div v-for="height110up in height110ups" v-bind:key="height110up.id">
            <div><a>ชื่อ:</a> <a1>{{ height110up.name_thai }} {{ height110up.name_eng }}</a1></div>
            <div><a>ความพร้อมใช้งาน:</a> <a1>{{ height110up.availability }}</a1></div>
            <div><a>ความจุ:</a> <a1>{{ height110up.capacity }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/height110up/' + height110up.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/height110up/edit/' + height110up.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteheight110up(height110up)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import height110upService from '@/services/height110upService'
export default {
    data() {
        return {
            height110ups: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.height110ups = (await height110upService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'height110up-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteheight110up(height110up) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await height110upService.delete(height110up)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.height110ups = (await height110upService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>
