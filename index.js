//Assign Variable
const input = document.querySelector("#givenlink");
const wrapper = document.querySelector(".wrapper");
const submit = document.querySelector(".submit");
const textarea = document.querySelector("textarea");
const copyBtn = document.querySelector(".copy");
const closeBtn = document.querySelector(".close");
const content = document.querySelector(".content");

//When submit button is clicked

submit.addEventListener("click",()=>{
 var value = input.value.trim();
 var driveUrl = "https://drive.google.com";
 
 //make expression for checking link
 
 var driveFileRegex = /^https:\/\/drive\.google\.com/;
if(value === driveUrl || value.match(driveFileRegex)){
 console.log("if working");
 wrapper.classList.add("active")
 const link = input.value;
 
 //make expression for trim id from link
 
 let tokenRegex = /\/([a-zA-Z0-9_-]+)\/view/;
 let match = link.match(tokenRegex);
 let token = match[1];
 const finalLink = `https://drive.google.com/uc?export=download&id=${token}`;
 textarea.innerHTML = finalLink;
}else{
 console.log("else working")
 content.classList.add("error")
 input.placeholder = "Lol! You have to paste Gdrive Link";
 input.style.color = "red"
}
})

//copy extracted link

copyBtn.addEventListener("click",()=>{
 let txt = textarea.value;
 navigator.clipboard.writeText(txt);
})

//close text area

closeBtn.addEventListener("click",()=>{
 wrapper.classList.remove("active");
 content.classList.remove("error");
 input.value = "";
 input.placeholder = "INPUT YOUR GDRIVE LINK";
 
})
