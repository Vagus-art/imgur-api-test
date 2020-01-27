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
const readImage = (file) =>{
  const img = document.createElement("img");
  const reader = new FileReader();
  reader.onloadend = function() {
          img.src = reader.result;
  }
  reader.readAsDataURL(file);
  return img;
}

const onChange = (event) => {

    const file = event.srcElement.files[0];
    const img = readImage(file);
    const image = document.getElementById("image");
    image.parentNode.replaceChild(img,image);
}

const submitFile = async (event) => {
    event.preventDefault();
    const file = event.target.elements.myfile.files[0];
    console.log(file);
    const response = await fetch('https://api.imgur.com/3/image',{
      method:'post',
      headers:{
        'Authorization':'Client-ID 2d9eb78dab2f6f0'
      },
      body:file
    });
    const json = await response.json();
    const id = json.data.id;
    const responseimg = await fetch('https://api.imgur.com/3/image/'+id,{
      headers:{
        'Authorization':'Client-ID 2d9eb78dab2f6f0'
      }
    });
    const responseimgjson = await responseimg.json()
    console.log(responseimgjson.data.link);
}
