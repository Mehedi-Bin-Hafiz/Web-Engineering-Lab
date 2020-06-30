var imgElement = document.getElementById('Image1');

imgElement.onclick = function(){
    var mainImage = document.getElementById('mainImage');
    var imgaesrcAttribute = imgElement.getAttribute('src')
    mainImage.setAttribute('src',imgaesrcAttribute)
}