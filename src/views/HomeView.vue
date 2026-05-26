<template>
    <div class="banner">
        <img src="@/assets/banner.png" alt="filmlistan banner" width="500">
    </div>

    <article class="content">
        <h2>Filmer</h2>
        <p>Film är ett av mina största fritidsintressen. Jag tycker om att försvinna in i andra världar, följa spännande
            berättelser och upptäcka nya karaktärer. För mig är film både ett sätt att koppla av och en källa till
            inspiration, där jag kan ta del av olika perspektiv, miljöer och berättarstilar.</p>

        <p>Jag har en särskild förkärlek för action och fantasy. Marvel-filmerna är några av mina absoluta favoriter,
            speicellt Guardians of the Galaxy-filmerna. Jag gillar kombinationen av action, humor och
            karaktärsutveckling skapar en underhållande och engagerande helhet. Det jag uppskattar mest är hur filmerna
            hänger ihop och bygger vidare på ett större universum.
        </p>
        <p>
            Utöver det gillar jag även klassiska fantasyvärldar som Harry Potter och Sagan om ringen. Dessa berättelser
            erbjuder ett mer djupgående narrativ och imponerande världar, där både miljöerna och karaktärerna bidrar
            till en stark helhetsupplevelse.
        </p>

        <p>
            På den här sidan samlar jag filmer jag har sett eller vill se, och håller koll på mina favoriter. Det
            fungerar som ett sätt att strukturera mitt filmintresse och ger mig en tydlig överblick, samtidigt som det
            gör det enklare att upptäcka nya filmer längs vägen.
        </p>
    </article>

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