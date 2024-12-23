//task1:-
alert("Welcome to my site");
var user_name  = prompt("Plase enter your name");
var user_color = prompt("Choose a color: red ,green or blue");
// while(user_color !=="red" && user_color !=="green" && user_color !=="blue"){
//     user_color = prompt("بطل هبد من عندك واختار من اللى قدامك")
// }
console.log("Welcome" +" "+user_name)


//task2:-
var message = prompt("Enter your massage");
for (var i = 1; i <= 6; i++) {
  document.write(`<h${i}>${message}</h${i}>`)
}