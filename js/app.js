let firstName = prompt(`Inserisci il nome`);
let surname = prompt(`Inserisci il cognome`);
let favoriteColor = prompt(`Inserisci il tuo colore preferito`);

let pswdwannabe = document.getElementById(`printed-text`);

pswdwannabe.innerHTML =
  firstName + surname + favoriteColor + Math.floor(Math.random() + 21);

// console.log(firstName + surname + favoriteColor);
