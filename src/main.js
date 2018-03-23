import Vue2CoverImage from './components/Vue2CoverImage'

const vue2coverimage = {Vue2CoverImage: Vue2CoverImage};

vue2coverimage.install = function (Vue) {
    Vue.component('vue2-cover-image', Vue2CoverImage);
};


if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vue2coverimage)
}

export default vue2coverimage
