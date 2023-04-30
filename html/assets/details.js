let card = document.querySelector(".card");
const currentUser =  JSON.parse(localStorage.getItem("currentUser"));
// console.log(currentUser);


for (let key in currentUser) {
    createCard(currentUser[key])
    console.log(currentUser[key]);
        // console.log(key);
    
}

function createCard(params) {
    let p = document.createElement("p");
    p.innerText = params.description;
    card.append(p)
}





