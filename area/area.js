var baseValue= document.querySelector("#base");
var heightValue= document.querySelector("#height");
var calculateBtn= document.querySelector("#calculate-btn");
var outputMessage= document.querySelector("#output");

calculateBtn.addEventListener('click', calculateArea);

function calculateArea(){
    if (baseValue.value >= 0 && heightValue.value >= 0){
    var area= areaOfTriangle(Number(baseValue.value), Number(heightValue.value));
   
    outputMessage.innerText= "The Area of Triangle is: " + area;
}
else {
    outputMessage.innerText= "Error: Please Enter a positive value ";
}
}

function areaOfTriangle(b, h){
    var area = (b*h)/2;
    return area;
}