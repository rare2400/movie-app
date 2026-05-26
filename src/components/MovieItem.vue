<template>
    <tr>
        <td class="title">{{ movie.title }}</td>
        <td>{{ movie.year }}</td>
        <td class="hide-mobile">{{ movie.length }}min</td>
        <td class="hide-mobile">{{ movie.rating ?? "Inget betyg" }}</td>
        <td class="status">
            <span class="badge" :class="movie.watched ? 'seen' : 'not-seen'">
                {{ movie.watched ? 'Sett' : 'Inte sett' }}
            </span>
        </td>
        <td>
            <button @click="emits('deleteMovie', movie._id)">Ta bort</button>
        </td>
    </tr>
</template>

<script setup>
// props to receive movie data from parent component
const props = defineProps({
    movie: Object
});

// emit to notify parent component to delete a movie by ID
const emits = defineEmits(["deleteMovie"]);
</script>

<style scoped>
/* table styles */
td {
    padding: 0.75rem;
    border-bottom: 1px solid #eee;
}

tr:hover {
    background-color: #cccccc28;
}

.title {
    max-width: 230px;
}

/* status badge - green if seen, red if not seen */
.badge {
    padding: 0.2em 0.5em;
    border-radius: 4px;
    font-size: 0.8em;
}

.seen {
    background-color: #d4edda;
    color: green;
    font-weight: bold;
}

.not-seen {
    background-color: #f8d7da;
    color: red;
    font-weight: bold;
}

/* button */
button {
    padding: 0.3rem 0.6rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: #e74c3c;
    color: white;
}

button:hover {
    background: #c0392b;
}

/* hide status, length and rating on small screens */
.status {
    display: none;
}

.hide-mobile {
    display: none;
}

/* display status on medium screens and up */
@media screen and (min-width: 500px){
    .status {
        display: table-cell;
    }
}

/* show length and rating on larger screens */
@media screen and (min-width: 700px) {
    .hide-mobile {
        display: table-cell;
    }
}
</style>