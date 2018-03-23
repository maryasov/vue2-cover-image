<template>
    <div class="bg-image" :style="{width: width || '150px', height: height || '150px', 'background-image': 'url('+path+')', 'background-size': size || 'cover'}">
        <div class="blurb"><slot><div class="translucent" v-if="caption" :title="text(caption)" v-text="caption"></div></slot></div>
    </div>
</template>

<script>
    import youtubeThumbnail from 'youtube-thumbnail';

    export default {
        props: ['src', 'width', 'height', 'caption', 'size'],
        watch: {
            src: {
                immediate: true,
                handler() {
                    setTimeout(() => this.load(), 0);
                }
            }
        },
        methods: {
            load() {
                let img = new Image();
                img.src = /youtube\.com/i.test(this.src) ? youtubeThumbnail(this.src).high.url : this.src;
                img.onload = () => this.path = img.src;
                img.onerror = () => this.path = this.error;
                this.path = this.loading;
            },
            text(txt) {
                let d = document.createElement( 'div' );
                d.innerHTML = txt;
                return d.textContent;
            }
        },
        data() {
            return {
                path: require('../img/loading.gif'),
                error: require('../img/img-error.png'),
                loading: require('../img/loading.gif'),
            }
        }
    }
</script>

<style scoped>
    .bg-image {
        position: relative;
        display: inline-block;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .bg-image .translucent {
        background: rgba(0, 0, 0, 0.4);
        color: white;
    }

    .bg-image .blurb {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
    }
</style>