
window.setTimeout(function () {
    document.body.classList.add('loaded');
    let body = document.body;
    let string = window.location.search;        
    let url = 'https://api.github.com/users/Ayana-js';
    const date = new Date();
    const getDate = new Promise((resolve, reject) => {
        setTimeout(() => date ? resolve(date) : reject("Ошибка"), 1000)
        })
    const getUrl = new Promise((resolve, reject) => {
        setTimeout(() => url ? resolve(url) : reject("Ошибка"), 1000)
        })
      
Promise.all([getUrl, getDate])
    .then(([url, date]) => fetch(url))
    .then(res => res.json())
    .then(json => {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url);
      
let name = document.createElement('h1');
    if (json.name != null) {
        name.innerHTML = json.name;
    } else {
        name.innerHTML = 'Данные о пользователе недоступны';
    }
body.append(name);
name.addEventListener("click", () => window.location = json.html_url);
      
let bio = document.createElement('h3');
    if (json.bio != null) {
        bio.innerHTML = json.bio;
    } else {
        bio.innerHTML = 'Данные о пользователе недоступны';
    }
body.append(bio);

let img = new Image();
img.src = json.avatar_url;
body.append(img);
})
      
.catch(err => console.log('Информация о пользователе недоступна'));
}, 3000);
