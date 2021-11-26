<template>
    <div class="platforms_container">
        <div class="platform_container">
            <img class="platform_image" src="public\images\platforms\facebook.svg">
            <img class="platform_has_content" v-if="item.platforms[0].has_content === true" src="public\images\platforms\enabled.svg">
            <img class="platform_has_content" v-if="item.platforms[0].has_content === false" src="public\images\platforms\disabled.svg">
        </div>
        <div class="platform_container">
            <img class="platform_image" src="public\images\platforms\instagram.svg">
            <img class="platform_has_content" v-if="item.platforms[1].has_content === true" src="public\images\platforms\enabled.svg">
            <img class="platform_has_content" v-if="item.platforms[1].has_content === false" src="public\images\platforms\disabled.svg">
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            item: Object
        }
    }
</script>