let variable = NaN;
const typeOfVariable=typeof variable; 
if (isNaN(variable)==false){
    switch (typeOfVariable){
        case 'number':
            console.log('variable - число');
            break;
        case 'string':
            console.log('variable - строка');
            break;
        case 'boolean':
            console.log('variable - логическая пепременная');
            break;
    }
}else{
        console.log('Тип variable не определён');
}