let body = document.body;
let url = window.location.search;

fetch(`https://api.github.com/users/Ayana-js`)
	.then(res => res.json())
	.then(json => {
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
    
	.catch(err => console.log(err));

