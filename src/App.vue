<template>
    <div>
        <Container><Sprite :texture="picture"></Sprite></Container>
    </div>
</template>

<script setup lang="ts">
import picture from "./assets/picture.jpg";
console.log(picture);
</script>
