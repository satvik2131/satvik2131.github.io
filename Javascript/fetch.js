$(document).ready(function(){
    $(".form").submit(function(e){
        e.preventDefault()
        var searchRes = $(".searchBox").val();
        var API_KEY ='AIzaSyBdoX4f3fjouLvDH1SFhVmSYJS9u25MxSU';
        
        var url = 'https://www.googleapis.com/customsearch/v1?key=' + API_KEY + '&cx=017576662512468239146:omuauf_lfve&q=' + searchRes;


    console.log(url);
    $.get(url,function(data){
        console.log(data);
    });
    });
});