var height = window.innerHeight;
// console.log(height);
var who = document.querySelector('#who');

who.onclick = scrollPage;
function scrollPage() {
  $('html, body').stop().animate( { scrollTop: height} );
}

/* 시간구하기 */
var time = new Date();
console.log(time);
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
console.log(hour, min, sec);
