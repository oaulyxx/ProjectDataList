<template>
    <div1>
        <h1><span>Theme Park</span></h1>
        <ul>
            <li style="--clr: #00ade1;">
            <a href="#/height90ups" data-text="height90up">height90up</a>
            </li>
            <li style="--clr: #ff6493;">
            <a href="#/height110ups" data-text="height110up">height110up</a>
            </li>
            <li style="--clr: #00dc82;">
            <a href="#/height130ups" data-text="height130up">height130up</a>
            </li>
            <li style="--clr: #ffdd1c;">
            <a href="#/height155ups" data-text="height155up">height155up</a>
            </li>
        </ul>
    </div1>
</template>
<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    },
}
</script>
<style scoped></style>
   