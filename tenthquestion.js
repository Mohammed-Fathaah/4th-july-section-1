function uppercasestring(str){
    return typeof str==='string' && str.length>0 && 
    str[0]===str[0].toUpperCase()&& str[0] !== str[0].toLowerCase();
}
console.log(uppercasestring("Fathu"));
console.log(uppercasestring("fathu"));
console.log(uppercasestring("123"))