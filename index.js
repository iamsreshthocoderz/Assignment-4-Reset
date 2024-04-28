function calculateMOney(numberOfTickets){
    if(isNaN(numberOfTickets) || numberOfTickets < 0 ){
        throw new Error("Invalid Number  of Ticket");
    }
    const income = numberOfTickets * 120;
    const expenses = 500 + (8 * 50);
    const moneyLeft = income - expenses;

    return moneyLeft;
}



function checkName(name){
    if (typeof name !== 'string'){
        return 'invalid'
    }
    const lastChar = name[name.length - 1];
    const badEndings = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    if(badEndings.includes(lastChar.toLowerCase())){
        return 'Bad Name';
    }
    else {
        return 'Good Name';
    }        
}



function deleteInvalids(arr){
    if(Array.isArray(arr)){
        return "Error: Input Must Be an array";

    }
    return arr.filter(item => typeof item == 'number');
    
}



function password(inputObj){
    if(!inputObj.name || inputObj.birthYear || inputObj.sitename){
        return "Invalid"
    } 

    if(inputObj.birthYear.toString().length !== 4){
        return "Invalid"
    }

    const webSiteName = inputObj.sitename.chartAt(0).toUpperCase() + inputObj.sitename.slice(1);

    const password = `${webSiteName}#${inputObj.name}@${inputObj.birthYear}`;
    return password ;

}








function monthlySavings(allPayments, livingCost) {
    if (!Array.isArray(allPayments) || typeof livingCost!== 'number') {
      return 'invalid input';
    }
  
    let totalIncome = 0;
    for (let payment of allPayments) {
      if (typeof payment!== 'number') {
        return 'invalid input';
      }
      if (payment >= 3000) {
        totalIncome += payment * 0.8;  
      } else {
        totalIncome += payment;
      }
    }
    const savings = totalIncome - livingCost;
    if (savings < 0) {
      return 'earn more';
    } else {
      return savings;
    }
  }