const mainContainerChar = document.getElementsByClassName('main_conteiner')[0];
const aside = document.getElementsByClassName('aside')[0];
const title = document.querySelector('title');

function tableInit(listData){
    let table = document.createElement('table');

    let headerRow = table.insertRow();
    headerRow.setAttribute('colspan', Object.keys(listData).length);
    headerRow.innerHTML = `Часть тела`;

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

function initApp(listName, char){
    let newDiv = document.createElement('div');
    newDiv.classList.add('main_conteiner__container');
    if(listName === 'characters' & char.charType === 'Игровой'){
        newDiv.innerHTML = 
        `<div class="main_info">
            <div class="main_info__info">
                <div class="main_info__info_text">
                    <p class="h2_text">${char.charName}</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque expedita ipsum velit natus reiciendis sit sint, quae porro eius rem veritatis ab vel molestias qui debitis. Consequuntur, ullam. Molestias.</p>
                    <div class="main_info__info_atributes">
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="gender">
                            </span>
                            <p>Пол</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="species">
                            </span>
                            <p>Вид</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="place">
                            </span>
                            <p>Место рождения</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="soul">
                            </span>
                            <p>Душа</p>
                        </div>
                    </div>
                </div>
                <div class="main_info__info_alert">
                    <span>
                        <img src="../components/attention_vector.svg" alt="">
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
        <div class="characteristics">
            <p class="h2_text">Характеристики</p>
            <div class="characteristics_conteiner">
            </div>
        </div>
        <div class="equipment">
            <p class="h2_text">Экипировка</p>
            <p class="h3_text">Стартовый набор</p>
            <ul>
                <li>Описание стартового набора</li>
                <li>Описание стартового набора</li>
                <li>Описание стартового набора</li>
                <li>Описание стартового набора</li>
                <li>Описание стартового набора</li>
            </ul>
        </div>
        <div class="party_add">
            <p class="h2_text">Вербовка</p>
            <ul>
                <li>Описание способа вербовки</li>
                <li>Описание способа вербовки</li>
                <li>Описание способа вербовки</li>
                <li>Описание способа вербовки</li>
                <li>Описание способа вербовки</li>
                <li>Описание способа вербовки</li>
            </ul> 
        </div>
        <div class="special_skills">
            <p class="h2_text">Особые механики</p>
            <ul>
                <li>Описание особой механики</li>
                <li>Описание особой механики</li>
                <li>Описание особой механики</li>
                <li>Описание особой механики</li>
                <li>Описание особой механики</li>
                <li>Описание особой механики</li>
            </ul>
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
                                <img class="icon" src="#" alt="gender">
                            </span>
                            <p>Пол</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="species">
                            </span>
                            <p>Вид</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="place">
                            </span>
                            <p>Место рождения</p>
                        </div>
                    </div>
                </div>
                <div class="main_info__info_alert">
                    <span>
                        <img src="../components/attention_vector.svg" alt="">
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
                                <img class="icon" src="#" alt="gender">
                            </span>
                            <p>Пол</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="species">
                            </span>
                            <p>Вид</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="place">
                            </span>
                            <p>Локация спавна</p>
                        </div>
                    </div>
                </div>
                <div class="main_info__info_alert">
                    <span>
                        <img src="../components/attention_vector.svg" alt="">
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
        <div class="party_add">
            <p class="h2_text">Навыки</p>
            <ul>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
            </ul> 
        </div>
        <div class="party_add">
            <p class="h2_text">Особые навыки</p>
            <ul>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
            </ul> 
        </div>`;
        aside.classList.add('enemy')
    }else if(listName === 'items'){
        newDiv.innerHTML = 
        `<div class="main_info">
            <div class="main_info__info">
                <div class="main_info__info_text">
                    <p class="h2_text">${char.charName}</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque expedita ipsum velit natus reiciendis sit sint, quae porro eius rem veritatis ab vel molestias qui debitis. Consequuntur, ullam. Molestias.</p>
                    <div class="main_info__info_atributes">
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="importance">
                            </span>
                            <p>Обычный предмет</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="coin">
                            </span>
                            <p>Цена</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="reuse">
                            </span>
                            <p>Потребляемость</p>
                        </div>
                        <div class="atribut">
                            <span>
                                <img class="icon" src="#" alt="mechanic">
                            </span>
                            <p>На ком применяется</p>
                        </div>
                    </div>
                </div>
                <div class="main_info__info_alert">
                    <span>
                        <img src="../components/attention_vector.svg" alt="">
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
            <p class="h2_text">Метод получения</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quaerat voluptas, reprehenderit non deserunt modi excepturi adipisci dolore ad qui, quidem repudiandae dolorem veritatis enim quam sed similique, animi veniam?</p>
        </div>
        <div class="party_add">
            <p class="h2_text">Эффекты и применение</p>
            <ul>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
                <li>Описание навыков</li>
            </ul> 
        </div>`;
        aside.classList.add('item')
    }
    mainContainerChar.appendChild(newDiv);
}

function checkChar(nameGame, charName){
    cards_list.forEach(element => {
        if(element.charName === charName){
            initApp(nameGame, element);
            if(element.charType === 'Враг'){
                tableInit(element.charHP);
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
