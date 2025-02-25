function addSum(a, b) {
    try{
        if(a === 0 || b === 0){
            throw new Error("Number is 0");
        }
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Number is not a number");
        }

        if(a < 0 || b < 0){
            throw new Error("Number is negative");
        }

        return a + b;
    } catch (error) {
        console.log(error);
    }
}

console.log(addSum(1, 2));

