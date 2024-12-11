// 전개연산자
console.log("========================= 배열 전개 연산");

let arr1 = ['홍길동','장길산'];
let arr2 = ['임꺽정','전우치'];
// arr1과 arr2를 하나로 합치고자 함

let combined = [];
// 방법1. index 접근
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combined 1 : ", combined);

// 방법2. concat 메서드 사용
combined = arr1.concat(arr2);
console.log("combined 2 : ", combined);

// 방법3. 빈배열에 concat
combined = [].concat(arr1 , arr2);
console.log("combined 3 : ", combined);

// ES6 방식
combined = [...arr1 , ...arr2];
console.log("ES6 combined : ", combined);

// 배열의 전개
console.log("========================= 배열의 전개");
console.log("arr1 : ", arr1 );

// let first = arr1[0];
// let second = arr1[1];
let [first,second,third, ...others] = arr1;
console.log(first, second, third = "empty", others);

console.log("combined:", combined);
[first,second,third  = "empty", ...others] = combined;
console.log(first, second, third , others);

// 객체 전개 연산
console.log("========================= 객체 전개 연산");
let obj1 = {one:1, two:2, other:0};
let obj2 = {three:3, four:4, other:-1};

// 방법1
combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj2.other   //  중복속성
}
console.log("combined 1:", combined);

// 방법2 assign(할당메서드) 
// {} 에 obj1과 obj2를 할당한다
combined = Object.assign({}, obj1, obj2);
console.log("combined 2:", combined);   // other가 0이었는데 obj2가 obj1의 other에 덮어써지기 때문에 값이 0이 무시가 되고 -1이 된다.

console.log("========================= ES6 방식");
combined = {
    ...obj1,    //  obj1의 모든 속성을 전개 ( one, two, other )
    ...obj2,    //  obj2의 모든 속성을 전개 ( three, four, other )    
}
console.log("ES6 combined:", combined); //  obj1의 ohter가 0인 이유는 obj2가 나중에 풀렸기 때문에 obj2 other의 값인 -1이 0대신 들어감
                                        //  반대로 obj1이 나중에 풀리면 other 값은 obj1의 other값인 0이 들어감
// 연결 순서 변경                                        
combined = {
    ...obj2,    //  obj1의 모든 속성을 전개 ( one, two, other )
    ...obj1,    //  obj2의 모든 속성을 전개 ( three, four, other )    
}
console.log("ES6 combined:", combined);

console.log("========================= 객체 전개 할당");
console.log("object:", combined);
let { other, ...remains } = combined;
console.log(other, remains);


