<script setup>
import { ref, onMounted } from 'vue';
import { decodeBlurHash, getBlurHashAverageColor } from 'fast-blurhash';

document.body.style.color = 'white';

const blurhash = ref("L6INp#-p00:$~qIp4n-o01I;6AJB");
const imageURL = ref(null);
const imageTwoURL = ref("https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
const blurAverage = ref(null);
let rotation = 0;

const imageArray = [
    "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/37/IHLjdHdzSvi0rgUMMlSK_TE3_0286.jpg?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508163223045-1880bc36e222?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542769188-59f2674e49e5?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512861506260-6520871bbdaa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


]

let imageIndex = 2;

onMounted(async () => {
    //get average color of blurhash
    const rgb = getBlurHashAverageColor(blurhash.value);
    const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
    blurAverage.value = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
    console.log(blurAverage.value);

    //fade average color in
    document.querySelector('#color-average').style.opacity = "1";

    //simulate decode
    await new Promise(resolve => setTimeout(resolve, 500));

    //display blurhash
    displayBlurHash(blurhash.value);

    //simulate loading large image
    await new Promise(resolve => setTimeout(resolve, 2000));

    //set inital background image
    imageURL.value = imageArray[0];
    imageTwoURL.value = imageArray[1];

    //transition to image
    document.querySelector('#image').style.opacity = "1";

    //rotate images every minute
    setInterval(() => {
        console.log('in interval')
        if (rotation == 0) {
            console.log('rotation is 0, fading image-two in');
            document.querySelector('#image-two').style.opacity = "1";
            rotation = 1;
        } else {
            console.log('rotation is 1, fading image-two out');
            document.querySelector('#image-two').style.opacity = "0";
            rotation = 0;
        }
    }, 60000);

    document.querySelector('#image-two').addEventListener('transitionend', () => {
        console.log('transition ended');
        if (true) {
            if (document.querySelector('#image-two').style.opacity == 1) {
                console.log('image two is visible');
                imageURL.value = imageArray[imageIndex];
                imageIndex++;
                if(imageIndex == imageArray.length) {
                    imageIndex = 0;
                }
            } else {
                console.log('image two is not visible');
                imageTwoURL.value = imageArray[imageIndex];
                imageIndex++;
                if(imageIndex == imageArray.length) {
                    imageIndex = 0;
                }
            }

        }
    });
});

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}




function displayBlurHash(bh) {
    //decode the hash and get pixels
    const pixels = decodeBlurHash(bh, 32, 24, 1);

    //generate canvas
    const canvasElement = document.querySelector('canvas');
    const context = canvasElement.getContext('2d');

    //set width and height to match original image
    canvasElement.width = 32;
    canvasElement.height = 24;

    const imageData = context.createImageData(32, 24);
    imageData.data.set(pixels);
    context.putImageData(imageData, 0, 0);

    canvasElement.style.objectFit = "cover";
    canvasElement.style.width = "100%";
    canvasElement.style.height = "100%";
    canvasElement.style.position = "fixed";
    canvasElement.style.zIndex = "-4";
    document.querySelector('#background').style.opacity = "1";

    return 0;

}

//takes an array [H, S, L]
function getTextColor(backgroundHSL) {
    const lightness = backgroundHSL[2];

    //WCAG
    const contrastRatio = (lightness + 0.05) / .05;

    //black or white
    const textColor = contrastRatio >= 4.5 ? 'black' : 'white';

    return textColor;
}


</script>

<template>
    <div id="color-average" :style="{ background: `${blurAverage}` }"></div>
    <div id="background">
        <canvas></canvas>
    </div>
    <div id="image" :style="{ backgroundImage: `url(${imageURL})` }">
    </div>
    <div id="image-two" :style="{ backgroundImage: `url(${imageTwoURL})` }"></div>
    <div id="overlay">

    </div>
</template>

<style scoped>
#color-average {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -3;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;

}

#background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -4;
    width: 100%;
    height: 100%;
    /* background-image: url(https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D); */
    background-size: cover;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

#image {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -3;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

#image-two {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

#overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, .0) 33%);
    pointer-events: none;
    z-index: -1;
}
</style>