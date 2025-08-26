document.getElementById("loginButton").addEventListener('click',((e)=>{
    e.preventDefault();
   const number = 12345678910;
   const pin    =  1234;
  const phone = Number(document.getElementById("phone").value);
  const pinNumber = Number(document.getElementById("pinNumber").value);
  

/* 
  if (number=== phone && pin === pinNumber) {
    alert("all matched")
    window.location.href='./home.html'
  }else{
     alert("invalid");
  } */

     if (!/^\d{11}$/.test(phone) || !/^\d{4}$/.test(pinNumber)) {
       alert("invalid | submit all valid data");
     } else {
       alert("all matched");
       window.location.href = "./home.html";
     } 
}))

