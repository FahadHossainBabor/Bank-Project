document.getElementById('withdraw-btn').addEventListener('click',function(){
    //getting the new withdraw amount 
    const newWithdrawAmount = document.getElementById('withdraw-textarea').value ;
    //getting the prvs withdraw amount
    const prevWithdrawAmount = document.getElementById('withdraw-total').innerText;

    //clearing the input box
    document.getElementById('withdraw-textarea').value = '';

    //total withdraw amount;
    const totalWithdrawAmount = parseFloat(newWithdrawAmount) + parseFloat(prevWithdrawAmount);

    
    //updating the total balance;
    const totalBalance = parseFloat(document.getElementById('total-amount').innerText) - totalWithdrawAmount; 
    
    if(totalBalance < 0){
        alert('You don\'t have enough money to withdrw')
        return
    }else{
        document.getElementById('total-amount').innerText = totalBalance;
    }

    //showing it to withdraw field;
    document.getElementById('withdraw-total').innerText = totalWithdrawAmount;
})