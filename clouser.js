for(i=1; i<=5; i++){
    setTimeout(printNumber,i*1000)
    function printNumber(){
        console.log(i);
    }
}
