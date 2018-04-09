<template>
    <div>
        <vue2-cover-image src="http://www.deelay.me/10000/https://i.ytimg.com/vi/SfBR9aGrk9k/maxresdefault.jpg" caption="Slow loading image" width="200px" height="130px" class="thumbnail"></vue2-cover-image>

        <vue2-cover-image src="http://www.example.com/error.jpg" caption="Missing image" width="200px" height="130px" class="thumbnail"></vue2-cover-image>

        <vue2-cover-image src="https://www.youtube.com/watch?v=7WAsh5XBxbw" caption="Automatic Youtube thumb" width="200px" height="130px" class="thumbnail"></vue2-cover-image>

        <vue2-cover-image src="https://i.ytimg.com/vi/SfBR9aGrk9k/maxresdefault.jpg" width="200px" height="130px" class="thumbnail">
            <button class="btn btn-danger btn-xs" type="button">
                <i class="glyphicon glyphicon-alert"></i> HTML button
            </button>
        </vue2-cover-image>

        <a href="//google.com">
            <vue2-cover-image src="https://i.imgur.com/IzxYzQO.jpg" width="200px" height="130px" class="thumbnail"></vue2-cover-image>
        </a>
    </div>
</template>

<script>
    import Vue2CoverImage from '../src/index';

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            Vue2CoverImage
        },
        methods: {},
    }
</script>
