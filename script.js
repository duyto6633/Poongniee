const adressbtn =document.querySelector('#adress-form')
const adressclose =document.querySelector('#adress-close')
let index=0

adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="none"
})
//silder
const imgNuber= document.querySelectorAll('.slider-content-left-top img')
const rightbtn =document.querySelector('.fa-chevron-right')
const leftbtn =document.querySelector('.fa-chevron-left')
    rightbtn.addEventListener("click",function(){
        index =index+1
        if (index>imgNuber.length-1){
            index=0
        }
        document.querySelector(".slider-content-left-top").style.right= index *100+"%"
    })
    leftbtn.addEventListener("click",function(){
        index =index-1
        if (index<=0){
            index=imgNuber.length-1
        }
        document.querySelector(".slider-content-left-top").style.right=index *100+"%"
    })
function imgAuto(){
    index=index +1 
    if ( index>imgNuber.length-1){
       index=0
        
    }
    document.querySelector(".slider-content-left-top").style.right= index *100+"%"
    console.log(index)
}
setInterval(imgAuto,5000)
//----------------------------
const rightbtntwo =document.querySelector('.fa-chevron-right-two')
const leftbtntwo =document.querySelector('.fa-chevron-left-two')
const imgNubertwo= document.querySelectorAll('.slider-product-one-content-items')
rightbtntwo.addEventListener("click",function(){
    index =index+1
    if (index>imgNubertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right= index *100+"%"
})
leftbtntwo.addEventListener("click",function(){
    index =index-1
    if (index<=0){
        index=imgNubertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right=index *100+"%"
})
