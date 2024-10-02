//q1.  given an array of marks of students. fliter out od the marks of students that scored 90+
        // let marks = [97, 64,32,49, 99,96,86];

        //     let toppers = marks.filter((val)=>{
        //           return val > 90;
        //     })
        
        // console.log(toppers);
        
        //q2. take a number n as input from user. create an array of numbers from 1 to n.
        // a. use reduce method to calculate sum of all numbers in the array.
        //  use reduces method to calculate product of all numbers in the array.

        let n = prompt("enter a number: ");
        let arr = [];

        for(let i = 1; i<=n; i++){
            arr[i - 1] = i; //1(0), 2(1)
        }
        console.log(arr);

        // a. use reduce method to calculate sum of all numbers in the array.
        let sum = arr.reduce((res, curr)=>{
            return res + curr;

        })
        console.log('sum = ', sum);
        //b.  use reduces method to calculate product of all numbers in the array.

        let factorial = arr.reduce((res, curr)=>{
            return res + curr;

        });
        console.log('factorial =', factorial);