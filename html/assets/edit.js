import {
    PutByCategories
}
    from "./httprequest.js";


    let inputEditDesc = document.querySelector("#ChangeNameInput");
    let inputEditName = document.querySelector("#ChangeDescInput");
    let editBtn = document.querySelector("#editBtn");
    // inputEditDesc.value = "aa";
    // inputEditName.value = "bb"
    

    editBtn.addEventListener("click" , (e) =>{
        e.preventDefault();
        const products = {
            name : inputEditName.value,
            description : inputEditDesc.value,
        }
    })