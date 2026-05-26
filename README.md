# Filmlistan - vue.js

Detta är en Single Page Application (SPA) byggd med vue.js. Applikationen hanterar en lista av filmer genom att hämta, lägga till och radera data via ett API. 

[Länk till publicerad applikation](https://movie-app-s2xv.vercel.app/)

## Verktyg
- Vue.js (CLI med Vite)
- Vue Router
- JavaScript
- Fetch API
- HTML & CSS (inkl. komponentbaserad CSS)

## Funktionalitet
- Visa filmer från ett API (GET)
- Lägga till nya filmer (POST)
- Radera filmer (DELETE)
- Responsiv design
- Dynamisk rendering med Vue.js

## Projektstruktur
```
src/
├── components/       - HomeView, MovieListView, AssignmentView
├── views/            - Header, Footerm MovieItem, AddMovie
├── router/           - Routing
└── assets/           - Bilder & global css
```

## API
[Länk till API som applikationen använder](https://fastify-movieapi.onrender.com/movies)

APIets github repo: [https://github.com/rare2400/fastify-movieAPI.git](https://github.com/rare2400/fastify-movieAPI.git)

## Installation
1. Klona repo:

```sh
git clone https://github.com/rare2400/movie-app.git
```

2. Installera dependencies

```sh
npm install
```

3. Starta utvecklingsserver

```sh
npm run dev
```

4. Kompilera och minifiera för produktion

```sh
npm run build
```

## Skapad av
Skapad som en del av en skoluppgift   
Mittuniversitetet, Webbutvecklingsprogrammet    
Ramona Reinholdz   
[rare2400@student.miun.se](rare2400@student.miun.se)      
2026-05-26
