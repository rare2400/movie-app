<template>
    <header>
        <div class="container">
            <RouterLink to="/" class="logo">Filmlistan</RouterLink>

            <nav class="nav-links">
                <ul>
                    <li>
                        <RouterLink to="/">Hem</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/filmlista">Filmer</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/om-vue">Om uppgiften</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
header {
    background-color: #111;
    color: #fff;
    border-bottom: 1px solid #505050;
    margin-bottom: 1em;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
}

.nav-links ul {
    list-style: none;
    display: flex;
    font-size: 0.9em;
}

.nav-links ul li a {
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
}

@media screen and (min-width: 700px) {
    .logo {
        font-size: 2rem;
    }

    .nav-links ul {
    font-size: 1em;
}
}
</style>