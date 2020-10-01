$("#btn btn-primary").on("submit", function(event) {
    event.preventDefault();

   var newBurger = {
        name: $("#burger_id").val().trim(),
        
    }

});

$("#bt btn-default").on('click', function() {
   const burgerId = $(this.data('id'):

   $.ajax(`/api/burgers/${burgerId}`, {
      type: "DELETE"
   })
   .then(function() {
      location.reload()
   })
});

