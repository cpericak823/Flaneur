//put this in a component when real bundle file is created
$.get("/api/yelp").then(function(res){
    console.log(res);
});