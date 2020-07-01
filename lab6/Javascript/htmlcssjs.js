var imgElement = document.getElementById('Image1');

imgElement.onclick = function(){
    var mainImage = document.getElementById('mainImage');
    var imgaesrcAttribute = imgElement.getAttribute('src')
    mainImage.setAttribute('src',imgaesrcAttribute)
};

var about = document.getElementById('about');
about.onclick = function (){
    document.getElementById('h1').innerHTML = ' this is aobut'
    document.getElementById('p').innerHTML = ' this is aobut'
    document.getElementById('img').setAttribute('src','img/image2.jpg' )
};