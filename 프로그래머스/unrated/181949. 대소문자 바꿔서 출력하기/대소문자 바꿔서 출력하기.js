const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const answer = str.split("").map((el)=>{
        if(isUpper(el)){
            return el.toLowerCase();
        }else{
            return el.toUpperCase();
        }
    }).join("");
    
    console.log(answer);
});
    
function isUpper(strValue) {
  let firstStrValue = strValue.charAt(0);
    
  if(firstStrValue === firstStrValue.toUpperCase()) {
    return true;
  }
  return false;
}

function isLower(strValue) {
  let firstStrValue = strValue.charAt(0);
    
  if(firstStrValue === firstStrValue.toLowerCase()) {
    return true;
  }
  return false;
}
