<template>
    <div class="banner">
        <img src="@/assets/banner.png" alt="filmlistan banner" width="500">
    </div>

    <h2>Filmlistan</h2>
    <p>Välkommen till filmlistan</p>

</template>

<script setup>

</script>

<style scoped>
.banner {
    width: 100%;
}

.banner img {
    max-width: 100%;
    width: 700px;
}

h2 {
    text-align: center;
    font-size: 2em;
}

p {
    text-align: center;
    font-size: 1.2em;
}

@media screen and (min-width: 700px) {
    .banner {
        max-width: 1220px;
        margin: 0 auto;
    }

    .banner img {
        max-width: 100%;
        width: 1220px;
    }
}
</style>