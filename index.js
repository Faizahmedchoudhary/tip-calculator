console.log("tip calculator");

tipcalculate =  document.getElementById('tipcalculate');

tipcalculate.addEventListener('click' , 


tipcalculator = () => {

    billamount = document.getElementById('billamount').value;
    service  = document.getElementById('service').value;
    people  = document.getElementById('people').value;



   

//    calculate total tip
    var total = (billamount * service) / 1 ;
    console.log(total);

    total = Math.round(total)
    // total = total.toFixed(2)

    tipvalue = document.getElementById('tip-value').innerHTML = total;

    var finalamt = Number(billamount) + Number(total) ;
    totalvalue = document.getElementById('total-value').innerHTML = finalamt ;
   

    // for each person tip

    eachpeople = tipvalue / people ;
    console.log(eachpeople)

    tipeach = document.getElementById('tipeach').innerHTML =  "Tip per person = " + eachpeople ;
}


)