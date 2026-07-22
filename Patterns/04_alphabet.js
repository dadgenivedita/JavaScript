for (let i = 1; i <= 4; i++){
    let alphabet = "";

    for (let j = 1; j <= i ; j++){
        alphabet += String.fromCharCode(64 + j);
    }

    console.log(alphabet);
}   