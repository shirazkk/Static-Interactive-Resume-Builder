let button=document.querySelector(".skills-button")
let buttonul=document.querySelector(".button-ul-remove")
let education=document.querySelector(".education-h2")
let educationremove=document.querySelector(".education-remove")
let workexperience=document.querySelector(".work")
let workdetail=document.querySelector(".fresher")



button.addEventListener("click",()=>{
        buttonul.classList.toggle("button-ul-remove")
})

education.addEventListener("click",()=>{
    educationremove.classList.toggle("education-remove")
})

workexperience.addEventListener("click",()=>{
    workdetail.classList.toggle("fresher")
})