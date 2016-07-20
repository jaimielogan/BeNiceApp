var niceArray = ["You go, girl!", "Just keep swimming, just keep swimming", "Crushin' it!"];

function generate(){
  return Math.floor(Math.random() * niceArray.length);
}

console.log(generate());

$("button").on("click", function(){
  $(".result h1").text(niceArray[generate()]);
});
