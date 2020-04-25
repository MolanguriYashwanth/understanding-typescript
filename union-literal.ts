//union types
type Combilnable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function combine(n1: Combilnable, n2: Combilnable, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === "as-number") {
        result = +n1 + +n2;

    } else {
        result = n1.toString() + n2.toString();
    }
    // if(resultConversion==='as-number'){
    //     return +result;
    // }else{
    //     return result.toString();
    // }
    return result

}

const combinedAges = combine(10, 20, 'as-number');
const combinedAgesNums = combine("sai", "yashwanth", 'as-number');
const combinedNames = combine("sai", "yashwanth", 'as-text');
console.log(combinedAges);
console.log(combinedNames);