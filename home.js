const number = 12345678910;
const pin = 1234;
const transactionData=[]
//resuable function
function getInputValueNumber(id){
const inputField =  document.getElementById(id);
const inputFieldValue = inputField.value;
const inputFieldValueNumber =Number(inputFieldValue);

/* console.log(inputFieldValueNumber); */
return inputFieldValueNumber;
}

//resuable function
function getInputInnerText(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.innerText;
  const inputFieldValueNumber = Number(inputFieldValue);

  return inputFieldValueNumber;
}
//resuable function
function setInputInnerText(value) {
  
document.getElementById("availableBalance").innerText=value
 
}
//resuable functions for toggle 
function togle(id){
const formsBtn = document.getElementsByClassName("forms-btn");
for (let formBtn of formsBtn) {
  formBtn.style.background = "";
  formBtn.style.scale = "";
  formBtn.classList.add("border-2", "border-gray-400");
}

document.getElementById(id).style.background = "#48C8FF";
document.getElementById(id).style.scale = "1.1";
document.getElementById(id).style.transition = "0.7s";
document.getElementById(id).classList.remove("border-2", "border-gray-400"); 
}






//toogle feacher 

//1
document.getElementById("addButtons").addEventListener("click", (e) => {
  const Forms = document.getElementsByClassName("forms");
  for (let form of Forms) {
    form.style.display = "none";
    
  }

  document.getElementById("addMoneyParent").style.display = "block";
 
 togle("addButtons");

});

//2
document.getElementById("cashoutButtons").addEventListener("click",((e)=>{
  const Forms = document.getElementsByClassName("forms");
  for (let index = 0; index < Forms.length; index++) {
    Forms[index].style.display = "none";
  }
  document.getElementById("cashOutParent").style.display = "block";
  togle("cashoutButtons");
}))
//3
document.getElementById("transferButtons").addEventListener("click", (e) => {
  const Forms = document.getElementsByClassName("forms");
  for (let index = 0; index < Forms.length; index++) {
    Forms[index].style.display = "none";
  }
  document.getElementById("transferMoney").style.display = "block";
  togle("transferButtons");
});
//4
document.getElementById("getBonusButtons").addEventListener("click", (e) => {
  const Forms = document.getElementsByClassName("forms");
  for (let index = 0; index < Forms.length; index++) {
    Forms[index].style.display = "none";
  }
  document.getElementById("getBonus").style.display = "block";
   togle("getBonusButtons");
});

//5
document.getElementById("payBillButtons").addEventListener("click", (e) => {
  const Forms = document.getElementsByClassName("forms");
  for (let index = 0; index < Forms.length; index++) {
    Forms[index].style.display = "none";
  }
  document.getElementById("payBill").style.display = "block";
    togle("payBillButtons");
});


//6
document.getElementById("transitionsButtons").addEventListener("click", (e) => {
  const Forms = document.getElementsByClassName("forms");
  for (let index = 0; index < Forms.length; index++) {
    Forms[index].style.display = "none";
  }
  document.getElementById("transitions").style.display = "block";
    togle("transitionsButtons");
});





//add money featcher
document.getElementById("add-money").addEventListener("click", (e) => {
  e.preventDefault();
  const bank = document.getElementById("bank").value;
  const accountNumber =  getInputValueNumber("accountNumber");
  const addAmount = getInputValueNumber("addAmount");
  const addPin =getInputValueNumber("addPin");

  const availableBalance = getInputInnerText("availableBalance");

  if (
    number != accountNumber ||
    (accountNumber.lenght < 11 && accountNumber.lenght > 11)
  ) {
    alert("use valid account number ");
    return;
  }
  if (pin != addPin) {
    alert("use valid pin number ");
    return;
  }
  if (addAmount <= 0 || isNaN(addAmount) ) {
    alert("please add your amount");
    return;
  }
  const totalNewAvailableBalance = addAmount + availableBalance;

 setInputInnerText(totalNewAvailableBalance);
  alert(`your current balance ${totalNewAvailableBalance}`);
  const data ={
    name:"Add Money",
    date:new Date().toLocaleTimeString()
  }
  transactionData.push(data);
  
});

//cashout feacher

document.getElementById("widthdrawBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const withdrawAmount = getInputValueNumber("withdrawAmount");
    const availableBalance = getInputInnerText("availableBalance");
  const withdrawAgentNumber = getInputValueNumber("withdrawAgentNumber");
  const withdrawPin =getInputValueNumber("withdrawPin") ;


   if (
     (withdrawAgentNumber <= 0 && withdrawAgentNumber >=11) ||
     isNaN(withdrawAgentNumber)
   ) {
     alert("use valid account number ");
     return;
   }
   if (pin != withdrawPin) {
     alert("use valid pin number ");
     return;
   }
   if (withdrawAmount < 0 || isNaN(withdrawAmount)) {
     alert("please add your amount");
     return;
   }  
  const totalNewAvailableBalance = availableBalance - withdrawAmount;
  if (totalNewAvailableBalance <0) {
    alert("you dont have sufficient balance");
    return;
  }  
  
   setInputInnerText(totalNewAvailableBalance);
 alert(`your current balance ${totalNewAvailableBalance}`);
 const data = {
   name: "Cashout Money",
   date: new Date().toLocaleTimeString(),
 };
 transactionData.push(data);
 
});


//trangection feacher
document.getElementById("transitionsButtons").addEventListener("click",((e)=>{
e.preventDefault()
const transitions = document.getElementById("transitions")

transitions.innerHTML = "";
for (let transaction of transactionData ) {
 
  const div=document.createElement("div");
  div.innerHTML = `
  <div class="flex justify-between items-center border-[1px] border-gray-400 rounded-2xl px-3 py-3 mb-4">
    <div class="flex items-center gap-6  ">
      <div class="bg-gray-200 rounded-full p-2 mx-auto">
        <img src="./assets/wallet1.png" alt="" class="md:w-12 md:h-12 w-7 h-7">
      </div>
      <div class="space-y-1">
        <h1 class="font-bold">${transaction.name}</h1>
        <p>${transaction.date}</p>
      </div>
    </div>
    <div><i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i></div>
   </div>
  `;
  transitions.appendChild(div)

}
}))

//transfer feacher 

document.getElementById("TransferBtn").addEventListener("click",((e)=>{
  e.preventDefault();

  const withdrawTransferNumber = getInputValueNumber("withdrawTransferNumber");
  const availableBalance = getInputInnerText("availableBalance");
  const transferAmount = getInputValueNumber("transferAmount");
  const transferPin = getInputValueNumber("transferPin");

 if (!/^\d{11}$/.test(withdrawTransferNumber)) {
   alert("invalid account number");
   return;
 }

 if (transferPin!=pin) {
   alert("invalid pin number");
   return;
 }
 const totalNewAvailableBalance = availableBalance - transferAmount;
 if (totalNewAvailableBalance< 0) {
  alert("you dont have sufficient balance");
  return ;
 }
setInputInnerText(totalNewAvailableBalance);
alert(`your current balance is ${totalNewAvailableBalance}`);

 const data = {
   name: "Transfer Money",
   date: new Date().toLocaleTimeString(),
 };
 transactionData.push(data);

}))

//payamount feacher
;
document.getElementById("payMoney").addEventListener("click",((e)=>{
  e.preventDefault();
    const availableBalance = getInputInnerText("availableBalance");
 const payAccountNumber= getInputValueNumber("payAccountNumber");
 const payAmount = getInputValueNumber("payAmount");
 const payPin = getInputValueNumber("payPin");

 if (!/^\d{11}$/.test(payAccountNumber)) {
   alert("invalid  number");
   return;
 }

 if (payPin != pin) {
   alert("invalid pin number");
   return;
 }
 const totalNewAvailableBalance = availableBalance - payAmount;
 if (totalNewAvailableBalance < 0) {
   alert("you dont have sufficient balance");
   return;
 }
 setInputInnerText(totalNewAvailableBalance);
 alert(`your current balance is ${totalNewAvailableBalance}`);

 const data={
name:"Pay Bill",
date:new Date().toLocaleTimeString()
 }
 transactionData.push(data);
 console.log(transactionData);
}))