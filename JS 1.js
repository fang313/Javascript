function getFib(n) {
    if (n < 2){
        return n;
    }
    return getFib(n-1) + getFib(n-2);
}

console.log(getFib(0))