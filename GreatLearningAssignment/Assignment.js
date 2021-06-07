

function formValidation(){  
var name=document.getStartedForm.name.value;
var name=document.getStartedForm.name.value.length;   
var email=document.getStartedForm.email.value; 
var phoneNumber=document.getStartedForm.phoneNumber.value;  
var phoneNumber=document.getStartedForm.phoneNumber.value.length;   
var workExeperience=document.getStartedForm.workExeperience.value;
  
  if (name==null || name==""){  
    alert("Name field should not be Empty");  
    return false;  
    }

  else if (name<4) {
    alert("Name should be minimun of 4 characters");
  return false;  
  }

  else if (email==null || email=="") {
    alert("Email field should not be Empty");
    return false;  
  }

  else if (phoneNumber==null || phoneNumber=="") {
    alert("Mobile Number field should not be Empty");
    return false;  
  }

  else if (phoneNumber!=10) {
  alert("Please enter valid Mobile Number ");
  return false;  
  }

  else if (workExeperience==null || workExeperience=="") {
    alert("Work Exeperience field should not be Empty");
    return false;  
  }
}


function storeValues(){
  var name= document.getElementById("name");
  localStorage.setItem("name", name.value);

  var email= document.getElementById("email");
  localStorage.setItem("email", email.value);

  var phoneNumber= document.getElementById("phoneNumber");
  localStorage.setItem("phoneNumber", phoneNumber.value);

  var workExeperience= document.getElementById("workExeperience");
  localStorage.setItem("workExeperience", workExeperience.value);

  var currentOrganization= document.getElementById("currentOrganization");
  localStorage.setItem("currentOrganization", currentOrganization.value);
}

  var storedName = localStorage.getItem("name");
  console.log(storedName);

  var storedEmail = localStorage.getItem("email");
  console.log(storedEmail);

  var storedPhoneNumber = localStorage.getItem("phoneNumber");
  console.log(storedPhoneNumber);

  var storedWorkExeperience = localStorage.getItem("workExeperience");
  console.log(storedWorkExeperience);

  var storedcurrentOrganization = localStorage.getItem("currentOrganization");
  console.log(storedcurrentOrganization);




/*caroesel */

var main = function() {
$('.dropdown-toggle').click(function() {
$('.dropdown-menu').toggle();
});

$('.arrow-next').click(function() {
    //creating the variables so that we can target them in jQuery
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    var currentDot = $('.active-dot');
    var nextDot= currentDot.next()
    //if the current slide is the last, make the next slide the first one
    if(nextSlide.length == 0 ) {
     nextSlide = $('.slide').first() ;  
    }
    //if the next dot is the last, make the next dot the first one
    if(nextDot.length == 0){
        nextDot = $('.dot').first()
    }
    //when the arrow is clicked, fade out the current img and fade in the next one 
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
    //when the arrow is clicked, remove the active class from the current dot and add it to the next one
    currentDot.removeClass('active-dot')
    nextDot.addClass('active-dot')
});
$('.arrow-prev').click(function(){
    //creating the variables so that we can target them in jQuery
    var currentSlide = $('.active-slide')
    var prevSlide = currentSlide.prev()
    var currentDot= $('.active-dot')
    var prevDot= currentDot.prev()
    //if the current slide is the last, make the prev slide the last one
    if(prevSlide.length == 0){
    prevSlide = $('.slide').last();
    }
  //if the current dot is the last, make the prev dot the last one
    if(prevDot.length==0){
        prevDot = $('.dot').last();
    }
    //fade out the current img and fade in the prev one when the arrow is clicked
    currentSlide.fadeOut(600).removeClass('active-slide')
    prevSlide.fadeIn(600).addClass('active-slide')
     //when the arrow is clicked, remove the active class from the current dot and add it to the next one
    currentDot.removeClass('active-dot')
    prevDot.addClass('active-dot')
});
}

$(document).ready(main);








/*sticky*/

function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#sticky-anchor').offset().top;
  if (window_top > div_top) {
    $('#sticky').addClass('stick');
  } else {
    $('#sticky').removeClass('stick');
  }
}

$(function() {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});