const firstName = prompt(`Inserisci il nome`);
const surname = prompt(`Inserisci il cognome`);
const favoriteColor = prompt(`Inserisci il tuo colore preferito`);

const pswdwannabe = document.getElementById(`printed-text`);

pswdwannabe.innerHTML =
  firstName + surname + favoriteColor + Math.floor(Math.random() * 99);
