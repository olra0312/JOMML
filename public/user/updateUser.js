//Ajax call for getting the username
$.get("/updateUser").done(data => { 
    $("#firstName").text(data.response.firstName);
    // $("#firstName").text(data.response);
    // $("#firstName").text(data.response);
    // $("#firstName").text(data.response);
    // $("#firstName").text(data.response);
    // $("#firstName").text(data.response);

});