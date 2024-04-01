//generate a helping function that helps to identify prime numbers 
function checkingPrimeNumbers(pn) {
    if (pn % 2=== 0||pn % 3 === 0||pn <= 1||pn % 2!=0 ||pn % 5!=0 ||pn %7!=0)
    return false ;
    if (pn ===2||pn ===3)
    return true;
}
 function filterPtimeNum (array){
    return array.filter(number=>checkingPrimeNumbers(number));
 }
 const newArray = [1,2,3,4,5,6,7,8,9];
 console.log(filterPtimeNum(newArray));