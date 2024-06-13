const body = document.querySelector('body');
const mainContainer = document.getElementsByClassName('main_conteiner__container')[0];

function charPageOpen(listName, charName) {
    localStorage.setItem('listName', listName);
    localStorage.setItem('charName', charName);

    window.open('pages/characterPage.html', '_self');
}

function initApp(nameGame, listName){
    nameGame.forEach((char) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('character_card');
        newDiv.innerHTML = `
            <a class="${listName} ${char.charName}" onclick="charPageOpen(this.classList[0], this.classList[1])">
                <img src="${char.charImage}">
                <div class="hover_line"></div>
                <div class=charText>
                    <p class="charName">${char.charName}</p>
                    <p class="charType">${char.charType}</p>
                </div>
            </a>`;
        mainContainer.appendChild(newDiv);
    })
}

if(body.classList.contains('characters')){
    initApp(cards_list, body.classList[0]);
}else if(body.classList.contains('items')){
    initApp(items_list, body.classList[0]);
}
