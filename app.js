document.getElementById('form-group').addEventListener('submit',calculateResults);

function calculateResults(e){
    

    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const years= document.getElementById('years');
    const monthly_payment=document.getElementById('monthly-payment');
    const total_payment=document.getElementById('total-payment');
    const total_interest=document.getElementById('total-interest');

    const principal= parseFloat(amount.value);
    const calculatedInterest=parseFloat(interest.value)/100/12;
    const calucaltedPayments=parseFloat(years.value)*12;

    const x= Math.pow(1+calculatedInterest,calucaltedPayments);
    const monthly=(principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthly_payment.value=monthly.toFixed(2);
        total_payment.value=(monthly * calucaltedPayments).toFixed(2);
        total_interest.value=((monthly*calucaltedPayments)-principal).toFixed(2);
    }
    else{
        showError("Please Check your inputs");

    }
    e.preventDefault();
}

function  showError(error){
    const errorDiv=document.createElement('div');

    const card=document.querySelector('.card');
    const heading=document.querySelector('.label');

    errorDiv.className ='alert';

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv,heading);

    setTimeout(clearError,2000);
}
function clearError(){
    document.querySelector('.alert').remove();
}