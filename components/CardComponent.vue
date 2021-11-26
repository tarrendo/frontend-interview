<template>
    <div class="main_image_container">
        <img v-if="item.thumbnail_url" class="main_image" :src="item.thumbnail_url" alt="image failed to load">
        <img v-else class="main_image" src="public\images\placeholder.png" alt="image failed to load">
        <div class="assets_container">
            <div v-if="item.format=='IMAGE' || item.format=='VIDEO'">
                <span>{{ item.selected_assets }} / {{ item.total_assets }} Selected&nbsp;</span>
                <img class="asset_image" v-if="item.format=='IMAGE'" src="public\assets\camera-solid.svg">
                <img class="asset_image" v-if="item.format=='VIDEO'" src="public\assets\video-solid.svg">
            </div>
            <div v-else>
                <img class="asset_image" v-if="item.format=='TEXT'" src="public\assets\pencil-alt-solid.svg">
                <img class="asset_image" v-if="item.format=='URL'" src="public\assets\link-solid.svg">
            </div>
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