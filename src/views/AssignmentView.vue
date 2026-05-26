<script setup></script>

<template>
        <article class="content">
                <h2>Om uppgiften</h2>
                <p>
                        I arbetet med den här uppgiften installerade jag Vue.js med hjälp av Vite, vilket gjorde att det
                        var enkelt att komma igång. Med tidigare erfarenhet av ramverk som Angular gick det snabbt att
                        sätta sig in i Vue och förstå arbetssättet, samtidigt som jag kunde jämföra likheter och
                        skillnader.
                </p>
                <p>
                        Under projektet arbetade jag med att visa en lista av filmer i tabellform. En utmaning var att
                        jag först placerade hela tabellen i en komponent, vilket ledde till att tabellens header
                        renderades flera gånger. Detta löste jag genom att istället dela upp strukturen och endast
                        rendera rader via en komponent som då gav en tydligare separation mellan struktur och innehåll.
                </p>
                <p>
                        Jag upplevde även att kommunikationen mellan komponenter krävde viss anpassning, särskilt hur
                        props och events används i Vue. Genom att arbeta praktiskt med detta fick jag en bättre
                        förståelse för hur data flödar mellan komponenter. En annan utmaning var hanteringen av
                        formulärdata, där betygsfältet initialt gav felaktiga värden. Detta löstes genom att justera
                        både inputfältet och valideringen i backend. Detta gav en bättre förståelse för samspelet
                        mellan frontend och backend. Något som fungerade särskilt bra var Vue:s sätt att hantera
                        data-binding, där förändringar i data direkt speglas i gränssnittet.
                </p>
                <p>
                        Sammanfattningsvis upplever jag att Vue.js har varit ett bra och strukturerat ramverk som passar
                        väl för att bygga moderna applikationer. Med min tidigare erfarenhet av andra ramverk kunde jag
                        snabbt komma in i arbetssättet, samtidigt som jag fick en djupare förståelse för Vues specifika
                        metoder och lösningar. Jag kan absolut tänka mig att arbeta vidare med Vue i framtiden.
                </p>
        </article>
</template>

<style scoped>
@media screen and (min-width: 700px) {
        h2 {
                font-size: 1.5em;
        }
}
</style>