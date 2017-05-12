function rolluser1(){
  var user1=document.getElementById("user1");
  var dice1=Math.floor((Math.random() * 6) + 1);
  if (dice1 === 1) {
    alert("Your turn is Over!!!")
  }
  user1.innerHTML = dice1;
}

function usertotal1(){
  var total1=document.getElementById("total1");
  var user1total=Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
  total1.innerHTML= user1total;
}

function rolluser2(){
  var user2=document.getElementById("user2");
  var dice2=Math.floor((Math.random() * 6) + 1);
  if (dice2 === 1) {
    alert("Your turn is Over!!!")
  }
  user2.innerHTML = dice2;
}

function usertotal2(){
  var total2=document.getElementById("total2");
  var user2total=Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
  total2.innerHTML= user2total;
}
