if (window.location.href.includes('editor')) {
} else {
str = window.location.href
var apple = str.split('https://scratch.mit.edu/projects/')[1];
var apple2 = apple.split('/')[0];
getapi2(`https://api.scratch.mit.edu/projects/${apple2}/`)
}

async function getapi2(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    var url = window.location.href;
    var stuff = data["code"]
    if (1 === 2) {
        window.location.href = `https://turbowarp.org/${apple2}`
    } else {
        setTimeout(() => { proposebutton() }, 2000);
    }
}

async function getapistuff(url) {
    
    // Storing response
    const response = await fetch(`https://api.scratch.mit.edu/projects/${url}/`);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    var url = window.location.href;
    var stuff = data["author"]["username"]
    if (stuff === document.querySelector('#navigation > div > ul > li.link.right.account-nav > div > a > span').textContent) {
        abc()
    } else {
        xyz()
    }
}

async function getapi3(url, abc) {
    
    // Storing response
    const response = await fetch('https://scratchdb.lefty.one/v3/user/info/' +url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (JSON.stringify(data) !== '{"error":"UserNotFoundError"}') {
    var stuff = data["statistics"]["followers"]
    document.querySelector('#view > div > div.inner > div.flex-row.preview-row.force-row > div.flex-row.project-header > div > a').textContent = `${abc} - ${stuff} Followers (Credit to ScratchDB by DatOneLefty)`
}
}

function propose() {
    alert('Hello')
}

function proposebutton() {
getapistuff(apple2)
}

function abc() {
    var elem = document.createElement('button');
    elem.textContent = 'Set Featured';
    elem.className = 'button action-button feature-button'
    elem.onclick = function() {
        stuff()
        alert('The project has been set as featured!')
      }
    document.querySelector('#view > div > div.inner > div:nth-child(3) > div.flex-row.subactions > div.flex-row.action-buttons').appendChild(elem);
    }

    function xyz() {
getapi3(document.querySelector('#view > div > div.inner > div.flex-row.preview-row.force-row > div.flex-row.project-header > div > a').textContent, document.querySelector('#view > div > div.inner > div.flex-row.preview-row.force-row > div.flex-row.project-header > div > a').textContent)

var elem = document.createElement('button');
elem.textContent = 'Propose';
elem.className = 'button action-button propose-button'
var el = document.createElement('a');
el.href = 'https://scratch.mit.edu/studios/28715018/comments/'
document.querySelector('#view > div > div.inner > div:nth-child(3) > div.flex-row.subactions > div.flex-row.action-buttons').appendChild(el);
document.querySelector('#view > div > div.inner > div:nth-child(3) > div.flex-row.subactions > div.flex-row.action-buttons > a').appendChild(elem);
}

function stuff() {
    str = window.location.href
    var apple = str.split('https://scratch.mit.edu/projects/')[1];
  var stuff = apple.split('/')[0];
    stuff2 = document.querySelector('#navigation > div > ul > li.link.right.account-nav > div > a > span').textContent
    fetch("https://scratch.mit.edu/site-api/users/all/" +stuff2+ "/", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-csrftoken": "rJrBdCSe4VX1eEwb9VE4wCbc6V85KXUd",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://scratch.mit.edu/users/" +stuff2+ "/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"featured_project\":" +stuff+ ",\"featured_project_label\":\"\"}",
    "method": "PUT",
    "mode": "cors",
    "credentials": "include"
  });
  }