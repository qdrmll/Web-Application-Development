function createCounter(n) {
    let currentValue = n;
    
    function counter() {
        const result = currentValue;
        currentValue++;
        return result;
    }

    return counter;
}

const n = 10;
const counter = createCounter(n);
const output = [counter(), counter(), counter()];
console.log(output); 
