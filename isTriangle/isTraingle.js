var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var checkBtn = document.querySelector("#check-btn");
var showOutput = document.querySelector("#output");

checkBtn.addEventListener('click', function isTriangle(){
    var sumOfAngles = calculateSumOfAngles(Number(angle1.value), Number(angle2.value), Number(angle3.value));
    console.log(sumOfAngles);
  if (sumOfAngles === 180){
      showOutput.innerText= "This is a Triangle";
  }
  else{
    showOutput.innerText= "This is not a Triangle";
  }
});

function calculateSumOfAngles(angle1, angle2, angle3){
 var sumOfAngles= angle1+angle2+angle3;
 return sumOfAngles;
}