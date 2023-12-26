const click1=document.querySelector("#round_click1")
const click2=document.querySelector("#round_click2")
const click3=document.querySelector("#round_click3")
const round1=document.querySelector("#click_li1")
const round2=document.querySelector("#click_li2")
const round3=document.querySelector("#click_li3")

click1.addEventListener('click',()=>{
    document.getElementById('click_li1').innerHTML=date()
})
