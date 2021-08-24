const express = require('express');
const routes = express.Router();
// const https = require('https');
const axios = require('axios');

// let recylceLength = 0;
// let recycleIndex = 0;

// routes.use(books);

routes.get("/latLon/:country/:postalCode", (req, res) => {
    let latLon = {
        'latitude': "",
        'longitude': ""
    };
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Content-Type", "application/json");
    axios.get('https://api.earth911.com/earth911.getPostalData?api_key=eb3751a3e2f435e6&country=' + req.params.country + '&postal_code=' + req.params.postalCode)
        .then(response => {
            latLon.latitude = response.data.result.latitude;
            latLon.longitude = response.data.result.longitude;
            res.status(200).send(latLon);
        })
        .catch(error => {
            console.log(error);
        });
    // res.status(200).send(latLon);
    // res.end();
});

routes.get("/location/:latitude/:longitude", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    axios.get('https://api.earth911.com/earth911.searchLocations?api_key=eb3751a3e2f435e6&max_distance=25&latitude=' + req.params.latitude + '&longitude=' + req.params.longitude)
        .then(response => {
            // recycleLength = response.data.result.length;
            // if (recycleIndex >= recycleLength) {
            //     recycleIndex = 0;
            // }
            res.status(200).send(response.data.result);
            // recycleIndex++;
        })
        .catch(error => {
            console.log(error);
        });
});

routes.get("/locationInfo/:locationId", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    axios.get('https://api.earth911.com/earth911.getLocationDetails?api_key=eb3751a3e2f435e6&location_id=' + req.params.locationId)
        .then(response => {
            // locationId = req.params.locationId;
            // console.log(response.data.result);
            const responseArray = Object.values(response.data.result);
            // console.log(responseArray);
            res.status(200).send(responseArray);
        })
        .catch(error => {
            console.log("error");
        });
});

//GET request for 15 Reduce articles 
routes.get("/reduce", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    axios.get('https://api.earth911.com/earth911.searchArticles?api_key=eb3751a3e2f435e6&max_results=15&query=reduce&sort=updated').then(response => {
        res.status(200).send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

//GET article details from the Reduce articles
routes.get("/reduce/details/:decodeURL", (req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    URL2 = encodeURIComponent(req.params.decodeURL);
    console.log(URL2);
    axios.get('https://api.earth911.com/earth911.getArticleDetails?api_key=eb3751a3e2f435e6&url=' + URL2)
    
    //http://earth911.com/news/2012/10/03/5-signs-you-might-be-a-recycling-hoarder/')
    .then(response => {

        res.status(200).send(response.data.result);
    })
    .catch(error => {
        console.log(error);
    });
});

module.exports = routes; 