const addButton = document.querySelector('.add_btn');
const closeButton = document.querySelector('.post_close');
const sideConteiner = document.querySelector('.side_content__contenier');
const postConteiner = document.querySelector('.post_conteiner');
const postBtn = document.querySelector('#postBtn');

const postWrapper = document.querySelector('.post_wrapper');
const postForm = document.querySelector('.postForm');
const postName = document.querySelector('#postName');
const postTheme = document.querySelector('#postTheme');
const postText = document.querySelector('#postText');

const userAlert = document.querySelector('.userAlert');

let posts_list = {}

addButton.addEventListener('click', () => {
    postWrapper.classList.add('active-popup');
    header.classList.add('blured');
    main.classList.add('blured');
    aside.classList.add('disactive');
});

closeButton.addEventListener('click', () => {
    postWrapper.classList.remove('active-popup');
    postWrapper.classList.remove('active');
    header.classList.remove('blured');
    main.classList.remove('blured');
    aside.classList.remove('disactive');
});

function Post(name, shortText, fullText, time, authorName){
    this.name = name;
    this.shortText = shortText;
    this.fullText = fullText;
    this.time = time;
    this.authorName = authorName;
}

function createId(myList){
    return Object.keys(myList).length;
}

postBtn.addEventListener('click', () => {
    let currentdate = new Date();

    let datetime = currentdate.toLocaleDateString("ru");    
    let userPost = new Post(postName.value, postTheme.value, postText.value, datetime, localStorage.getItem('activeUser'))
    const userId = 'User' + createId(posts_list);

    posts_list[userId] = userPost;
    postForm.reset();

    postWrapper.classList.remove('active-popup');
    postWrapper.classList.remove('active');
    header.classList.remove('blured');
    main.classList.remove('blured');
    aside.classList.remove('disactive');

    localStorage.setItem('postsList', JSON.stringify(posts_list));

    location.reload();
})

function dict_reverse(obj) {
    new_obj= {}
    rev_obj = Object.keys(obj).reverse();
    rev_obj.forEach(function(i) { 
      new_obj[i] = obj[i];
    })
    return new_obj;
  }

window.addEventListener('load', function() {
    if(localStorage.getItem('postsList') === null){
        localStorage.setItem('postsList', JSON.stringify(posts_list));
    }else{
        posts_list = JSON.parse(localStorage.getItem('postsList')); 
    }

    if(!(localStorage.getItem('activeUser') === 'NaN')){
        addButton.classList.remove('disactive');
        userAlert.classList.add('disactive');
    }

    let counter = 0;

    if(Object.keys(posts_list).length === 0){
        postConteiner.innerHTML = `<p class = "no_publication">Публикаций нет</p>`
    }else{
        Object.entries(dict_reverse(posts_list)).forEach(([key, value]) => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('post_side_content');
            newDiv.setAttribute('id', counter);

            newDiv.onclick = function(){
                openPost(key, this.id)
            }

            if(counter === 0){
                newDiv.classList.add('active');
            }
            newDiv.innerHTML = 
            `<div class="name_data">
                <div class="name_data__text">
                    <p id="post_name">${value.name}</p>
                    <p id="author_name">${value.authorName}</p>
                </div>
                <p class="name_data__data">${value.time}</p>
            </div>
            <p class="post_short_text">${value.shortText}</p>
            `;
            sideConteiner.appendChild(newDiv);

            if(counter === 0){
                let newDivMain = this.document.createElement('div');
                newDivMain.classList.add('post_main_content');
                newDivMain.innerHTML = 
                `<div class="post_title">
                    <p id="author_main_name">${value.authorName}</p>
                    <p class="post_main_data">${value.time}</p>
                </div>
                <div class="post_text_field">
                    <p class="post_name">${value.name}</p>
                    <p class="post_full_text">${value.fullText}</p>
                </div>
                `;
                postConteiner.appendChild(newDivMain);
            }

            counter++;
        })
    }
})

function openPost(postKey, postID){
    let divs = document.getElementsByClassName('post_side_content');
    for(let i = 0; i < divs.length; i++){
        if(divs[i].classList.contains('active')){
            divs[i].classList.remove('active')
        }
    }

    divs[postID].classList.add('active');

    postConteiner.innerHTML = ``;

    value = posts_list[postKey]

    let newDivMain = this.document.createElement('div');
    newDivMain.classList.add('post_main_content');
    newDivMain.innerHTML = 
    `<div class="post_title">
        <p id="author_main_name">${value.authorName}</p>
        <p class="post_main_data">${value.time}</p>
    </div>
    <div class="post_text_field">
        <p class="post_name">${value.name}</p>
        <p class="post_full_text">${value.fullText}</p>
    </div>
    `;

    postConteiner.appendChild(newDivMain);
}
