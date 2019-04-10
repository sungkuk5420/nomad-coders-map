var userListDOM = document.querySelector('#userlist');

var userList = [{
        name: 'Negabaro',
        area: 'JAPAN TOKYO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UB14TGB55-g7697a88eac6-72',
    },
    {
        name: 'GUIEEN',
        area: 'JAPAN TOKYO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U913SL69X-f63f38f43edf-72',
    },
    {
        name: 'na',
        area: 'JAPAN TOKYO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8QRPTAQ5-gd80700c18bf-72',
    },
    {
        name: 'sangmin',
        area: 'JAPAN TOKYO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UB86BHABT-gbe65245ecf4-72',
    },
    {
        name: 'NEO',
        area: 'JAPAN TOKYO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8NANUGEL-d78b72499ea0-72',
    },
    {
        name: 'stonesteel',
        area: 'JAPAN TOKYO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UB86BHABT-gbe65245ecf4-72',
    },
    {
        name: 'kneeprayer',
        area: 'JAPAN TOKYO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8LLTP1GS-g84e2925d10f-48',
    },
    {
        name: 'Geonwoo',
        area: 'JAPAN TOKYO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UBZPG3M2P-2b8f88e755e0-24',
    },
    {
        name: 'kimsungkuk',
        area: 'JAPAN OSAKA',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UBCGHBL3A-333406eb9878-24',
    },
    {
        name: 'Mijeong',
        area: 'USA east',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UB06FH7ND-0755554ced39-24',
    },
    {
        name: 'JD',
        area: 'USA east',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8MPU0G8N-g4a40b7289cd-24',
    },
    {
        name: 'WHYjun',
        area: 'USA east',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UBC4WT8B1-a5259c5a8587-24',
    },
    {
        name: 'Sangseok',
        area: 'USA east',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UAUGYKXLG-ge61187faefd-24',
    },
    {
        name: 'toru',
        area: 'USA west',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UCB6TGNGL-d21a8758e6d1-24',
    },
    {
        name: 'Mason',
        area: 'USA west',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UATJFFKJT-75e7b340e970-24',
    },
    {
        name: 'Gabriel',
        area: 'USA ect',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UB33A8VQT-g82ee552209c-24',
    },
    {
        name: 'Alison',
        area: 'USA ect',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U9GTGKP9U-6e835aa12719-24',
    },
    {
        name: 'Mina',
        area: 'USA ect',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UAECVRSJK-gc270c041390-24',
    },
    {
        name: 'ayong8',
        area: 'USA ect',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8MKE98TT-g20306a01db0-24',
    },
    {
        name: 'Haven',
        area: 'USA ect',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UB8S3J2GL-gf080a3286f5-24',
    },
    {
        name: 'jun',
        area: 'USA ect',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8MR6JZ43-ge6ac2bf178c-24',
    },
    {
        name: 'Henry',
        area: 'AUSTRAILIA Cairns',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UBTCE9M9U-g062270a6b0f-24',
    },
    {
        name: 'Gabriel',
        area: 'AUSTRAILIA Sydney',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UB33A8VQT-g82ee552209c-24',
    },
    {
        name: 'Gabriel',
        area: 'NEW ZEALAND',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UB33A8VQT-g82ee552209c-24',
    },
    {
        name: 'Alison',
        area: 'CANADA MONTREAL',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U9GTGKP9U-6e835aa12719-24',
    },
    {
        name: 'Sean',
        area: 'CANADA CALGARY',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UBYUHJ7E1-5e89d0f3240f-24',
    },
    {
        name: 'Nari',
        area: 'CANADA',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U9N9AD1BP-8e0a415925fc-24',
    },
    {
        name: 'JIMIN',
        area: 'CANADA TORONTO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UD5UHV7A7-8e15b0a31227-24',
    },
    {
        name: 'Kendrick',
        area: 'CANADA',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UE3PJJ1UJ-g14a550a1384-24',
    },
    {
        name: 'Jin',
        area: 'EUROPE FINLAND',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U9K9Y9S87-g11ab2abdcc7-24',
    },
    {
        name: 'David',
        area: 'EUROPE GERMANY',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8Y8GSML4-deae4e0b1216-24',
    },
    {
        name: 'Andy',
        area: 'EUROPE GERMANY',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U9DMWQ8TU-g0bac878fcad-24',
    },
    {
        name: 'Plusbeauxjours',
        area: 'EUROPE FRANCE',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8SH7TYUV-g94ebeb3381c-24',
    },
    {
        name: 'Nicolas',
        area: 'EUROPE TURKEY',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8LDEMDC6-5bbd2333c7ea-24',
    },
    {
        name: 'Plusbeauxjours',
        area: 'EUROPE HUNGARY',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8SH7TYUV-g94ebeb3381c-24',
    },
    {
        name: 'Nicolas',
        area: 'EUROPE GREECE',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8LDEMDC6-5bbd2333c7ea-24',
    },
    {
        name: 'Gabriel',
        area: 'PHILLIPINES',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UB33A8VQT-g82ee552209c-24',
    },
    {
        name: 'Plusbeauxjours',
        area: 'PHILLIPINES',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8SH7TYUV-g94ebeb3381c-24',
    },
    {
        name: 'Lynn',
        area: 'THAILAND',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U61C8JJHK-9a572b04bf5f-24',
    },
    {
        name: 'Plusbeauxjours',
        area: 'THAILAND',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8SH7TYUV-g94ebeb3381c-24',
    },
    {
        name: 'Lynn',
        area: 'INDIA',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U61C8JJHK-9a572b04bf5f-24',
    },
    {
        name: 'HaeLim',
        area: 'MALAYSIA',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8SH7TYUV-g94ebeb3381c-24',
    },
    {
        name: 'Nari',
        area: 'AMERICA MEXICO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U9N9AD1BP-8e0a415925fc-24',
    },
    {
        name: 'stonesteel',
        area: 'AFRICA GHANA',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8VEE8YHW-g998625d818a-24',
    },
    {
        name: 'Lynn',
        area: 'AFRICA MOROCCO',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U61C8JJHK-9a572b04bf5f-24',
    },
    {
        name: 'Plusbeauxjours',
        area: 'SAUDI ARABIA',
        image: 'https://ca.slack-edge.com/T60TDKNJK-U8SH7TYUV-g94ebeb3381c-24',
    },
    {
        name: 'Teddy',
        area: 'China Beijing',
        image: 'https://ca.slack-edge.com/T60TDKNJK-UAAM7QEQK-e9a73fcd789a-24',
    }
]

function addUserList() {
    console.log(`userList `, userList);
    var htmlTemplate = '';
    htmlTemplate += '<div class="user">';
    htmlTemplate += '    <span class="userimage"><img src="${image}" width="36"';
    htmlTemplate += '            height="36" /></span>';
    htmlTemplate += '    <span class="username">${name}</span>';
    htmlTemplate += '    <span class="state"><span class="area">${area}</span></span>';
    htmlTemplate += '</div>';

    for (let i = 0; i < userList.length; i++) {
        const currentUserData = userList[i];
        replaceHTMLTemplate = htmlTemplate;
        replaceHTMLTemplate = replaceHTMLTemplate.replace('${name}', currentUserData.name).replace('${image}', currentUserData.image).replace('${area}', currentUserData.area);
        userListDOM.insertAdjacentHTML('beforeend', replaceHTMLTemplate);
    }

    addEventWhenClickedUserDom();
}

function addEventWhenClickedUserDom() {
    var userListDOM = document.querySelectorAll('.user');
    for (var i = 0; i < userListDOM.length; i++) {
        var currentUserDOM = userListDOM[i];
        currentUserDOM.addEventListener('click', function () {
            var userName = event.target.textContent;
            document.getElementById('searchtext').value = userName;
            window.userfilter(userName);
        }, false);

        // map.flyTo({ center: e.features[0].properties.coordinates });
        // map.zoomTo(19, {duration: 1000});
    }
}

function init() {
    addUserList();
}

init();