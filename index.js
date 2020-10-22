
 document.addEventListener("submit", function(e){
   if ("#name"=== 0){
     console.log("add your name please");
     evt.preventDefault();
   }
 })



  document.addEventListener("submit", function (evt){


    evt.preventDefault();

    var score = Math.floor(Math.random() * 101);

    Swal.fire(
  'Your Love',
  'Score is '+ score +"%",
  'success'
)


})
