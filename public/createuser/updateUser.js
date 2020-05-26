
$.get("/getUser").done(data => {    
    $("#firstName").val(data.response.first_name);
    $("#lastName").val(data.response.last_name);

    $("#email").val(data.response.email);
    $("#phoneNumber").val(data.response.phone_number);
    $("#address").val(data.response.address);
    $("#zipCode").val(data.response.zip_code);
    $("#city").val(data.response.city);

    $("#username").val(data.response.username);
    



    });

   