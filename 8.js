let myMap=new Map([
    ['X','Y'],
    [1,'first'],
    [2,'second']
]);
for (let keyProp of myMap){
    console.log(`Ключ -> ${keyProp[0]}, Значение -> ${keyProp[1]}`);
};