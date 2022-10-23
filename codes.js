"use strict";
const monthlyBtn = document.querySelector(".monthly");
const yearlyBtn = document.querySelector(".yearly");
const yearlyFt = document.querySelector(".yearly--features");
const monthlyFt = document.querySelector(".monthly--features");
const colBox = document.querySelector(".col2Box");
const intro = document.querySelector(".intro");
const base = document.querySelector(".base");
console.log(intro.className);

let bonus = document.querySelector(".bonus");
const checkColBox = document.querySelector(".check--icon");
const thePricing = document.querySelector(".dpricing");
const thePricingMonth = document.querySelector(".dpricing--month");

yearlyBtn.addEventListener("click", () => {
  yearlyFt.classList.remove("active");
  monthlyFt.classList.add("active");
  yearlyBtn.style.backgroundColor = "#7905ff";
  yearlyBtn.style.color = "#fff";
  //   monthlyBtn.style.zIndex = "-1";
  monthlyBtn.style.backgroundColor = "#fff";
  monthlyBtn.style.color = "#570373";
});
monthlyBtn.addEventListener("click", () => {
  monthlyFt.classList.remove("active");
  yearlyFt.classList.add("active");
  monthlyBtn.style.backgroundColor = "";
  monthlyBtn.style.color = "#fff";

  yearlyBtn.style.backgroundColor = "#fff";
  yearlyBtn.style.color = "#570373";
});

let introSelectPlan = function () {
  intro.style.backgroundColor = "#7905ff";
  let dChild = thePricingMonth.firstChild;
  let bonusChildren = bonus.children;
  for (let child of bonusChildren) {
    console.log(child.innerHTML);
    child.style.color = "#fff";
    child.style.fontWeight = "600";
  }
  checkColBox.innerHTML = "&#10004;";
  checkColBox.style.color = "#fff";
  checkColBox.style.borderColor = "#fff";
  bonusChildren[1].style.backgroundColor = "rgba(255,255,255,0.1)";
  bonusChildren[1].style.fontSize = "13px";
  thePricing.style.color = "#fff";
  thePricing.style.fontWeight = "600";
  dChild.style.color = "#f7f7f7";

  /////////////////////////////////////////////////////
  // bonuses.forEach((bonus) => {
  //   for (let bonusChild of bonus.children) {
  //     console.log(bonusChild.textContent);
  //     if (bonusChild.textContent === "intro") {
  //       console.log("hello");
  //       bonusChild.style.color = "#fff";
  //     }else if(bonusChild.textContent === "base"){
  //       bonusChild.style.color = "#fff";

  //     }
  //   }
  // });
};

let baseSelectPlan = function () {
  let baseBonus = document.querySelector(".base--bonus");
  let baseCheckBonus = document.querySelector(".base--check--icon");
  let baseDpricing = document.querySelector(".base--dpricng");
  let baseDpricingMonth = document.querySelector(".base--dpricng--month");
  base.style.backgroundColor = "#7905ff";
  let dChild = thePricingMonth.firstChild;
  let baseBonusChildren = baseBonus.children;
  for (let child of baseBonusChildren) {
    // console.log(child.innerHTML);
    child.style.color = "#fff";
    child.style.fontWeight = "600";
  }
  baseCheckBonus.innerHTML = "&#10004;";
  baseCheckBonus.style.color = "#fff";
  baseCheckBonus.style.borderColor = "#fff";
  baseBonusChildren[1].style.backgroundColor = "rgba(255,255,255,0.1)";
  baseBonusChildren[1].style.fontSize = "13px";
  baseDpricing.style.color = "#fff";
  baseDpricing.style.fontWeight = "600";
  let baseSup = baseDpricingMonth.firstElementChild;
  baseSup.style.color = "#f7f7f7";
};
intro.addEventListener("click", function () {
  introSelectPlan();
});
base.addEventListener("click", function () {
  baseSelectPlan();
  if (base.previousElementSibling) {
    intro.style.backgroundColor = "#fff";
    let dChild = thePricingMonth.firstChild;
    let bonusChildren = bonus.children;
    for (let child of bonusChildren) {
      console.log(child.innerHTML);
      child.style.color = " #570373";
      child.style.fontWeight = "600";
    }
    // checkColBox.innerHTML = "&#10004;";
    // checkColBox.style.color = "#fff";
    checkColBox.style.borderColor = "#000";
    bonusChildren[1].style.backgroundColor = "rgba(255,255,255,0.1)";
    bonusChildren[1].style.fontSize = "18px";
    bonusChildren[1].style.fontWeight = "400";
    bonusChildren[1].style.color = "#000";
    bonusChildren[1].style.backgroundColor = "rgba(0, 0, 0, 0.04)";
    thePricing.style.color = " #570373";
    thePricing.style.fontWeight = "600";
    dChild.style.color = " #000";
  }
});
