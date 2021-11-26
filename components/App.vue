<template>
    <div class="cards_container">
        <div v-for="item in list" :key="item.message" class="card_container">
            <CardComponent :item="item"/>
            <span class="card_message">{{item.message}}</span>
            <PlatformsComponent :item="item" />
        </div>
    </div>
</template>
<script>
    import CardComponent from './CardComponent.vue';
    import PlatformsComponent from './PlatformsComponent.vue';
    export default {
    components: { CardComponent, PlatformsComponent},
        data(){
            return{
                list:[]
            }
        },
        async created(){
            const response = await fetch("/json/question1.json");
            const data = await response.json();
            this.list = data;
        }
    }
</script>