// пример 1


// var name= prompt("Пожалуйста введите свое имя ");
// console.log(name);

// var age = prompt("Пожалуйста введите возраст");
// console.log(age);

// var ex1 = +prompt("Решите этот пример 6+9");
// console.log("6 + 9 =" + ( 6 + 9 ) + " ваш ответ " + ex1);

// var ex2 = +prompt("Решите этот пример 5-1");
// console.log("5-1 = " + (5-1) + " ваш ответ " + ex2);

// var ex3 = +prompt("Решите этот пример 4 * 3");
// console.log("4 * 3 = " + (4 * 3) + " ваш ответ " + ex3);

// var ex4 = +prompt(" Решите этот пример 4/2");
// console.log("4 / 2 = " + (4 / 2) + " ваш ответ " + ex4);

// var ex5 = +prompt(" Найдите остаток от  4/3");
// console.log("4/3 = " + (4 % 3) + " ваш ответ " + ex5);


// пример 2 



// var clock = +prompt("Введите час");

// switch(clock) {
//     case 1 :
//         alert("час ночи");
//         break;
//     case 2 :
//         alert("2 часа ночи ");
//         break;
//     case 3 :
//         alert("3 часа ночи ");
//         break;
//     case 4:
//         alert("4 часа утра ");
//         break;
//     case 5:
//         alert("5 часов утра ");
//         break;
//     case 5:
//         alert("5 часов утра ");
//         break;
//     case 6:
//         alert("6 часов утра ");
//         break;
//     case 7:
//         alert("7 часов утра ");
//         break;
//     case 8:
//         alert("8 часов утра ");
//         break;
//     case 9:
//         alert("9 часов утра ");
//         break;
//     case 10:
//         alert("10 часов утра ");
//         break;
//     case 11:
//         alert("11 часов утра ");
//         break;
//     case 12:
//         alert("полдень");
//         break;
//     case 13:
//         alert(" час обеда");
//         break;
//     case 14:
//         alert( "2 час обеда");
//         break;
//     case 15:
//         alert("3 часа обеда");
//         break;
//     case 16:
//         alert("4 часа обеда");
//         break;
//     case 17:
//         alert("5 часа вечера");
//         break;
//     case 18:
//         alert(" 6 часов вечера ");
//         break;
//     case 19:
//         alert("7 часов вечера");
//         break;
//     case 20:
//         alert("8 часов вечера");
//         break;
//     case 21:
//         alert("9 часов ночи ");
//         break;
//     case 22:
//         alert("10 часов ночи");
//         break;
//     case 23:
//         alert("11 часов ночи");
//         break;
//     case 24:
//         alert("полночь");
//         break;
//     default:
//         alert("что-то пошло не так ");
//         break;
    
// }



// пример 3



// var a = +prompt("введите первое число");
// var b = +prompt("введите второе число");
// var c = +prompt("введите третье число");


// if(a > b && a > c){
//     alert("A самое большое число");
// } else if( b > a && b > c){
//     alert("B самое большое число");
// } else if( c > a && c > b){
//     alert("C самое большое число");
// } else if( a==b && b==c && a==c) {
//     alert("числа равны");
// } else if(a==b && c > a && c > b) {
//     alert(" C самое большое число");
// } else if(a==c && b > a && b > c){
//     alert( "B самое большое число");
// } else if( b==c && a > c && a > b){
//     alert(" A самое большое число ");
// } else {
//     if(isNaN(a)){
//         alert("первый переменный не число");
//     } else if(isNaN(b)){
//         alert("второй переменный не число");
//     }else if (isNaN(c))
//         alert("третий переменный не число");
    
// }



// пример 4

// var ag = +prompt("Введите свой возраст");

// if( ag > 0 && ag < 18){
//     alert("Вы еще молоды и вам нужно учиться ");
// } else if( ag > 18 && ag < 50){
//     alert("Вам нужно работать");
// } else if( ag > 50 && ag < 59){
//     alert("Вам скоро на пенсию");
// } else if(ag > 59 && ag < 150){
//     alert("Вы пенсионер");
// } else {
//     alert("Что-то пошло не так");
// }
