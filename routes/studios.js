var studios = [
   {
      "id":0,
      "studioName": "Loudhouse Band Rehearsal Studio",
      "address":"40, T. Gener, corner K-1st, Kamuning, Quezon City, 1103 Metro Manila",
      "city":"Quezon City",
      "latitude":"14.628029",
      "longitude":"121.036204",
      "mobile":"09182910028",
      "landline":"4158776",
      "email":"sample@studio.com",
      "rehearsal":true,
      "recording":false,
      "schedule":"Weekdays, 10am to 8pm",
      "status":"closed",
      "website":"",
      "facebook":"",
      "youtube":"",
      "instagram":"",
      "twitter":"",
      "avatar":"sample-img.jpg"
   },
   {
      "id":1,
      "studioName": "Blue Light Recording And Rehearsal Studios",
      "address":"2nd Floor FORAB Building, 121 Kamuning Road, Diliman, Quezon City, 1103 Metro Manila",
      "city":"Quezon City",
      "latitude":"14.628029",
      "longitude":"121.036204",
      "mobile":"09182910028",
      "landline":"4158776",
      "email":"sample@studio.com",
      "rehearsal":true,
      "recording":false,
      "schedule":"Weekdays, 10am to 8pm",
      "status":"closed",
      "website":"",
      "facebook":"",
      "youtube":"",
      "instagram":"",
      "twitter":"",
      "avatar":"sample-img.jpg"
   },
   {
      "id":2,
      "studioName": "Icon Music Studios Philippines",
      "address":"165 Tomas Morato, L/G Thompson Square Building, Quezon City",
      "city":"Quezon City",
      "latitude":"14.628029",
      "longitude":"121.036204",
      "mobile":"09182910028",
      "landline":"4158776",
      "email":"sample@studio.com",
      "rehearsal":true,
      "recording":false,
      "schedule":"Weekdays, 10am to 8pm",
      "status":"closed",
      "website":"",
      "facebook":"",
      "youtube":"",
      "instagram":"",
      "twitter":"",
      "avatar":"sample-img.jpg"
   },
   {
      "id":3,
      "studioName": "Tower of Doom Records",
      "address":"4th Floor Armon Bldg., Corner Anonas Rd. and Kamias Rd., Quezon City, 1211 Metro Manila",
      "city":"Quezon City",
      "latitude":"14.628029",
      "longitude":"121.036204",
      "mobile":"09182910028",
      "landline":"4158776",
      "email":"sample@studio.com",
      "rehearsal":true,
      "recording":false,
      "schedule":"Weekdays, 10am to 8pm",
      "status":"closed",
      "website":"",
      "facebook":"",
      "youtube":"",
      "instagram":"",
      "twitter":"",
      "avatar":"sample-img.jpg"
   },
   {
      "id":4,
      "studioName": "On-Air Studio",
      "address":"2/F Stall 18 Cubao Expo, Gen. Romulo Avenue, Cubao, Quezon City, Metro Manila",
      "city":"Quezon City",
      "latitude":"14.628029",
      "longitude":"121.036204",
      "mobile":"0946 884 8300",
      "landline":"4158776",
      "email":"sample@studio.com",
      "rehearsal":true,
      "recording":false,
      "schedule":"Weekdays, 3pm to 2am",
      "status":"closed",
      "website":"",
      "facebook":"",
      "youtube":"",
      "instagram":"",
      "twitter":"",
      "avatar":"sample-img.jpg"
   },
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(studios.filter(function(studio) {
            return (studio.studioName + ' ' + studio.address).toLowerCase().indexOf(name.toLowerCase()) > -1;
        }));
    } 
    else {
        res.send(studios);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(studios[id]);
};