let numb=Number(prompt('Введите число-->'));
if ((typeof numb)==='number'){
    if (numb%2==0){
        console.log('Число чётное!');
    }else if (numb%2==1){
        console.log('Число нечётное');
    }else {
        console.log('Упс, кажется, вы ошиблись');
    }
}