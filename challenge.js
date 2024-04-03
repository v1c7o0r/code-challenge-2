//writting my first code here
function swap(str) {
    let beginningWords='';
    for ( let  i = 0;i <str.length;i++){
    if (str[i]===str[i].toUpperCase()) {
        beginningWords +=
        str[i].toLowerCase();
    } else if ( str[i]===str[i].toLowerCase()){
        beginningWords+=str[i].toUpperCase();
    }else {
        beginningWords+=str[i];
    }
}
return beginningWords; 
}  
 let inputWords= `The Quick Brown Box`
let outputWords=swap(inputWords)
console.log(outputWords);
