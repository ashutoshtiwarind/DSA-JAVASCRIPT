/*
https://oj.masaischool.com/contest/1746/problem/3

Description

You are given an arrayAofNintegers.

Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.


Input
Input Format :

First line contains N, size of array A.

Second line contains N space separated integers which are elements of A

Constraints :

1 <= N <= 1000


Output
Output one number, total number of pairs pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.


Sample Input 1 

6
1 2 3 5 7 12
Sample Output 1

45
Hint

Pairs whose i<j and j-i is prime are :-

1. 1 3 [i=0, j=2] , Difference is 2.

2. 1 5[i=0, j=3] ,Difference is 4.

3. 1 12[i=0, j=5] ,Difference is 11

4. 2 5[i=1, j=3],Difference is  3.

5. 2 7[i=1, j=4],Difference is 5.

6. 3 7 [i=2, j=4],Difference is 4.

7. 3 12[i=2, j=5],Difference is 9

8. 5 12 [i=3, j=5],Difference is 7

Sum of all differences is2+4+11+3+5+4+9+7 = 45.
*/


function sumOfSpecialPairs(n, ar){
    var sum = 0;
    for(var i=0; i<ar.length; i++) {
        for(var j=i+2; j<ar.length; j++) {
            if(isPrime(j-i)) {
                sum += absolute(ar[i],ar[j]);
            }
        }
    }
    console.log(sum);
}
function isPrime(num) {
    for(var i=2; i<num; i++) {
        if(num%i===0) {
            return false;
        }
    }
    return true;
}
function absolute(a, b) {
    if((a-b)<0) return -(a-b);
    return a-b;
}
