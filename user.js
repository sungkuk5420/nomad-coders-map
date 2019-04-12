var userListDOM = document.querySelector('#userlist');
var userList = require('./userData');

function addUserList() {
    console.log(`userList `, userList);
    var htmlTemplate = '';
    htmlTemplate += '<div class="user">';
    htmlTemplate += '    <span class="userimage"><img src="${image}" width="36"';
    htmlTemplate += '            height="36" /></span>';
    htmlTemplate += '    <span class="username">${name}</span>';
    htmlTemplate += '    <span class="state tooltip"><span class="area show">${showArea}</span><span class="area tooltiptext">${hideArea}</span></span>';
    htmlTemplate += '</div>';

    for (let i = 0; i < userList.length; i++) {
        const currentUserData = userList[i];
        replaceHTMLTemplate = htmlTemplate;
        var currentUserAreaList = currentUserData.area.split(',');
        console.log(currentUserAreaList);
        var currentUserArea = currentUserAreaList.length > 1 ? currentUserAreaList[0] + ', ...' : currentUserAreaList[0];
        replaceHTMLTemplate = replaceHTMLTemplate.replace('${name}', currentUserData.name)
            .replace('${image}', currentUserData.image)
            .replace('${showArea}', currentUserArea)
            .replace('${hideArea}', currentUserData.area)
        userListDOM.insertAdjacentHTML('beforeend', replaceHTMLTemplate);
    }

    addEventWhenClickedUserDom();
}

function addEventWhenClickedUserDom() {
    var userListDOM = document.querySelectorAll('.user');
    for (var i = 0; i < userListDOM.length; i++) {
        var currentUserDOM = userListDOM[i];
        currentUserDOM.addEventListener('click', function () {
            var userName = this.querySelector('.username').textContent;
            document.getElementById('searchtext').value = userName;
            window.userfilter(userName);
            var userData = userList.filter((currentUser) => currentUser.name === userName);
            window.makerReLoad(userData);
        }, false);

        // map.flyTo({ center: e.features[0].properties.coordinates });
        // map.zoomTo(19, {duration: 1000});
    }
}

function init() {
    addUserList();
}

init();