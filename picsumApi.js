function getData(){
let picdata = "https://picsum.photos/v2/list?page=2&limit=50";
fetch(picdata).then(function (res) {
    return res.json();
})
    .then(function (res) {
        for (let i = 0; i < res.length; i++) {
            document.getElementById("dt").innerHTML += `
                <div class="card">
                <h2>PhotoID: ${res[i].id}</h2>
                <h1>Author Name: ${res[i].author}</h1>
                <p>Height: ${res[i].height} Width: ${res[i].width}</p>  
                <img src=${res[i].download_url} height="300" width="300"></br>
                <button><a href=${res[i].url}>Download</a></button>
                </div>
                `
        }
    })
}