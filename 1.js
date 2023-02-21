let numb=Number(prompt('Введите число-->'));
if (typeof numb ==='number' && !isNaN(numb)){
    if (numb%2==0){
        alert('Число чётное!');
    }else if (numb%2==1){
        alert('Число нечётное');
    }
} else {
    alert('Упс, кажется, вы ошиблись');
}