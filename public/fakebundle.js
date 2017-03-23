//put this in a component when real bundle file is created
//use something like:  createPost(postObj) {
//     this.startLoading();
//     axios.post('/posts', postObj)
//       .then(() => {
//         this.sendSuccessNotification();
//         this.endLoading();
//         this.redirectToPosts();
//       })
//       .catch((error) => {
//         this.sendErrorNotification();
//         this.endLoading();
//       });
//   }
$.get("/api/yelp").then(function(res){
    console.log(res);
});