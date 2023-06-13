function solution(a, b) {
    const ab = a + "" + b;
    const ba = b + "" + a;
    
    if(+ab > +ba) return +ab;
    else if(+ab === +ba) return +ab;
    else return +ba;
}