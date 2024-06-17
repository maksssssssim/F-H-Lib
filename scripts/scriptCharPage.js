const mainContainerChar = document.getElementsByClassName('main_conteiner')[0];
const aside = document.getElementsByClassName('aside')[0];
const title = document.querySelector('title');

function tableInit(listData){
    let table = document.createElement('table');

    let headerRow = table.insertRow();
    let headerCell = headerRow.insertCell();
    headerCell.setAttribute('colspan', Object.keys(listData).length);
    headerCell.innerHTML = `Часть тела`;

    for(let i = 0; i < 2; i++){
        let row = table.insertRow();
        Object.entries(listData).forEach(([key, value]) => {
            let cell = row.insertCell();
            if(i === 0){
                cell.innerHTML = `${key}`;
            }else{
                cell.innerHTML = `${value}`;
            }
            row.appendChild(cell);    
        });
    }
    document.getElementsByClassName('charTable')[0].appendChild(table);
}

function createPie(listData){
    // let maxStat = Math.max.apply(Math, Object.values(listData)) + 2;
    
    Object.entries(listData).forEach(([key, value]) => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('pieChart');

        let dashStat = (value*360)/40;

        mainDiv.innerHTML = 
        `<svg viewBox="0 0 120 120">
            <circle cx="-60" cy="60" r="50" stroke-dasharray="${dashStat}" class="pieNumber"/>
            <text x="50%" y="60%" class="pieText">${value}</text>
        </svg>
        <p>${key}</p>`
        
        document.getElementsByClassName('characteristics_conteiner')[0].appendChild(mainDiv);
    });
}

function createUl(listData, id){
    let ul = document.createElement('ul');

    for(let i = 0; i < listData.length; i++){
        let li = document.createElement('li');
        li.innerHTML = `${listData[i]}`;
        ul.appendChild(li);
    }

    document.getElementById(id).appendChild(ul);
}

function initApp(listName, char){
    let newDiv = document.createElement('div');
    newDiv.classList.add('main_conteiner__container');
    if(listName === 'characters' & char.charType === 'Игровой'){
        newDiv.innerHTML = 
        `<div class="main_info">
            <div class="main_info__info">
                <div class="main_info__info_text">
                    <p class="h2_text">${char.charName}</p>
                    <p>${char.charDesc}</p>
                    <div class="main_info__info_atributes">
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/gender_icon.svg" alt="gender">
                            </span>
                            <p>${char.charGender}</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/species_icon.svg" alt="species">
                            </span>
                            <p>${char.charSpecies}</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/location_icon.svg" alt="place">
                            </span>
                            <p>${char.birthLoc}</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/soul_icon.svg" alt="soul">
                            </span>
                            <p>${char.charSoul}</p>
                        </div>
                    </div>
                </div>
                <div class="main_info__info_alert">
                    <span>
                        <img src="./components/attention_vector.svg" alt="">
                    </span>
                    <div class="attention__text">
                        <p>Дальше будут спойлеры!</p>
                        <p id="adding">Читать на свой страх и риск!</p>
                    </div>
                </div>
            </div>
            <img src="#" alt="char_photo">
        </div>
        <div class="char_history">
            <p class="h2_text">История персонажа</p>
            <p>${char.charHistory}</p>
        </div>
        <div class="characteristics">
            <p class="h2_text">Характеристики</p>
            <div class="characteristics_conteiner">
                
            </div>
        </div>
        <div class="equipment" id='ul_1'>
            <p class="h2_text">Экипировка</p>
            <p class="h3_text">Стартовый набор</p>
        </div>
        <div class="party_add" id='ul_2'>
            <p class="h2_text">Вербовка</p>
        </div>
        <div class="party_add" id='ul_5'>
            <p class="h2_text">Навыки</p>
        </div>`;
        aside.classList.add('play')
    }else if(listName === 'characters' & char.charType === 'Не игровой'){
        newDiv.innerHTML = 
        `<div class="main_info">
            <div class="main_info__info">
                <div class="main_info__info_text">
                    <p class="h2_text">${char.charName}</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque expedita ipsum velit natus reiciendis sit sint, quae porro eius rem veritatis ab vel molestias qui debitis. Consequuntur, ullam. Molestias.</p>
                    <div class="main_info__info_atributes">
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/gender_icon.svg" alt="gender">
                            </span>
                            <p>Пол</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/species_icon.svg" alt="species">
                            </span>
                            <p>Вид</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/location_icon.svg" alt="place">
                            </span>
                            <p>Место рождения</p>
                        </div>
                    </div>
                </div>
                <div class="main_info__info_alert">
                    <span>
                        <img src="./components/attention_vector.svg" alt="">
                    </span>
                    <div class="attention__text">
                        <p>Дальше будут спойлеры!</p>
                        <p id="adding">Читать на свой страх и риск!</p>
                    </div>
                </div>
            </div>
            <img src="#" alt="char_photo">
        </div>
        <div class="char_history">
            <p class="h2_text">История персонажа</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat voluptas, reprehenderit non deserunt modi excepturi adipisci dolore ad qui, quidem repudiandae dolorem veritatis enim quam sed similique, animi veniam?</p>
        </div>
        <div class="equipment">
            <p class="h2_text">Место нахождения и поведение</p>
            <p class="h3_text">Местонахождение</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat voluptas, reprehenderit non deserunt modi excepturi adipisci dolore ad qui, quidem repudiandae dolorem veritatis enim quam sed similique, animi veniam?</p>
            <p class="h3_text">Поведение</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat voluptas, reprehenderit non deserunt modi excepturi adipisci dolore ad qui, quidem repudiandae dolorem veritatis enim quam sed similique, animi veniam?</p>
        </div>
        <div class="party_add">
            <p class="h2_text">Взаимодействие</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat voluptas, reprehenderit non deserunt modi excepturi adipisci dolore ad qui, quidem repudiandae dolorem veritatis enim quam sed similique, animi veniam?</p>
        </div>`;
        aside.classList.add('non-play')
    }else if(listName === 'characters' & char.charType === 'Враг'){
        newDiv.innerHTML = 
        `<div class="main_info">
            <div class="main_info__info">
                <div class="main_info__info_text">
                    <p class="h2_text">${char.charName}</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque expedita ipsum velit natus reiciendis sit sint, quae porro eius rem veritatis ab vel molestias qui debitis. Consequuntur, ullam. Molestias.</p>
                    <div class="main_info__info_atributes">
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/gender_icon.svg" alt="gender">
                            </span>
                            <p>Пол</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/species_icon.svg" alt="species">
                            </span>
                            <p>Вид</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/location_icon.svg" alt="place">
                            </span>
                            <p>Локация спавна</p>
                        </div>
                    </div>
                </div>
                <div class="main_info__info_alert">
                    <span>
                        <img src="./components/attention_vector.svg" alt="">
                    </span>
                    <div class="attention__text">
                        <p>Дальше будут спойлеры!</p>
                        <p id="adding">Читать на свой страх и риск!</p>
                    </div>
                </div>
            </div>
            <img src="#" alt="char_photo">
        </div>
        <div class="equipment">
            <p class="h2_text">Место нахождения и поведение</p>
            <p class="h3_text">Местонахождение</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat voluptas, reprehenderit non deserunt modi excepturi adipisci dolore ad qui, quidem repudiandae dolorem veritatis enim quam sed similique, animi veniam?</p>
            <p class="h3_text">Поведение</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat voluptas, reprehenderit non deserunt modi excepturi adipisci dolore ad qui, quidem repudiandae dolorem veritatis enim quam sed similique, animi veniam?</p>
        </div>
        <div class="party_add">
            <p class="h2_text">Стратегия</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat voluptas, reprehenderit non deserunt modi excepturi adipisci dolore ad qui, quidem repudiandae dolorem veritatis enim quam sed similique, animi veniam?</p>
        </div>
        <div class="charTable">
            <p class="h2_text">Здоровье</p>
        </div>
        <div class="party_add" id='ul_3'>
            <p class="h2_text">Навыки</p>
        </div>`;
        aside.classList.add('enemy')
    }else if(listName === 'items'){
        newDiv.innerHTML = 
        `<div class="main_info">
            <div class="main_info__info">
                <div class="main_info__info_text">
                    <p class="h2_text">${char.charName}</p>
                    <p>${char.charDesc}</p>
                    <div class="main_info__info_atributes items">
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/item_important.svg" alt="importance">
                            </span>
                            <p>${char.charImportance}</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/coin_icon.svg" alt="coin">
                            </span>
                            <p>${char.charPrice}</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/recicle_icon.svg" alt="reuse">
                            </span>
                            <p>${char.charReuse}</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="./components/mechanic_icon.svg" alt="mechanic">
                            </span>
                            <p>${char.charMechanic}</p>
                        </div>
                    </div>
                </div>
                <div class="main_info__info_alert">
                    <span>
                        <img src="./components/attention_vector.svg" alt="">
                    </span>
                    <div class="attention__text">
                        <p>Присутствуют спойлеры!</p>
                        <p id="adding">Читать на свой страх и риск!</p>
                    </div>
                </div>
            </div>
            <div class="main_info__info_add items">
                <div class="char_history">
                    <p class="h2_text">Метод получения</p>
                    <p>${char.wayToHave}</p>
                </div>
                <div class="party_add item" id='ul_4'>
                    <p class="h2_text">Эффекты и применение</p>
                </div>
            </div>
        </div>`;
        aside.classList.add('item');
    }
    mainContainerChar.appendChild(newDiv);
}

function checkChar(nameGame, charName){
    let myList;
    if(nameGame === 'items'){
        myList = items_list;
    }else{
        myList = cards_list;
    }
    
    myList.forEach(element => {
        if(element.charId === charName){
            initApp(nameGame, element);
            
            if(element.charType === 'Предмет'){
                createUl(element.effects, 'ul_4');
            }else if(element.charType === 'Игровой'){
                createUl(element.equipment, 'ul_1');
                createUl(element.comandAdd, 'ul_2');
                createUl(element.charSkills, 'ul_5');
                createPie(element.characteristics);
            }
            
            if(element.charType === 'Враг'){
                tableInit(element.charHP);
                createUl(element.effects, 'ul_3');
            }
        }
    });
}

window.onload = function() {
    title.innerHTML = `${localStorage.getItem('charName')}`
    checkChar(localStorage.getItem('listName'), localStorage.getItem('charName'));
}

window.closed = function(){
    localStorage.removeItem('listName');
    localStorage.removeItem('charName');
    localStorage.clear();
}
