var Name = "Это лабораторная работа по JavaScript";
alert(Name);
console.log(Name);
//
var a = 25;
var b = 5;
alert("Переменная a ="+a+"переменная b ="+b);
console.log("Переменная a ="+a+" переменная b ="+b);
document.writeln("Переменная a ="+a+" переменная b ="+b);
document.write("<pre>\n</pre>")
//
var c = a+b;
alert("Сумма a+b = "+c);
console.log("Сумма a+b = "+c);
document.write("Сумма a+b = "+c+"<pre>\n</pre>");
//
var reg1 = "PrIvEt"
alert("Строка до изменения регистра: "+reg1+"\n"+"Строка после изменения регистра: "+reg1.toUpperCase()+" "+reg1.toLowerCase());
console.log("Строка до изменения регистра: "+reg1);
console.log("Строка после изменения регистра: "+reg1.toUpperCase()+" "+reg1.toLowerCase());
document.write("Строка до изменения регистра: "+reg1+"<pre>\n</pre>");
document.write("Строка после изменения регистра: "+reg1.toUpperCase()+" "+reg1.toLowerCase());
//
var slohz = c
var vich = a-b
var umnohz = a*b;
var delen = a/b
var ostat = a%6
var kvad = Math.pow(a,2)
alert("Сложение "+a+" + "+b+"= "+slohz)
alert("Вычитание: "+a+" - "+b+"= "+vich)
alert("Умножение: "+a+" * "+b+"= "+umnohz)
alert("Деление: "+a+" / "+b+"= "+delen)
alert("Остаток от деления "+a+" на 6: "+ostat)
alert("Квадрат числа "+a+": "+kvad)
//
alert("Найдем факториал числа")
var a1 = prompt('Введите число',)
var fac = a1
function factorial(fac){
    if (fac == 0) return 1
    return fac * factorial(fac-1)
}
alert("Факториал "+a1+" = "+factorial(fac))
console.log("Найдем факториал числа "+a1)
console.log("Факториал "+a1+" = "+factorial(fac))
//
function raschet(rasznach){
    rasznach.rez.value = eval(rasznach.exp.value)
}