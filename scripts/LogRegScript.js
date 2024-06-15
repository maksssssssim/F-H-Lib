const header = document.querySelector('header');
const main = document.querySelector('main');
const aside = document.querySelector('aside');
const wrapper = document.querySelector('.wrapper');
const accountDiv = document.querySelector('#account');
const btnDiv = document.querySelector('#buttons');
const userName = document.querySelector('.user_name');

const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const loginbtn = document.querySelector('.login_btn'); //кнопка в хедере
const regbtn = document.querySelector('.reg_btn'); //кнопка в хедере
const closebtn = document.querySelector('.close');

const LogForm = document.querySelector('.loginForm');
const RegForm = document.querySelector('.registerForm');

const LogEmail = document.querySelector('#LogEmail');
const LogPassword = document.querySelector('#LogPassword');
const LogSubmit = document.querySelector('#login');
const alertMesLog = document.querySelector('#LogAlert');

const RegName = document.querySelector('#RegName')
const RegEmail = document.querySelector('#RegEmail');
const RegPassword = document.querySelector('#RegPassword');
const RegSubmit = document.querySelector('#register');
const alertMes = document.querySelector('#RegAlert');

const reEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

window.onload = function() {
    if(!(localStorage.getItem('activeUser') === null)){
        accountDiv.classList.remove('disactive');
        btnDiv.classList.add('disactive');
        userName.innerHTML = `${localStorage.getItem('activeUser')}`
    }else{
        localStorage.setItem('activeUser', 'NaN')
    }
}

function resetForms(){
    LogForm.reset();
    RegForm.reset();
}

function resetAlert(){
    resetForms()
    alertMesLog.innerHTML = ``;
    alertMes.innerHTML = ``;
}


loginbtn.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    header.classList.add('blured');
    main.classList.add('blured');
    aside.classList.add('disactive');
    resetAlert();
});

regbtn.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
    header.classList.add('blured');
    main.classList.add('blured');
    aside.classList.add('disactive');
    resetAlert();
});

closebtn.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    header.classList.remove('blured');
    main.classList.remove('blured');
    aside.classList.remove('disactive');
    resetAlert();
});

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    resetAlert();
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    resetAlert();
});

function closePopup(){
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    header.classList.remove('blured');
    main.classList.remove('blured');
    aside.classList.remove('disactive');
}

function User(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}

function createId(users){
    return Object.keys(users).length;
}

RegSubmit.addEventListener('click', () => {
    const nameUser = RegName.value;
    const emailUser = RegEmail.value;
    const passwordUser = RegPassword.value;

    let users = {}

    if(localStorage.getItem('users') === null){
        localStorage.setItem('users', JSON.stringify(users));
    }else{
        users = JSON.parse(localStorage.getItem('users')); 
    }

    let valid = reEmail.test(emailUser);

    if(valid){
        if(Object.keys(users).length === 0){
            const user = new User(nameUser, emailUser, passwordUser);
            const userId = 'User' + createId(users);
    
            users[userId] = user;
            alertMes.innerHTML = `Пользователь зарегистрирован`;
    
            accountDiv.classList.remove('disactive');
            btnDiv.classList.add('disactive');
            userName.innerHTML = `${nameUser}`
    
            localStorage.setItem('activeUser', nameUser)
            closePopup();
        }else{
            Object.entries(users).forEach(([key, value]) => {
                Object.entries(value).forEach(([key, value]) => {
                    if(key === 'email'){
                        if(value === emailUser){
                            alertMes.innerHTML = `Пользователь уже существует`;
                        }else{
                            const user = new User(nameUser, emailUser, passwordUser);
                            const userId = 'User' + createId(users);
            
                            users[userId] = user;
                            alertMes.innerHTML = `Пользователь зарегистрирован`;
    
                            btnDiv.classList.add('disactive');
                            accountDiv.classList.remove('disactive');
                            userName.innerHTML = `${nameUser}`
    
                            localStorage.setItem('activeUser', nameUser)
                            closePopup();
                        };
                    }
                });
            });
        }
    }else{
        alertMes.innerHTML = `Почта указана некорректно`;
    }

    localStorage.setItem('users', JSON.stringify(users));
    resetForms();
});

LogSubmit.addEventListener('click', () => {
    const emailUser = LogEmail.value;
    const passwordUser = LogPassword.value;
    let users = JSON.parse(localStorage.getItem('users')) 

    Object.entries(users).forEach(([key, value]) => {
        if(value.email === emailUser){
            if(value.password === passwordUser){
                btnDiv.classList.add('disactive');
                accountDiv.classList.remove('disactive');
                userName.innerHTML = `${value.name}`

                localStorage.setItem('activeUser', nameUser)
                closePopup();
                resetAlert();
            }else{
                alertMesLog.innerHTML = `Неверный пароль`;
            }
        }else{
            alertMesLog.innerHTML = `Неверный email`;
        };
    });

    localStorage.setItem('users', JSON.stringify(users));
    resetForms();
})
