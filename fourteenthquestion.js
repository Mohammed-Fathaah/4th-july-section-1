function seniorcitizenornot(name,age){
    return age>60 ? name+"is a senior citizen" : name + "is" + (age*7) + "in dog years";
}
console.log(seniorcitizenornot("ami",77));
console.log(seniorcitizenornot("ami",5));