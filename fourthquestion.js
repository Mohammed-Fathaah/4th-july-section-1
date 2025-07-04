function checkproductofthreenumbers(num1,num2,num3){
const sum=(num1*num2*num3);
return sum>100 ? sum : "Too small";
}
console.log(checkproductofthreenumbers(14,2,5))
console.log(checkproductofthreenumbers(7,4,3))