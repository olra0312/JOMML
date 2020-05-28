//Ajax call for getting the username
$.get("/updateUserData").done(data => { 7
    $("#firstName").val(data.response.firstName);
    $("#lastName").val(data.response.lastName);
    $("#lastName").val(data.response.lastName);
    $("#email").val(data.response.email);
    $("#phoneNumber").val(data.response.phoneNumber);
    $("#address").val(data.response.address);
    $("#zipCode").val(data.response.zipCode);
    $("#city").val(data.response.city);
    $("#username").val(data.response.username);
    $("#password").val(data.response.password);
});