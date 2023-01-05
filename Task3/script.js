$(document).ready(function(){
    $("#exit").click(function(){
      $(".promo").slideUp();
    });
});

$(document).ready(function(){
  $("#nav-icon1").click(function(){
    $(".nav-slide").slideDown();
    $("#nav-icon1").hide();
    $("#nav-icon2").show();
  });
  $("#nav-icon2").click(function(){
    $(".nav-slide").slideUp();
    $("#nav-icon1").show();
    $("#nav-icon2").hide();
  });
});


const newdate = "1/1/2024";

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.seconds');

function timeCountDown() {
  const nowDate = new Date();
  const newDate2 = new Date(newdate);
  const totalSeconds = (newDate2 - nowDate) / 1000;

  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  hourEl.textContent = formatTime(hours);
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);

}

function formatTime(time) {
  return time > 10 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);