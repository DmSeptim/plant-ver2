
const serviceButton = document.querySelectorAll(".service__button");
const hs = document.querySelectorAll(".projects__card");

// serviceButton.forEach(function(item){
// item.addEventListener("click", blurAll);
// });

// function blurAll(){
//     hs.forEach(function(item){
//         item.classList.add('active');
//     });
// }


const proj = document.querySelector(".projects");
proj.addEventListener("click", blurCl);


function blurCl(){
    hs.forEach(function(item){
        item.classList.remove('active');
    });
}



// window.onclick = function(event) {
//     if (event.target == serviceButton) {
//         serviceButton.classList.remove('active');
//     }
// }



const gardens = document.querySelector(".service__button--1")
const itemFilter = document.querySelectorAll(".projects__card--garden");


gardens.addEventListener("click", itemsFil);

function itemsFil() {
    itemFilter.forEach(function(item){
        item.classList.toggle('active');
    });
}

const lawn = document.querySelector(".service__button--2")
const itemFilter2 = document.querySelectorAll(".lawn");


lawn.addEventListener("click", itemsFil2);

function itemsFil2() {
    itemFilter2.forEach(function(item){
        item.classList.toggle('active');
    });
}


const planting = document.querySelector(".service__button--3")
const itemFilter3 = document.querySelectorAll(".planting");

planting.addEventListener("click", itemsFil3);

function itemsFil3() {
    itemFilter3.forEach(function(item){
        item.classList.toggle('active');
    });

}






// $(document).mouseup(function (e) {
//     var container = $(".service__button");
//     if (container.has(e.target).length === 0){
//         container.hide();
//     }
// });

// const list = document.querySelectorAll("[data-name='acc']");    



// list.forEach(function (item) {
//     item.addEventListener("click", listClick);
// });

// function listClick() {
//     this.nextElementSibling.classList.toggle("elem__details");
// }



// const iconList = document.querySelectorAll('.elem__iconOp')

// iconList.forEach(function (item){
//     item.addEventListener("click", iconClose);
// });
// function iconClose() {
//     this.classList.toggle('elem__iconCl');
// }



const list = document.querySelectorAll("[data-name='acc']");    
const iconList = document.querySelectorAll('.elem__iconOp')
const elemIcon = document.querySelectorAll(".elem_1")

list.forEach(function (item) {
    item.addEventListener("click", listClick);
});

function listClick() {
    this.nextElementSibling.classList.toggle("elem__details");
}


list.forEach(function (item){
    item.addEventListener("click", iconClose);
});
function iconClose() {
    this.lastElementChild.classList.toggle('elem__iconCl');
}



const elemNext = document.querySelectorAll('.datails__1');
const elemHs = document.querySelector('.qwerty')

elemNext.forEach(function(item){
    item.addEventListener("click", closeList)
});

function closeList(){
    elemHs.classList.toggle("elem__details")
}


const textElement = document.querySelector('.elemH3--fix')
const newTextElement = document.querySelector('.datails--1');
const newTextElement2 = document.querySelector('.datails--2');
const newTextElement3 = document.querySelector('.datails--3');
const newTextElement4 = document.querySelector('.datails--4');

newTextElement.addEventListener('click', textChenge1)
newTextElement2.addEventListener('click', textChenge2)
newTextElement3.addEventListener('click', textChenge3)
newTextElement4.addEventListener('click', textChenge4)

function textChenge1(){ 
    textElement.innerHTML = "Canandaigua, NY"
}
function textChenge2(){
    textElement.innerHTML = "New York City"
};
function textChenge3(){
    textElement.innerHTML = "Yonkers, NY"
};
function textChenge4(){
    textElement.innerHTML = "Sherrill, NY"
}



// $(this).find(".select").click(function(event){
//     $(".select").not(this).parent().removeClass("opened");
//     $(this).parent().toggleClass("opened");
//   });




