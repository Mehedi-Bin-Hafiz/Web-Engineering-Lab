   function validation(){
    var uid = document.reg.Uid.value;
    var pass = document.reg.pass.value;
    var uname = document.reg.Name.value;

    var zip = document.reg.Zip.value;
    checklang1=document.getElementById('checkme1');
    checklang2= document.getElementById('checkme2');
    gender1=document.getElementById('radio1');
    gender2= document.getElementById('radio2');


    if(uid.length<5 || uid.length>12){
        alert('User id must be 5 to 12 character');
        return;
    }


    if(pass.length<7 || pass.length>12){
        alert('password must be 7 to 12 character');
        return;
    }

    var str = uname.slice(0,1);
    if(uname.slice(0,1)=="_" || uname.slice(0,1)=="@" || str.match(/[0-9]/g)!= null ){
        alert('Username should not star with _,@and Number');
        return;
    }

    if (isNaN(zip)){
        alert('zip code must be number');
        return;
    }

    var valid =false;

    if(checklang1.checked){
        valid = true;
    }

    else if( checklang2.checked){
        valid = true;
    }

    if(valid == false){
        alert(' Language is Required')
        return false;
    }

    
    var valid2= false;
    if(gender1.checked){
        valid2 = true;
    }

    else if(gender2.checked){
        valid2 = true;
    }

    if(valid2 == false){
        alert('Sex is Required')
        return false;
    }

    if(reg.Country.selectedIndex==0){
        alert('Please select atleast one country')
        reg.Country.focus();
        return false;
    }

    

    return true;


}