about()
str = window.location.href
document.querySelector('#profile-avatar > div > a > img').style.borderRadius = "10%";
document.querySelector('#profile-avatar > div > a > img').style.border = "0px";
var elementExists = document.querySelector('#featured-project > img')
if (elementExists !== null) {
document.querySelector('#featured-project > img').style.borderRadius = "20px";
}
const help = ["rgantzos", "lisa_wolfgang", "--Explosion--", "GarboMuffin", "Xancan", "-Jensen-", "-Intensify-", "-OutroCoder-"];
if (help.includes(document.querySelector('#profile-data > div.box-head > div > h2').textContent)) {
document.querySelector('#profile-data > div.box-head > div > p > span.group').textContent = `${document.querySelector('#profile-data > div.box-head > div > p > span.group').textContent} | ScratchTools`
document.querySelector('#profile-data > div.box-head > div > h2').textContent = `*${document.querySelector('#profile-data > div.box-head > div > h2').textContent}`
}
var apple = str.split('https://scratch.mit.edu/users/')[1];
  var apple2 = apple.split('/')[0];
  getapi3(`https://api.scratch.mit.edu/users/${apple2}/`, apple2);
  var elementExists = document.querySelector("div.template-feature-off.comments-off")
if (elementExists !== null) {
  document.querySelector("div.template-feature-off.comments-off").textContent = 'This user has chosen to turn off their profile comments.';
}
async function getapi3(url, user) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    var country = data["profile"]["country"]
    console.log(country)
    getapi2(`https://api.scratch.mit.edu/users/${user}/messages/count/`, country);
}
// Calling that async function

async function getapi2(url, a) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    var stuff = data["count"]
    document.querySelector(".location").textContent = `${a} | ${stuff} Messages`;
}
// Calling that async function

function about() {
  if (getCookie('hideabout?') === 'yes') {
    document.querySelector('#topnav > div > div > ul.site-nav > li.last').remove()
  }
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
}

function feature() {

}