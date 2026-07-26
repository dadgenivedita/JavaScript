for (let i = 1; i <= 4; i++) {
        let alphabet = "";

            for (let j = 1; j <= 4 - i; j++) {
                    alphabet += " ";
                        }

                            for (let k = 1; k <= i; k++) {
                                    alphabet += String.fromCharCode(64 + k);
                                        }

                                            console.log(alphabet);
                                            }
