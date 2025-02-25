function addSum(a) {
    try {
        if (!a || typeof a !== "string") return a === "" ? 0 : "Input must be a string";

        let [delimiter, numbersStr] = a.startsWith('//') ? 
            [a.substring(2, a.indexOf('\n')), a.substring(a.indexOf('\n') + 1)] : 
            [',', a];

        const numbers = numbersStr.split(new RegExp(`[${delimiter}\\n]`))
            .map(n => {
                const p = parseFloat(n.trim());
                if (isNaN(p)) throw new Error("Invalid number format");
                if (p === 0) throw new Error("Number cannot be 0");
                return p;
            });

        const negs = numbers.filter(n => n < 0);
        if (negs.length) throw new Error(`negative numbers not allowed ${negs.join(',')}`);

        return numbers.reduce((a, c) => a + c, 0);
    } catch (e) {
        console.log(e);
        return e.message;
    }
}

console.log(addSum("1,2,3,4,-5"));
