A=[4,4,4,4,4,4];
let a;
for (let i=0;i<A.length-1;i++){
    if (A[i]==A[i+1]){
        a = true
    } else{
        a = false
        break 
    }
};
console.log(a)