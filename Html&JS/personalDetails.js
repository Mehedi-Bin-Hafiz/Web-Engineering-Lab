function validation(){
    var name = document.personal.name.value;
    var email = document.personal.email.value;
    var phone = document.personal.phone.value;
    var zip = document.personal.zip.value;
    var city = document.personal.city.value;

     
    if(name == "") {
        alert('User name is missing');
        return;
    }
    if(email == "") {
        alert('email is missing');
        return;
    }
    if(phone == "") {
        alert('phone number is missing');
        return;
    }
    if(zip == "") {
        alert('zip code is missing');
        return;
    }
    if(city == ''){
        alert('city is missing');
        return;
        
    }

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)==false){
        alert('invalid email')
        return;
        
    }

    if (isNaN(zip)){
        alert('zip code must be number');
        return;
    }
    if (isNaN(phone)){
        alert('zip code must be number');
        return;
    }

    if(personal.country.selectedIndex==0){
        alert('Please select atleast one country')
        Personal.country.focus();
        return false;
    }

    


    }
