const cookieImg = document.getElementById("cookieImg");
const cookieCountText = document.getElementById("cookieCount");
const cursorBuilding = document.getElementById("cursor");
const cursorPriceText = document.getElementById("cursor-price")
const cookiesPerSecondText = document.getElementById("cookiesPerSecond");
const mouseUpgrade = document.querySelector(".upgrade#mouse");
const mouseUpgradePriceText = document.querySelector(".upgrade#mouse .price");
let cookieCount = 0;
let cursorPrice = 10;
let mouseUpgradePrice = 50;
let numOfCursors = 0;
let cookiesPerCursor = 1;
let cookiesPerClick = 1;

cookieImg.addEventListener('click', () => {
    cookieCount += cookiesPerClick;
    cookieCountText.textContent = "Cookies: " + cookieCount;
})

cursorBuilding.addEventListener('click', () => {
    if(cookieCount >= cursorPrice){
        cookieCount -= cursorPrice;
        cookieCountText.textContent = "Cookies: " + cookieCount;
        cursorPrice *= 1.5;
        //Round Price up
        cursorPrice = Math.round(cursorPrice);
        cursorPriceText.textContent = cursorPrice + " Cookies";
        numOfCursors += 1;
        cookiesPerSecondText.textContent = "Cookies Per Second: " + numOfCursors * cookiesPerCursor;
    } else {
        alert("Not enough cookies");
    }
})

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        cookieCount += numOfCursors * cookiesPerCursor;
        cookieCountText.textContent = "Cookies: " + cookieCount;
    },1000)
})

mouseUpgrade.addEventListener("click", () => {
    if(cookieCount >= mouseUpgradePrice){
        cookieCount -= mouseUpgradePrice;
        cookieCountText.textContent = "Cookies: " + cookieCount;
        mouseUpgradePrice *= 1.5;
        mouseUpgradePrice = Math.round(mouseUpgradePrice);
        mouseUpgradePriceText.textContent = "Price: " + mouseUpgradePrice + " Cookies";
        cookiesPerClick += 1;


    } else {
        alert("Not enough cookies");
    }
})