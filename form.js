let p1=document.getElementById("uerr");
let p2=document.getElementById("eerr");
let p3=document.getElementById("merr");
let p4=document.getElementById("perr");
let p5=document.getElementById("cerr");
let username= document.getElementById("username");
let email=document.getElementById("email");
let mobile=document.getElementById("mobile");
let password= document.getElementById("pass");
let confirm=document.getElementById("Confirm");
let flag=0;
function validform(){
// USERNAME
   if(username.value=="") 
   {
     console.log(p1.innerHTML=("-:user name is empty:-"));
     flag=0;
   }else if(username.value.length<10)
      {
    console.log(p1.innerHTML=("-:length does not match:-"));
    flag=0;
   }
   else{
      p1.innerHTML=""
      flag=1;
   }
// EMAIL
   if(email.value=="")
   {
     console.log(p2.innerHTML=("-:email is empty:-"));
     flag=0;
   }else if(email.value==""){
    console.log(p2.innerHTML=("-:not valid email format:-"));
    flag=0;
   }
   else{
      p2.innerHTML=""
      flag=1;
   }
// MOBILE NUMBER
   if(mobile.value=="")
   {
     console.log(p3.innerHTML=("-:mobile number is empty:-"));
     flag=0;
   }else if(mobile.value.length<10){
    console.log(p3.innerHTML=("-:not a valid mobile number:-"));
    flag=0;
   }
   else{
      p3.innerHTML=""
      flag=1;
   }
// PASSWORD
   if(password.value=="")
   {
     console.log(p4.innerHTML=("-:password is empty:-"));
     flag=0;
   }else if(password.value.length<10){
    console.log(p4.innerHTML=("-:atleast 10 character:-"));
    flag=0;
   }
   else{
      p4.innerHTML=""
      flag=1;
   }
// CONFIRM PASSWORD
   if(confirm.value!=password.value)
   {
      console.log(p5.innerHTML=("-:password does not match:-"))
   }
   else{
      p5.innerHTML=""
      flag=1;
   }
   
   if(flag==1){
      return true;

   }else{
      document.getElementById("main").style.height="600px";
      return false;
   }
  
}