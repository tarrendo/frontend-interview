import Vue from 'vue';
import 'regenerator-runtime/runtime';
import './main.css';

Vue.component('app', require('./components/App').default);

new Vue({
    el: '#app',
});

