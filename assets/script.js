console.log("connected")
$(document).ready(() =>{
    console.log("document ready")
    $(".searchbtn").on("click", function(e){
        console.log("submitting")
        var search= $("#search").val();
        getmovies(search);
        console.log(search);
        e.preventDefault();
    })
})

function getmovies(search){
    $.get("https://www.omdbapi.com/?s="+search+"&apikey=57ec39dd",(data,status)=>{
        //$("#ppw").append(data)
        var output="";

        data.Search.forEach((element) => {
            output+=`<div class="col-md-4">
                <div class="thumbnail">
                    <div class="center well">
                        <img src="${element.Poster}">
                        <p  align="center"> ${element.Title}<br>
                        <a onClick="movieselected('${element.imdbID}')" class="btn btn-primary" href="#">Details</a>
                        </p>
                        
                    </div>
                </div>
            </div>`
                    });
        
        $(".row").html(output);
        console.log(status);
        });
}
function movieselected(id){
    console.log(id);
    sessionStorage.setItem("movieid",id);
    window.location ="movie.html";
    return false;
}

function getmovie(){
    var movieid=sessionStorage.getItem('movieid');
    
    console.log(movieid);
    if(movieid!==null)
    $.get("https://www.omdbapi.com/?i="+movieid+"&apikey=57ec39dd&plot=full",(data,status)=>{
        var element=data;
        var output=`
                <div class="col-md-5">
                <div class="thumbnail">
                <img src="${element.Poster}">
                </div>
                </div>
                <div class="col-md-7">
                <div class="thumbnail">
                <ul id="no-bullets" >
                    <li><h2 align="center"><b>${element.Title}</h2></b></li>
                    <li>Released:${element.Released}</li>
                    <li><b>imdbRating/votes:${element.imdbRating}/${element.imdbVotes}</b></li>
                    <li><b>Director</b>:${element.Director}</li>
                    <li><b>Plot</b>:${element.Plot}</li>
                    <li><b>Language</b>:${element.Language}</li>
                    <li><b>Awards</b>:${element.Awards}</li>
                    <li>
                    <p align="center">
                    <a href="https://www.imdb.com/title/${element.imdbID}" class="btn btn-primary"  > imdb </a></p>
                    </li>
                </ul>
                </div >`;
        $(".row").html(output);
        
    })
}
$(document).ready(() =>{
    console.log("document movie ready");
    getmovie();
})