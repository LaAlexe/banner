var banner = document.getElementById('banner');
var perem = 10;
var k = document.getElementById('time');
var date = new Date(new Date().getTime() + 10 * 1000);
document.cookie = "name=value; path=/; expires=" + date.toUTCString();
var timerId = setInterval(function() {
console.log(getCookie("name"));
if (getCookie("name") != undefined){
	banner.style.display = "block";
 perem = perem-1;
 time.innerHTML = "Осталось:"+ " " + perem;
} else {
banner.style.display = "none";
}
}, 1000);

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}