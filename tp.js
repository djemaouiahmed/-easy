// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("navi");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }


}






const conte = document.querySelector('.conter')
const link = document.querySelector('.lnk')
const login = document.querySelector('.lgo')
const pop = document.querySelector('.pop')



link.addEventListener('click', () => {


    conte.classList.add('active');



});

login.addEventListener('click', () => {


    conte.classList.remove('active');



});
const log =document.querySelector('#login')

log.addEventListener('click',()=>{
 pop.classList.add('active')

}




);
const echap=document.querySelector('.ic')

echap.addEventListener('click',()=>{


pop.classList.remove('active');


}
);


const swr=document.getElementById('nn');

const droi =document.getElementById('droi');


const gchElement = document.getElementById("gch");

// Step 2: Get the element with the class "imate"
const imateElement = document.querySelector(".imate");
let cont=0;
let tcon=3;

// Step 3: Add a click event listener to the "gch" element
 function clickHandler() {
  
  
    if (cont !=0){
    // Step 4: et the current "left" value of the "imate" element and parse it to a number
    let currentLeft = parseFloat(window.getComputedStyle(imateElement).left);
    let curif = parseFloat(window.getComputedStyle(swr).left);
    // Step 5: Check if the "left" value is a valid number, and if not, set it to 0
    currentLeft = isNaN(currentLeft) ? 0 : currentLeft;
    curif = isNaN(curif) ? 0 : curif;
    // Step 6: Decrease the "left" value by 10 pixels
    currentLeft += 1680;
     curif+=1680;
    // Step 7: Update the "left" value of the "imate" element
    imateElement.style.left = `${currentLeft}px`; 
   swr.style.left = `${curif}px`; // Change "px" to the unit you need (e.g., "100vh")
    cont -= 1;
    tcon += 1;}
};

gchElement.addEventListener("click", clickHandler);



function clickHandler2() {


    if (tcon != 0) {
        // Step 4: et the current "left" value of the "imate" element and parse it to a number
        let currentLeft = parseFloat(window.getComputedStyle(imateElement).left);
        let curif = parseFloat(window.getComputedStyle(swr).left);
        // Step 5: Check if the "left" value is a valid number, and if not, set it to 0
        currentLeft = isNaN(currentLeft) ? 0 : currentLeft;
        curif = isNaN(curif) ? 0 : curif;
        // Step 6: Decrease the "left" value by 10 pixels
        currentLeft -= 1680;
        curif -= 1680;
        // Step 7: Update the "left" value of the "imate" element
        imateElement.style.left = `${currentLeft}px`;
        swr.style.left = `${curif}px`; // Change "px" to the unit you need (e.g., "100vh")
        cont += 1;
        tcon -= 1;
    }
};

setTimeout(() => {
    
droi.addEventListener("click", clickHandler2);},1000)

