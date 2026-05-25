<template>
    <form @submit.prevent="addMovie">
        <h2>Lägg till film</h2>
        <p class="error" v-if="error">{{ error }}</p>
        <label for="title">Titel*</label>
        <input type="text" id="title" name="title" v-model="movie.title" placeholder="Filmens titel">

        <label for="year">År*</label>
        <input type="number" id="year" name="year" v-model="movie.year" placeholder="Ex. 2014">

        <label for="length">Längd (min)*</label>
        <input type="number" id="length" name="length" v-model="movie.length" placeholder="Filmens längd">

        <label for="rating">Betyg</label>
        <input type="number" id="rating" name="rating" v-model="movie.rating" placeholder="Filmens betyg" step="0.1">
        

        <div class="checkbox-wrapper">
            <label for="watched" class="watched-label">Sett</label>
            <input type="checkbox" id="watched" name="watched" v-model="movie.watched">
        </div>

        <br>

        <input type="submit" value="Lägg till">
    </form>
</template>

<script setup>
import { ref } from 'vue';

const movie = ref({
    title: "",
    year: null,
    length: null,
    rating: null,
    watched: false
});

const error = ref("");

const emits = defineEmits(["refreshMovieList"]);

const addMovie = async () => {
    if (!movie.value.title || !movie.value.year || !movie.value.length) {
        error.value = "Titel, år och längd är obligatoriska.";
        return;
    }

    error.value = "";

    const data = {
        title: movie.value.title,
        year: movie.value.year,
        length: movie.value.length,
        rating: movie.value.rating,
        watched: movie.value.watched
    };

    try {
        const res = await fetch('https://fastify-movieapi.onrender.com/movies', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            emits("refreshMovieList");

            movie.value = {
                title: "",
                year: null,
                length: null,
                rating: null,
                watched: false
            };

        } else {
            error.value = "Något gick fel, försök igen.";
        }
    } catch (err) {
        console.error("Error adding movie:", err);
        error.value = "Något gick fel, försök igen.";
    }
}

</script>

<style scoped>
.error {
    color: red;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    margin: 0 1em;
    background-color: #111;
    padding: 1rem;
    border-radius: 4px;
    border: 2px solid #cccccc9a;
}

form label {
    margin-bottom: 0.2rem;
}

form input {
    padding: 0.5rem;
    margin-bottom: 0.75rem;
    border: 2px solid #cccccc9a;
    border-radius: 4px;
    background-color: #1e1e1e;
    color: #fff;
    font-family: inherit;
}

form input[type="checkbox"] {
    width: 20%;
    margin: 0;
}

form input:focus,
form input:active {
    outline: none;
    border-color: #fff;
}

form input[type="submit"] {
    background-color: #2C36F2;
    padding: 0.7em 0;
    color: #fff;
    font-weight: 600;
    border: 2px solid #2C36F2;
    cursor: pointer;
    transition: border-color 0.3s ease;
}

form input[type="submit"]:hover {
    border-color: #ccc;
}

@media screen and (min-width: 700px) {
    form {
        max-width: 500px;
        margin: 0 auto;
    }
}
</style>