const body = document.querySelector('body');
const mainContainer = document.getElementsByClassName('main_conteiner__container')[0];

function charPageOpen(listName, charName) {
    localStorage.setItem('listName', listName);
    localStorage.setItem('charName', charName);

    window.open('characterPage.html', '_self');
}

function initApp(nameGame, listName){
    nameGame.forEach((char) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('character_card');
        if(listName === 'items'){
            newDiv.innerHTML = `
            <a class="${listName} ${char.charId}" onclick="charPageOpen(this.classList[0], this.classList[1])">
                <span class="background_elem"></span>
                <div class="hover_line"></div>
                <div class=charText>
                    <p class="charName">${char.charName}</p>
                    <p class="charType">${char.charType}</p>
                </div>
            </a>`;
        }else{
            newDiv.innerHTML = `
            <a class="${listName} ${char.charId}" onclick="charPageOpen(this.classList[0], this.classList[1])">
                <div class="image_conteiner"><img src="${char.charImage}"></div>
                <div class="hover_line"></div>
                <div class=charText>
                    <p class="charName">${char.charName}</p>
                    <p class="charType">${char.charType}</p>
                </div>
            </a>`;
        }
        mainContainer.appendChild(newDiv);
    })
}

if(body.classList.contains('characters')){
    initApp(cards_list, body.classList[0]);
}else if(body.classList.contains('items')){
    initApp(items_list, body.classList[0]);
}
