// // Math 1
// function zero_negativity(arr){
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] < 0){
//             console.log(false);
//             return false;
//         }
//     }
//         console.log(true);
//         return true;
// }
// zero_negativity([91,40,23,-10]);

// // Math 2
// function is_even(num){
//     if(num % 2 === 0){
//         console.log(true);
//         return true;
//     }
//     else{
//         console.log(false);
//         return false;
//         }
// }
// // is_even(21);

// // Math 3
// function how_many_even(arr, callback){
//     var count = 0;
//     for(var i = 0; i<arr.length; i++){
//         if(callback(arr[i])){
//             count += 1;
//         }
//     }
//     console.log(count);
//     return count;
// }
// how_many_even([2,5,6,8,1], is_even);


// // Math 4
// function create_dummy_array(n){
//     const arr = [];
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     console.log(arr);
//     return arr;
// }
// create_dummy_array(4);

// // Math 5
// function random_choice(arr){
//     var x = Math.floor(Math.random() * arr.length);
//     console.log(arr[x]);
//     return arr[x];
// }

// random_choice([10,92,'bob',-238,'wow']);