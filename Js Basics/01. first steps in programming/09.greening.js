function greening(input) {
    const finalPrice = Number(input[0]) * 7.61;
    const discount = finalPrice * (18 / 100);

    console.log(`The final price is: ${finalPrice - discount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

