import Vue from 'vue/dist/vue.js'
import Vue2CoverImage from '../src/main';

Vue.use(Vue2CoverImage);

new Vue({
    el: '#app',
    //components: {'vue2-cover-image': Vue2CoverImage.Vue2CoverImage}, //instead of Vue.use to use locally
    methods: {},
    mounted() {

    }
});
