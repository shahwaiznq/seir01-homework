$(document).ready(function(){

//CHECKING
let $checkingBalance = 0;

$('input#checking-deposit').on('click', function(){
  const $input = parseInt($('input#checking-amount').val());
  $checkingBalance += $input;
  if ($checkingBalance > 0){
    $('div#checking-balance').css('background-color', '#E3E3E3')
  }
  $('div#checking-balance').text(`$${$checkingBalance}`);
})


$('input#checking-withdraw').on('click', function(){
  const $input = parseInt($('input#checking-amount').val());
  $checkingBalance -= $input;
  if ($checkingBalance < 0){
    $checkingBalance += $input;
    alert("You can't have a negative balance")
    //it would be cool to spin the div 360 here
  }
  if ($checkingBalance === 0){
    $('div#checking-balance').css('background-color', 'red');
  }
  $('div#checking-balance').text(`$${$checkingBalance}`);
})









//SAVINGS
let $savingsBalance = 0;

$('input#savings-deposit').on('click', function(){
  const $input = parseInt($('input#savings-amount').val());
  $savingsBalance += $input;
  if ($savingsBalance > 0){
    $('div#savings-balance').css('background-color', '#E3E3E3')
  }
  $('div#savings-balance').text(`$${$savingsBalance}`);
})



$('input#savings-withdraw').on('click', function(){
  const $input = parseInt($('input#savings-amount').val());
  $savingsBalance -= $input;
  if ($savingsBalance < 0){
    $savingsBalance += $input;
    alert("You can't have a negative balance")
    //it would be cool to spin the div 360 here
  }
  if ($savingsBalance === 0){
    $('div#savings-balance').css('background-color', 'red');
  }
  $('div#savings-balance').text(`$${$savingsBalance}`);
})








});
