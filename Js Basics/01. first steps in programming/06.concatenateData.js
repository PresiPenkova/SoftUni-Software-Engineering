function concatenateData(input) {
    const firstName = input[0];
    const lastName = input[1];
    const age = Number(input[2]);
    const town = input[3];

    const result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
    console.log(result);
}

