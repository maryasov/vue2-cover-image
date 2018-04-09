import Vue2CoverImage from './components/Vue2CoverImage'

const Vue2CoverImagePlugin = (Vue, params) => {
    Vue.component('vue2-cover-image', Vue2CoverImage);
};

Vue2CoverImage.install = Vue2CoverImagePlugin;

export default Vue2CoverImage;
export {Vue2CoverImage, Vue2CoverImagePlugin};
