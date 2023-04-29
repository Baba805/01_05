//get method 
let API_URL = "https://jsonplaceholder.typicode.com/posts";
export async function getByPosts(params) {
    
    
    let global_data;
   await fetch(API_URL).then(response => response.json())
    .then(data => {
        let loading = document.querySelector(".loader");
        loading.style.display = "none"
        global_data = data;
        
        
    })
    return global_data;

}

getByPosts();

// delete 

export async function deletePosts(id) {
    let global_data;
    await fetch(`${API_URL}/${id}`,{
        method: 'DELETE',
    })
}