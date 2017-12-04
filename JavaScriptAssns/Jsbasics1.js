// Basic 1
var x = [];
x.push('coding');
x.push('dojo');
x.push('rocks');
x.pop();
console.log(x);


// Basic 2
const y = [];
y.push(88);

// Couldn't push y because constants cannot be changed.

// Basic 3
var z = [9,10,6,5,-1,20,13,2];
for(var i = 0; i < z.length; i++){
    if(z[i] === z[z.length-1]){
        continue}
    else{
        console.log(z[i]);
    }
}


// Basic 4
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

for(var i = 0; i<names.length; i++){
    if(names[i].length === 5)
        console.log(names[i]);
    else{
        continue;
    }
}

// Basic 5
function yell(str){
    console.log(str.toUpperCase());
}

yell('hello')