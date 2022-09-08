//function scope
function greeting(){
    let userName = 'Ana';//solo puede utilizarse dentro de la funcion
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hello ${userName}!`);
    }
}

greeting();
