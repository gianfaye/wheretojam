studioService = (function () {

    var baseURL = "";

    // The public API
    return {
        findById: function(id) {
            return $.ajax(baseURL + "/studios/" + id);
        },
        findByName: function(searchKey) {
            return $.ajax({url: baseURL + "/studios", data: {name: searchKey}});
        }
    };

}());