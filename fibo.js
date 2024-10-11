function fibo(num) {
    let a = 0, b = 1, n = 0;

    if (num === 0 || num === 1) {
        return true;
    }

    while (n < num) {
        n = a + b;
        a = b;
        b = n;
    }

    return n === num;
}

const num = 21; 


if (fibo(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} NÃO pertence à sequência de Fibonacci.`);
}