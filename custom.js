const quotes = [{
    quote: `"L'éducation est l'arme la plus puissante pour changer le monde."`,
    writer: `-Nelson Mandela`
}, {
    quote: `"Il n'existe pas d'autre éducation intelligente que d'être soi-même un exemple."`,
    writer: `-Albert Einstein`
}, {
    quote: `"Le bienfait revient toujours à la porte de son auteur."`,
    writer: `-Abraham Lincoln`
}, {
    quote: `"Les bienfaits d'une main odieuse tiennent lieu d'offenses."`,
    writer: `-Pierre Corneille`
}, {
    quote: `"L'anarchie est l'abus de la république, comme le despotisme est l'abus de la royauté."`,
    writer: `-Voltaire`
}, {
    quote: `"Il n'y a rien de pire que l'anarchie."`,
    writer: `-Bossuet`
}, {
    quote: `"Nous ne ressentons nos biens et nos maux qu'à proportion de notre amour-propre."`,
    writer: `-La Rochefoucauld`
}, {
    quote: `"L'amour-propre prend le mors aux dents si on lui lâche trop la bride."`,
    writer: `-Giacomo Casanova`
}, {
    quote: `"La meilleure chose à propos de l'avenir, c'est qu'il vient seulement un jour à la fois."`,
    writer: `-Abraham Lincoln`
}, {
    quote: `"Pour ce qui est de l'avenir, il ne s'agit pas de le prévoir mais de le rendre possible."`,
    writer: `-Antoine de Saint-Exupéry`
},]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer
});