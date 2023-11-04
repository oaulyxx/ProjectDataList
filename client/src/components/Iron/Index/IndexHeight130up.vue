<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Height130up</span></h1>
        <p><button v-on:click="create">Create Height130up</button></p>
        <div v-for="height130up in height130ups" v-bind:key="height130up.id">
            <div><a>ชื่อ:</a> <a1>{{ height130up.name_thai }} {{ height130up.name_eng }}</a1></div>
            <div><a>ความพร้อมใช้งาน:</a> <a1>{{ height130up.availability }}</a1></div>
            <div><a>ความจุ:</a> <a1>{{ height130up.capacity }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/height130up/' + height130up.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/height130up/edit/' + height130up.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteHeight130up(height130up)">ลบข้อมูล</button>
            <hr>
        </div>
    </div> 
</template>
<script>
import height130upService from '@/services/height130upService'
export default {
    data() {
        return {
            height130ups: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.height130ups = (await height130upService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'height130up-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteheight130up(height130up) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await height130upService.delete(height130up)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.height130ups = (await height130upService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>
