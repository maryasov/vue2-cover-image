# Vue2CoverImage
> Cover Image Component for Vue 2.x

Display your images as a DIV's background instead of \<img\> tag. 

![Screenshot](https://i.imgur.com/ytEJy1Z.jpg)

This way you can resize your images, stretch or crop them to fill the required area using `background-size` css property.

Also supports loading animation while image is loading and it can extract YouTube thumbnails from YouTube URLs too!

One side benefit: Now nobody can right click on your images and save them (since they are rendered as backgrounds).

See index.html for examples 
 
## Install

``` bash
    npm install vue2-cover-image --save
```

## Usage
Require the component (globally or in another component)
```
components: {
    'vue2-cover-image': require('Vue2CoverImage')
},
```
Then in your template:
```
<div>
...
<vue2-cover-image src="image-url"></vue2-cover-image>
...
</div>
```

## Example

See ```index.html``` for example use


## Contributing
Contributions are welcome

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
