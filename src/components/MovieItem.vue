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
const props = defineProps({
    movie: Object
});

const emits = defineEmits(["deleteMovie"]);
</script>

<style scoped>

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

/* Knapp */
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

/* Dölj på små skärmar */
.hide-mobile {
    display: none;
}

@media screen and (min-width: 500px){
    .status {
        display: table-cell;
    }
}

@media screen and (min-width: 700px) {
    .hide-mobile {
        display: table-cell;
    }
}
</style>