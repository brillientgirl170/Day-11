var btnElement = document.getElementById('btn');
btnElement.onclick= function(){
    var startingNumberValue = document.getElementById('startingNumber').value;
    var endingNumberValue = document.getElementById('endingNumber').value;
    var res= ' ';
    for(var x=startingNumberValue; x<=endingNumberValue; x++){
       // document.getElementById('result').value = x;
        res+=x;
    }
    document.getElementById('result').value = res;
};


var redBtnElement= document.getElementById('redBtn');
redBtnElement.onclick= function(){
    var divOneElement= document.getElementById('divOne');
        // divOneElement.style.backgroundColor= 'red';
    divOneElement.className= 'class-one';
}
var greenBtnElement= document.getElementById('greenBtn');
greenBtnElement.onclick= function(){
    var divOneElement= document.getElementById('divOne');
    // divOneElement.style.backgroundColor= 'green';
    divOneElement.className= 'class-two';
}

var blueBtnElement= document.getElementById('blueBtn');
blueBtnElement.onclick= function(){
    var divOneElement= document.getElementById('divOne');
    // divOneElement.style.backgroundColor= 'blue';
    divOneElement.className= 'class-three';
}
var defaultBtnElement= document.getElementById('defaultBtn');
defaultBtnElement.onclick= function(){
    var divOneElement= document.getElementById('divOne');
    // divOneElement.style.backgroundColor= 'white';
    divOneElement.className= 'class-four';
}

$('#btn1').click(function () {
    var firstNameValue= $('#firstName').val();
    var lastNameValue= $('#lastName').val();
    var fullName= firstNameValue+" "+lastNameValue;
    $('#fullName').val(fullName);

});


$('#addition').click(function () {
    var firstNumberValue= Number($('#firstNumber').val());
    var lastNumberValue= Number($('#lastNumber').val());
    var result = firstNumberValue+lastNumberValue;
        $('#result1').val(result);

});
$('#subtraction').click(function () {
    var firstNumberValue= $('#firstNumber').val();
    var lastNumberValue= $('#lastNumber').val();
    var result = firstNumberValue-lastNumberValue;
    $('#result1').val(result);

});
$('#multiplication').click(function () {
    var firstNumberValue= $('#firstNumber').val();
    var lastNumberValue= $('#lastNumber').val();
    var result = firstNumberValue*lastNumberValue;
    $('#result1').val(result);

});
$('#division').click(function () {
    var firstNumberValue= $('#firstNumber').val();
    var lastNumberValue= $('#lastNumber').val();
    var result = firstNumberValue/lastNumberValue;
    $('#result1').val(result);

});
$('#remainder').click(function () {
    var firstNumberValue= $('#firstNumber').val();
    var lastNumberValue= $('#lastNumber').val();
    var result = firstNumberValue%lastNumberValue;
    $('#result1').val(result);

});






// alert($('h1').text() );
