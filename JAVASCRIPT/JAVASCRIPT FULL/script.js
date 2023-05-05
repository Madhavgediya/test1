    // var a = "madhav gediya";
// var b =100;
// var c = 123.25689;
// var d = true;
// var e = false;

// console.log(typeof a +" "+ a);
// console.log(typeof b +" "+ b);
// console.log(typeof c +" "+ c);
// console.log(typeof d +" "+ d);
// console.log(typeof e +" "+ e);

let nam = document.querySelector('button');
nam.addEventListener('click',showMsg);

let udp = document.getElementById('btn2');
udp.addEventListener('click',updmsg);

function updmsg()
{
    let msg = prompt('ENTER NAME FOR UPDATE :-');
    udp.textContent = 'Roll No - 1  '  + msg;
}

function showMsg()
{
    alert("first word...!");
}

var a2 = 190;
var a3 = 200;
// console.log(a2 + a3);
// console.log(a2++);
// console.log('A2 = ' +a2 + ' Total ' +(a2 %a3));

console.log((a2+a2) < a3);

