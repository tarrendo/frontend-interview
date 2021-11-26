<template>
    <div class="main_container">
        <div class="cards_container">
            <div v-for="item in list" :key="item.message" class="card_container">
                <CardComponent :item="item"/>
                <p class="card_message">{{item.message}}</p>
                <PlatformsComponent :item="item" />
            </div>
        </div>
    </div>
</template>
<script>
import CardComponent from './CardComponent.vue'
import PlatformsComponent from './PlatformsComponent.vue'
    export default {
  components: { CardComponent, PlatformsComponent },
        props: {
            list: Array
        }
    }
</script>