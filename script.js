function myFunction() {
    let a = 1;
    if (a/2%==0){
        document.getElementById('power').innerHTML = 'POWER BY YOU';
        a = a + 1;
    }else{
        document.getElementById('power').innerHTML = '';
    }  
}
