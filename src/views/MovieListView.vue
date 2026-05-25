<template>
    <div class="page-header">
        <h2>Filmlistan</h2>
        <p>Här kan du se den aktuella filmlistan</p>
    </div>

    <AddMovie @refreshMovieList="getMovies" />

    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Titel</th>
                    <th>År</th>
                    <th class="hide-mobile">Längd</th>
                    <th class="hide-mobile">Betyg</th>
                    <th class="status">Status</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <MovieItem v-for="movie in movies" :movie="movie" :key="movie._id" @delete-movie="deleteMovie" />
            </tbody>
        </table>
    </div>


</template>

<script setup>
import MovieItem from '@/components/MovieItem.vue';
import AddMovie from '@/components/addMovie.vue';
import { ref, onMounted } from 'vue';

const movies = ref([]);

// Get movies when component is mounted
onMounted(() => {
    getMovies();
});

// Fetch movies from API
const getMovies = async () => {
    try {
        const res = await fetch("https://fastify-movieapi.onrender.com/movies");

        if (res.ok) {
            const data = await res.json();

            movies.value = data;
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// Delete movie by ID
const deleteMovie = async (id) => {
    try {
        const res = await fetch(`https://fastify-movieapi.onrender.com/movies/${id}`, {
            method: "DELETE"
        });

        if (res.ok) {
            getMovies();
        }
    } catch (error) {
        console.error("Error deleteing movie:", error);
    }
}
</script>

<style scoped>
.page-header {
    text-align: center;
    margin: 1em;
}

h2 {
    font-size: 2em;
}

p {
    font-size: 1.2em;
}

/* Table */
.table-container {
    margin: 1rem auto;
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    text-align: left;
    padding: 0.75rem;
    border-bottom: 2px solid #ddd;
    font-size: 0.9rem;
}

/* Hide cells on small screens */
.hide-mobile {
    display: none;
}

.status {
    display: none;
}

@media screen and (min-width: 500px){
    /* Display status column on medium screens and up */
    .status {
        display: table-cell;
    }
}

@media screen and (min-width: 700px) {
    /* Display length and rating columns on larger screens */
    .hide-mobile {
        display: table-cell;
    }

    .table-container {
        max-width: 800px;
        margin: 2rem auto;
    }
}
</style>