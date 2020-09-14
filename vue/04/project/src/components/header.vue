<template>
    <div>
        <ul class="nav">
            <li>
                <router-link :to="{path:'/index/shop',query:{id:1}}">1</router-link>
            </li>
            <li>
                <router-link :to="{path:'/index/shop',query:{id:2}}">2</router-link>
            </li>
            <li>
                <router-link :to="{path:'/index/shop',query:{id:3}}">3</router-link>
            </li>
            <li>
                <router-link :to="{path:'/index/shop',query:{id:4}}">4</router-link>
            </li>
            <li>
                <router-link :to="{path:'/index/shop',query:{id:5}}">5</router-link>
            </li>
            <li>
                <router-link :to="{path:'/index/shop',query:{id:6}}">6</router-link>
            </li>    
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped='scpoed'>
    *{
        margin: 0;
        padding: 0;
        list-style:none;
    }
    .nav{
        width: 1000px;
        height: 50px;
        background: red;
    }
    .nav li{
        float: left;
        color: white;
        line-height: 50px;
        text-align: center
    }
</style>
