for (let i = 1; i <= 4; i++){
    let star = "";

    for (let j = 1; j <= 4 - i ; j++){
        star += " ";
    }

    for(let k = 1; k <=(2 * i - 1); k++){
        star += "*";
    }

    console.log(star);
}   