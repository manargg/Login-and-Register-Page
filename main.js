document.addEventListener('DOMContentLoaded', function () {

const signIn =  document.getElementById("signIn").addEventListener("click", function(){

    var register = document.getElementById("register").classList.add("hidden");
    var login = document.getElementById("login").classList.remove("hidden");


});


const signUp =  document.getElementById("signUp").addEventListener("click", function(){
    var register = document.getElementById("register").classList.remove("hidden");
    var login = document.getElementById("login").classList.add("hidden");

});


const form1 = document.getElementById("form1").addEventListener("click", function(){
    var register = document.getElementById("register").classList.add("hidden");
    var login = document.getElementById("login").classList.remove("hidden");

});


const form2 = document.getElementById("form2").addEventListener("click", function(){
    var register = document.getElementById("register").classList.remove("hidden");
    var login = document.getElementById("login").classList.add("hidden");

});

const menu = document.getElementById("menu-toggle").addEventListener("click",function(){
     var toggleMenu = document.getElementById("menu").classList.toggle("hidden");
});
});