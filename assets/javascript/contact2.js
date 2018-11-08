console.log('connected')

$('#contact-submit').on('click', function(){
    alert('yo')
    //get input ids and create object
    let contactData={
        name:"Clay",
        email:"claytonpabst@gmail.com",
        message:"yo"
    }
    $.post("/api/contactEmail", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
})