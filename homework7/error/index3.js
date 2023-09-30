function reverseString(s) {
    try {
        if (typeof s !== "string") {
            throw new Error("s.split is not function");
        }

        s = s.split("").reverse().join("");
        console.log(s);
    } catch (err) {
        console.log(err.message);
    }
}

reverseString("hello");
reverseString(8764);