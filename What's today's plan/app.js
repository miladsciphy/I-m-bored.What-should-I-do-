"use strict";

const choose = document.querySelector(".btn");

const tasvir = document.querySelector(".what");

const matn = document.querySelector(".text");

choose.addEventListener("click", function () {
  const letsGo = Math.floor(Math.random() * 40) + 1;
  tasvir.classList.remove("hidden");
  matn.classList.remove("hidden");
  tasvir.src = `/images/pic-${letsGo}.jpg`;
  if (letsGo === 1) {
    matn.textContent = "به به فیفا";
  } else if (letsGo === 2) {
    matn.textContent = "به به   پی اس";
  } else if (letsGo === 3) {
    matn.textContent = "به به  دوتا۲";
  } else if (letsGo === 4) {
    matn.textContent = "بریم استخر ";
  } else if (letsGo === 5) {
    matn.textContent = "بریم پارک آبی";
  } else if (letsGo === 6) {
    matn.textContent = " بریم قدم بزنیم    ";
  } else if (letsGo === 7) {
    matn.textContent = "    بریم رستوران";
  } else if (letsGo === 8) {
    matn.textContent = "بریم کافه  ";
  } else if (letsGo === 9) {
    matn.textContent = "بستنی بزنیم بر بدن  ";
  } else if (letsGo === 10) {
    matn.textContent = "کتاب بخونیم      ";
  } else if (letsGo === 11) {
    matn.textContent = "   شل کردن هم هنریه واسه خودش  ";
  } else if (letsGo === 12) {
    matn.textContent = "   بیلیارد بازی کنیم  ";
  } else if (letsGo === 13) {
    matn.textContent = " بریم پارک     ";
  } else if (letsGo === 14) {
    matn.textContent = " بریم دور دور    ";
  } else if (letsGo === 15) {
    matn.textContent = " پینگ پنگ بازی کنیم    ";
  } else if (letsGo === 16) {
    matn.textContent = " آوازخوانی تکی و گروهی    ";
  } else if (letsGo === 17) {
    matn.textContent = " chill      ";
  } else if (letsGo === 18) {
    matn.textContent = " ماساژ بگیریم    ";
  } else if (letsGo === 19) {
    matn.textContent = "     زنگ بزنیم به دوست قدیمی";
  } else if (letsGo === 20) {
    matn.textContent = "عکس و فیلم قدیمی ببینیم     ";
  } else if (letsGo === 21) {
    matn.textContent = "فیلم ترسناک ببینیم      ";
  } else if (letsGo === 22) {
    matn.textContent = "برای آینده برنامه ریزی کنیم یکم  ";
  } else if (letsGo === 23) {
    matn.textContent = " به حیوون ها غدا بدیم   ";
  } else if (letsGo === 24) {
    matn.textContent = " کنار خانواده خوش باشیم  ";
  } else if (letsGo === 25) {
    matn.textContent = " بریم دوچرخه سواری  ";
  } else if (letsGo === 26) {
    matn.textContent = " یکم با غریبه ها صحبت کنیم ";
  } else if (letsGo === 27) {
    matn.textContent = "  تو کار خیر داوطلب بشیم و به بقیه کمک کنیم      ";
  } else if (letsGo === 28) {
    matn.textContent = " تو خونه ورزش کنیم     ";
  } else if (letsGo === 29) {
    matn.textContent = " با هم برقصیم     ";
  } else if (letsGo === 30) {
    matn.textContent = " یکم میوه فصل بزنیم بر بدن     ";
  } else if (letsGo === 31) {
    matn.textContent = " یه غذایی که دوس داریم بپزیم    ";
  } else if (letsGo === 32) {
    matn.textContent = " نیم ساعت فقط بوس     ";
  } else if (letsGo === 33) {
    matn.textContent = " نیم ساعت بغل    ";
  } else if (letsGo === 34) {
    matn.textContent = " ماساژ سر بگیریم    ";
  } else if (letsGo === 35) {
    matn.textContent = " وان سرد یا گرم     ";
  } else if (letsGo === 36) {
    matn.textContent = " زبان تازه یاد بگیریم یکم    ";
  } else if (letsGo === 37) {
    matn.textContent = " پاشو یه حالی به خونه بده    ";
  } else if (letsGo === 38) {
    matn.textContent = " بریم کوهنوردی    ";
  } else if (letsGo === 39) {
    matn.textContent = " نقاشی بکشیم     ";
  } else if (letsGo === 40) {
    matn.textContent = " ساز مورد علاقه بزنیم   ";
  } else if (letsGo === 41) {
    matn.textContent = "بریم خرید";
  }
});
