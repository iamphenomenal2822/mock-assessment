// const container = document.querySelector()
// const renderPosts = async () => {
//     let uri = 'http://localhost:8080/data';
//     const res = await fetch(uri);
//     const posts = await res.json(); 
    
//     // console.log(posts);

//     let template = '';
// posts.map(post => {
// template +=`
// <div class="post">
// <h2>${post.name}</h2>
// <p><small>${post.city} likes</small></p>
// </div>
// `
// })
// container.innerHTML = template;
//     }
//     // window.addEventListener(' DOMContent Loaded' , () => renderPosts());
//     renderPosts();


    const getdata = async()=>{
        let url=(`http://localhost:8000/data`);
    
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        let arr="";
        data.map(elem=>{
            arr+=`<div classname="data">
                <tr>
                    <td>${elem.country}</td>
                     <td>${elem.city}</td>
                     <td>${elem.population}</td>
                </td>    
                </div>`
        })
        container.innerHTML= arr;
    }
    
    getdata();