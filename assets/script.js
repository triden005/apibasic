console.log("connected")
$(document).ready(() =>{
    console.log("document ready")
    $(".searchbtn").on("click", function(e){
        console.log("submitting")
        var search= $("#search").val();
        getmovie(search);
        console.log(search);
        e.preventDefault();
    })
})

function getmovie(search){
    $.get("http://www.omdbapi.com/?s="+search+"&apikey=57ec39dd",(data,status)=>{
        //$("#ppw").append(data)
        var output="";

        data.Search.forEach((element) => {
            output+=`<div class="col-md-4">
                <div class="thumbnail">
                    <div class="center well">
                        <img src="${element.Poster}">
                        <p  align="center"> ${element.Title}<br>
                        <a class="btn btn-primary" href="#">Details</a>
                        </p>
                        
                    </div>
                </div>
            </div>`
                    });
        
        $(".row").append(output);
        });
}