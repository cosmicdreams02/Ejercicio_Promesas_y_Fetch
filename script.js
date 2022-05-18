const boton = document.querySelector('button');
let entrada = document.querySelector('#nombreusuario');
let avatar = document.querySelector('img');
let figcaption = document.querySelector('figcaption');
let span = document.querySelector('span');
// entrada.addEventListener('change', () => {
//   console.log(entrada.value);
// });

const peticion = function (usuario) {
  return fetch(`https://api.github.com/users/${usuario}`)
    .then((resp) => resp.json())
    .then(({ login, followers, avatar_url }) => {
      avatar.setAttribute('src', avatar_url);
      figcaption.textContent = `Usuario: ${login}`;
      span.textContent = `Seguidores: ${followers}`;
    });
};
boton.addEventListener('click', peticion('AnibalMontero'));