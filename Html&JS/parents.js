function validation(){
    var name = document.reg.name.value;
    var phone = document.reg.phone.value;
    var mNID = document.reg.mNID.value;
   
    if(name == "") {
        alert('User name is missing');
        return;
    }

    if(phone == "") {
        alert('phone number is missing');
        return;
    }

    if (isNaN(mNID)){
        alert('NID code must be number');
        return;
    }

    if(reg.profe.selectedIndex==0){
        alert('Please select atleast one profession')
        reg.pro.focus();
        return false;
    }


    if(reg.country.selectedIndex==0){
        alert('Please select atleast one country')
        reg.country.focus();
        return false;
    }
   

}