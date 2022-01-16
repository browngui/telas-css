let item1 = document.querySelector(`h1`);
item1.addEventListener(`click`, mudarTema);

function mudarTema(){
    let body = document.body;
    body.classList.toggle(`dark_mode`);
}

