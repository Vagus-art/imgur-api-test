/*$.ajax({
    url: 'https://api.imgur.com/3/image',
    type: 'POST',
    headers: {
      Authorization: auth,
      Accept: 'application/json'
    },
    data: {
      image: localStorage.dataBase64,
      type: 'base64'
    },
    success: function(result) {
      var id = result.data.id;
      window.location = 'https://imgur.com/gallery/' + id;
});*/

//this is curious, I must learn all this browser apis
const onChange = (event) => {
    var file = event.srcElement.files[0];      
    var img = document.createElement("img");
    var reader = new FileReader();
    reader.onloadend = function() {
            img.src = reader.result;
    }
    reader.readAsDataURL(file);
    document.body.appendChild(img);
}

