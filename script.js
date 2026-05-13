var rannum = Math.ceil(Math.random() * 100);
var gusnum = parseInt(prompt("enter number :"));
var i =0;
while (gusnum!==rannumnum) {
    i++;
    if(gusnum<rannumnum){
        gusnum = parseInt(prompt("enter higher number :"));
    }
    else if(gusnum>rannum){
        gusnum = parseInt(prompt("enter less number :"));
    }
}
i++;
console.log('your num is correct ',rannum);
console.log('guessing count is ',i);
console.log('score is ',100-i);