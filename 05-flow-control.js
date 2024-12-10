// if ~ else if ~ else
// switch ~ case 
// for, while, do while
// 모두 C계열 문법과 거의 동일

//  [연습 1-1] 2단 ~ 9단까지 구구단을 출력해 봅시다(for문 구구단)
    // for(let i = 2 ; i < 10 ; i++ ) {        
    //     console.log(i +"단");        
    //     for(let j = 1 ; j < 10 ; j++) {            
    //         console.log(i + "*" + j + "=" + j*i );            
    //     }                    
    // }
    
    
//  [연습 1-2] 2단 ~ 9단까지 구구단을 출력해 봅시다(while 문 구구단)
    // let dan = 2;    //  반복 변수 초기화
    // while(dan < 10) {
    //     console.log(dan + "단");
    //     let num = 1;
    //     while ( num < 10) {
    //         console.log(dan, "*" , num, "=", dan * num);
    //         // 증감을 해주지 않으면 영원히 1만 나옴    
    //         num ++
    //     }
    //     // 증감을 해주지 않으면 영원히 2단만 나옴
    //     dan++;
    // }



//  [연습 2-1] 아래와 같이 출력하는 프로그램을 만들어 봅시다(for문 별그리기)
// *****
// ****
// ***
// **
// *

    // console.log("==================== for 문 역삼각형");
    // for(let row = 5 ; row > 0 ; row-- ) {        
    //         let stars = "";
    //         for (let col = 1; col <= row ; col++) {
    //             stars += "*";            
    //         }    
    //         console.log(stars);
    //     }



//  [연습 2-2] 아래와 같이 출력하는 프로그램을 만들어 봅시다(while문 별그리기)
    // console.log("==================== while 문 역삼각형");
    // let row = 5;
    // while(row > 0) {
    //     let stars = "";
    //     let col = 1;
    //     while(col <=row ) {
    //         stars += "*";
    //         col++;
    //     }
    //     console.log(stars);
    //     row--;
    // }
