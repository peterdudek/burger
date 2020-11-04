// $(".create-form").on("submit", function(){
//  var newburger = {
//     burger_name:  $("#burger_name").val().trim(),
//     devoured: 0
//  }
//   $.ajax({
//     url: "/api/burgers",
//     method: "POST",
//     data: newburger
//   }).then(function() {
//     location.reload();
//   })
// })

// $(".devoured").on("click", function(){
//   var id = $(this).attr("data-id")
//   var newburger = {
  
//      devoured: 1
//   }
//   alert("Devoured!")
//    $.ajax({
//      url: "/api/burgers/" + id,
//      method: "PUT",
//      data: newburger
//    }).then(function() {
//      location.reload();
//    })
//  })
