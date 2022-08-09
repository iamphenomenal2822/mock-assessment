let url =   `https://jsonmock.hackerrank.com/api/articles?page=1`;

async function fetchData() {
    try{
        let response = await fetch(url);
        let data = await response.json();
    
        console.log(data);
        renderUsers(data); 
    }catch(err){
        console.log(err);
    }
}
fetchData();
 let container = document.querySelector(".container");
function renderUsers(data){
    // console.log(data);
    // data = JSON.parse(data);
    data.data.map(function(e){
        if(e.title){
            let div = document.createElement("div");
            
            let img = document.createElement("image");
            img.src = e.url;

            let author = document.createElement("h1");
            author.innerText = `${e.author}`;

            let title = document.createElement("h2");
            title.innerText = `${e.title}`;

            let comments = document.createElement("comments");
            comments.innerText = `${e.num_comments}`;

            let button = document.createElement("anchor");
            button.innerText = `Go to Article`;

            div.append(img,author,title,comments,button);
            container.append(div);
        }
    });
}