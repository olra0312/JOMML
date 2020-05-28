//Ajax call for getting the username
$.get("/myAdvertisementsData").done(data => { 
    $("#advertisements").text(data.response.advertisements);
});