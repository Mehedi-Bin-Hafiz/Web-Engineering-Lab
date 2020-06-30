function demo(){
    var result = document.getElementById('res');
    var deteTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var watch = hours+ ' : ' + minutes+" : "+seconds;
    result.innerHTML = watch ;


}

setInterval(demo(),1000); // akvar run kore themejabe na
