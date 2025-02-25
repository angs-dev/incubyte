function addSum(a) {
    try {
        if (a === "") {
            return 0;
        }

        if (typeof a !== "string") {
            throw new Error("Input must be a string");
        }

        const numbers = a.split(',').map(num => {
            const parsed = parseFloat(num.trim());
            if (isNaN(parsed)) {
                throw new Error("Invalid number format");
            }
            if (parsed === 0) {
                throw new Error("Number cannot be 0");
            }
            if (parsed < 0) {
                throw new Error("Number cannot be negative");
            }
            return parsed;
        });

        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sum;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

console.log(addSum(1, 2));

