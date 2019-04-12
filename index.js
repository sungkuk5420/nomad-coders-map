import spotImage from '/images/spot_black.png';
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuZ2t1a2tpbSIsImEiOiJjamR3ZTM1OTUwNXY0MnFtb2E0OG04c2lpIn0.nNFmA7VqzxH3lTST9fiK4g';

var map = new mapboxgl.Map({
    container: 'map',
    //   style: 'mapbox://styles/mapbox/streets-v8',
    //   style: 'mapbox://styles/mapbox/satellite-v9',
    //   style: 'mapbox://styles/mapbox/outdoors-v10',
    //   style: 'mapbox://styles/mapbox/light-v9',
    //   style: 'mapbox://styles/mapbox/dark-v9',
    //   style: 'mapbox://styles/mapbox/satellite-streets-v10',
    style: 'mapbox://styles/mapbox/navigation-preview-day-v2',
    //   style: 'mapbox://styles/mapbox/navigation-preview-night-v2',
    //   style: 'mapbox://styles/mapbox/navigation-guidance-day-v2',
    //   style: 'mapbox://styles/mapbox/navigation-guidance-night-v2',
    // center: [139.691298,35.6691074],
    center: [55.345276, 20.681379],
    zoom: 1.5
    // zoom: 7
});


map.on('mousemove', function (e) {
    // console.log(JSON.stringify(e.point));
    // console.log(JSON.stringify(e.lngLat));
});


window.features = [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [135.4776404, 34.6783987] // Japan Osaka
        },
        "properties": {
            "museum_count": 1,
            "name": 'Japan Osaka'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [139.75298, 35.7091074] // Japan Tokyo
        },
        "properties": {
            "museum_count": 8,
            "name": 'Japan Tokyo'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-77.0846155, 38.8935755] // USA east
        },
        "properties": {
            "museum_count": 4,
            "name": 'USA east'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-119.63646607811285, 37.62166841191262] // USA west
        },
        "properties": {
            "museum_count": 2,
            "name": 'USA west'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-104.6537497, 37.2582904] // USA
        },
        "properties": {
            "museum_count": 6,
            "name": 'USA ect'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [145.5768603, -16.8804789] // AUSTRAILIA Cairns
        },
        "properties": {
            "museum_count": 1,
            "name": 'AUSTRAILIA Cairns'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [150.6517949, -33.8479271] // AUSTRAILIA Sydney
        },
        "properties": {
            "museum_count": 1,
            "name": 'AUSTRAILIA Sydney'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [171.65902071988393, -43.339630362187066] // NEW ZEALAND
        },
        "properties": {
            "museum_count": 1,
            "name": 'NEW ZEALAND'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-73.8703841, 45.5579564] // CANADA MONTREAL
        },
        "properties": {
            "museum_count": 1,
            "name": 'CANADA MONTREAL'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-114.2142365, 51.0130333] // CANADA CALGARY
        },
        "properties": {
            "museum_count": 1,
            "name": 'CANADA CALGARY'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-102.9887805, 57.0882106] // CANADA
        },
        "properties": {
            "museum_count": 3,
            "name": 'CANADA'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-79.4578006, 43.6430078] // CANADA TORONTO
        },
        "properties": {
            "museum_count": 1,
            "name": 'CANADA TORONTO'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [26.479994411132992, 63.30047989554316] // EUROPE FINLAND
        },
        "properties": {
            "museum_count": 1,
            "name": 'EUROPE FINLAND'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [10.364291820486585, 51.84189746515267] // EUROPE GERMANY
        },
        "properties": {
            "museum_count": 2,
            "name": 'EUROPE GERMANY'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2.380981070993272, 48.760181558556326] // EUROPE FRANCE
        },
        "properties": {
            "museum_count": 1,
            "name": 'EUROPE FRANCE'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [30.6894055, 39.0015493] // EUROPE TURKEY
        },
        "properties": {
            "museum_count": 1,
            "name": 'EUROPE TURKEY'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [18.3839918, 47.1556942] // EUROPE HUNGARY
        },
        "properties": {
            "museum_count": 1,
            "name": 'EUROPE HUNGARY'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [22.2384469, 38.1245117] // EUROPE GREECE
        },
        "properties": {
            "museum_count": 1,
            "name": 'EUROPE GREECE'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [123.13219338267453, 10.109205250718531] // PHILLIPINES
        },
        "properties": {
            "museum_count": 2,
            "name": 'PHILLIPINES'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [102.24431108128505, 15.708253001501035] // THAILAND
        },
        "properties": {
            "museum_count": 2,
            "name": 'THAILAND'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [78.42420521312602, 23.562988640162445] // INDIA
        },
        "properties": {
            "museum_count": 1,
            "name": 'INDIA'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [101.9916116369136, 5.386435151993808] // MALAYSIA
        },
        "properties": {
            "museum_count": 1,
            "name": 'MALAYSIA'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-102.41966036947927, 24.99650323762758] // AMERICA MEXICO
        },
        "properties": {
            "museum_count": 1,
            "name": 'AMERICA MEXICO'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.2147489, 5.5912077] // AFRICA GHANA (Acra)
        },
        "properties": {
            "museum_count": 1,
            "name": 'AFRICA GHANA (Acra)'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [-6.017481373549742, 32.97832278716733] // AFRICA MOROCCO
        },
        "properties": {
            "museum_count": 1,
            "name": 'AFRICA MOROCCO'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [40.5813355, 24.0133287] // SAUDI ARABIA
        },
        "properties": {
            "museum_count": 1,
            "name": 'SAUDI ARABIA'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [116.1172816, 39.9385466] // China Beijing
        },
        "properties": {
            "museum_count": 1,
            "name": 'China Beijing'
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [22.2384469, 38.1245117] // EUROPE GREECE
        },
        "properties": {
            "museum_count": 1,
            "name": 'EUROPE GREECE'
        }
    }
];
map.on('load', function () {
    map.loadImage(spotImage, function (error, image) {
        // map.loadImage('https://cdn1.iconfinder.com/data/icons/clean-simple/75/iconlocation-12-512.png', function (error, image) {
        //   map.loadImage('https://cdn4.iconfinder.com/data/icons/superuser-web-kit/512/674020-point-of-interest_interest_point_venue_spot_place_location_site-512.png', function(error, image) {
        if (error) throw error;
        map.addImage('cat', image);
        map.addSource('clusters', {
            type: "geojson",
            data: {
                "type": "FeatureCollection",
                "features": window.features
            }
        });

        map.addLayer({
            "id": "clusters-label",
            "type": "symbol",
            "source": "clusters",
            "layout": {
                "text-field": "{museum_count}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
                "text-size": 16,
                "icon-image": "cat",
                "icon-size": 0.8
            }
        });
    });
});

map.on('click', 'clusters-label', function (e) {
    console.log(e);
    document.getElementById('searchtext').value = e.features[0].properties.name;
    window.userfilter(e.features[0].properties.name);
    map.flyTo({
        center: e.features[0].properties.coordinates
    });
    // map.zoomTo(19, {duration: 1000});
});

var timer;
window.userfilter = (keyword, cb) => {
    window.keyword = keyword.toUpperCase();
    console.log(keyword);
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        var users = document.querySelectorAll('.user');
        console.log(users);
        var usersData = [];
        var firstBL = false;
        if (document.querySelector('.first-row-div')) {
            document.querySelector('.first-row-div').classList.remove('first-row-div');
        }
        for (let i = 0; i < users.length; i++) {
            var element = users[i];
            var userName = element.querySelector('.username').textContent.toUpperCase();
            var area = element.querySelector('.area.tooltiptext').textContent.toUpperCase();
            var keyword = window.keyword;
            if ((userName.indexOf(keyword) !== -1) ||
                (area.indexOf(keyword) !== -1)) {
                element.style.display = 'table';
                if (!firstBL) {
                    console.log('first dom is ', userName);
                    element.classList.add('first-row-div');
                    firstBL = true;
                }
                usersData.push({
                    name: userName,
                    area
                });
            } else {
                element.style.display = 'none';
            }
        }
        if (cb) {
            cb(usersData);
        }
    }, 500);

};

window.makerReLoad = (usersData) => {
    function onlyUnique(value, index, self) {
        value = value.toUpperCase();
        return self.indexOf(value) === index;
    }

    // usage example:
    // var uniqueUsersData = usersData.map((user) => user.area).filter(onlyUnique);
    // var usersAreas = uniqueUsersData;
    var usersAreas = usersData[0].area.split(',');
    map.removeLayer('clusters-label');
    var newFeatures = window.features.filter(function (currentArea) {
        return usersAreas.includes(currentArea.properties.name.toString().toUpperCase());
    });
    map.getSource('clusters').setData({
        "type": "FeatureCollection",
        "features": newFeatures
    });
    map.addLayer({
        "id": "clusters-label",
        "type": "symbol",
        "source": "clusters",
        "layout": {
            "text-field": "{museum_count}",
            "text-font": [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Bold"
            ],
            "icon-allow-overlap": true,
            "icon-ignore-placement": true,
            "text-size": 16,
            "icon-image": "cat",
            "icon-size": 0.08
        }
    });
};