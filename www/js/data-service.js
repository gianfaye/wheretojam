studioService = (function () {

    var baseURL = "http://localhost:5000";

    // The public API
    return {
        findByUsername: function(username) {
            return $.ajax(baseURL + "/studios/" + username);
        },
        findById: function(id) {
            return $.ajax(baseURL + "/studios/" + id);
        },
        findByName: function(searchKey) {
            console.log(searchKey);
            console.log({url: baseURL + "/studios", data: {name: searchKey}});
            return $.ajax({url: baseURL + "/studios", data: {name: searchKey}});
        }
    };

}());