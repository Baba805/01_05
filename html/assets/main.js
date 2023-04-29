import {
    getByPosts,
    deletePosts,
}
    from "./httprequest.js";


let row = document.querySelector(".row");
let tittle;
let bodyy;
let id;



getByPosts().then(data => {
    data.forEach(element => {
        tittle = element.title;
        bodyy = element.body;
        id = element.id


        row.innerHTML += `<div class="col-4 mb-5" style = "height: 600px">
        <div class="card" style="width: 18rem;">
            <img src="https://th.bing.com/th/id/R.9106fd921b713b1c04ae897e2a11b2b2?rik=Xzc0%2bFe%2f1Vmgzg&pid=ImgRaw&r=0" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${tittle}</h4>
              <p class="card-text">${bodyy}</p>
              <div class="buttons " style="display: flex; justify-content: space-around;">
                <button class="btn btn-danger ms-2"   data-id="${id}">Delete</button>
                <button class="btn btn-primary ms-2">Edit</button>
            </div>
            </div>
          </div> 
       </div> `
    });

    //delete 
    Array.from(row.children).forEach(element => {
        let deleteBtn = element.children[0].children[1].children[2].children[0];
        let editBtn = element.children[0].children[1].children[2].children[1];

        deleteBtn.addEventListener("click", (e) => {
            let idd = e.target.getAttribute("data-id");
            console.log(e.target);
            deletePosts(idd);
           
            console.log(idd);
            // delete UI
            e.target.parentElement.parentElement.parentElement.remove();
        })
    });

});

