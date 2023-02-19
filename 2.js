let x = NaN;
if ((typeof x)==='number'){
    if ((x*1)==x){
        console.log('x - число');
    }else{
        console.log('Тип x не определён');
    }
} else if ((typeof x)==='string'){
    console.log('x - строка');
} else if ((typeof x)==='boolean'){
    console.log('x - логическая пепременная');
}else{
    console.log('Тип x не определён');
}