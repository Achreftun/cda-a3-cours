var bouton = document.querySelector('button')

var ajouterCommentaire = () => {
    var commentaire = document.querySelector('#commentaire')
    var comments = document.querySelector('#comments')
    // comments.innerHTML += `<p>${commentaire.value} </p>`
    var p = document.createElement('p')
    p.innerHTML = commentaire.value
    comments.appendChild(p)
    commentaire.value = ''
    bouton.removeEventListener('click', ajouterCommentaire)
}
bouton.addEventListener('click', ajouterCommentaire)

var somme = (a = 0, b = 0) => {
    var resultat = a + b
    return resultat
}
// var somme = function (a = 0, b = 0) {
//     return a + b
// }
console.log(somme());
console.log(somme(2));
console.log(somme(2, 3));

