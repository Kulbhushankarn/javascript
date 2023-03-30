let str = "M2u5b4a1s1h2i1r";


let res = " "
for(let i=1;i<str.length;i+=2){
    let num = +(str[i])
    for(let j=0;j<num;j++){
        res += str[i-1]
    }
}