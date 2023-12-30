
/**
 * 
 */
export class Recursion {

    factorialItr(n){

        let response = 1;

        for(let i = n; i > 0; i--){
            response = response*i;
        }

        return response;
    }

    factorialRec(n){

        if(n === 1) return 1;

        return n*this.factorialRec(n - 1);
    }

    /**
     * F(n) = F(n - 1) + F(n - 2)
     * 
     * F(0) = 0 and 
     * F(1) = 1
     * F(2) = 1
     * F(3) = F(2) + F(1) = 1 + 0 = 2
     * F(4) = F(3) + F(2) = 1 + 1 = 3
     * F(5) = F(4) + F(3) = 2 + 1 = 5
     * 
     * 
     * 0 1 1 2 3 5 8 13 21 
     */

    fibonacciItr(n){

        if(n <= 0) return 0;
        if(n === 1) return 1;

        let a = 0, b = 1, c = 0;

        for(let i = 2; i <= n; i++){
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    fibonacciRec(n){
        if(n <= 0) return 0;
        if(n === 1) return 1;

        return this.fibonacciRec(n - 1) + this.fibonacciRec(n - 2);
    } 

    /**
     * f(5) = 
     * f(4) + f(3) -> 
     * f(3) + f(2) + f(2) + f(1) -> 
     * f(2) + f(1) + f(0) + f(1) + f(0) + f(1) + 1
     * f(1) + f(0) + 1 + 0 + 1 + 0 + 1 + 1 
     * = 1 + 0 + 4 
     * = 5 
     */


    /**
     * 0 1 1 2 3 5 8 
     */

}