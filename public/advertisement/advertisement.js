//Ajax call for getting the username
$.get("/myAdvertisements").done(data => { 
    $("#advertisements").text(data.response);
});