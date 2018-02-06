//Task 1
 alert(prompt('Какой сегодня день?', ''));

 //Task 2
 {
 	var message, role;
 	(role == 'Гость' ? message = 'Привет' : (role == 'Директор' ? message == 'Здравствуйте' : (role == '' ? message == 'Познакомимся?' : message == '')));
 }

 //Task 3
 {
 	prompt('Каково "официальное" название JavaScript?', '') == 'EcmaScript' ? alert('Верно!') : alert('Не знаете "EcmaScript"?');
 }

//Task 4
switch(prompt('Кто пришел?')) {
	case null: 
		alert('Вход отменен');
		break;
	case 'Админ':
		switch(prompt('Пароль?')) {
			case null:
				alert('Вход отменен');
				break;
			case 'Черный Властелин':
				alert('Добро пожаловать!');
				break;
			default:
				alert('Пароль неверен');
		}
	break;
	default:
		alert('Я вас не знаю');
}

//Task 5
function Fibonacci(count) {
	var current = 0, next = 1;
	for (count; count > 0; count--) {
		console.log(current);
		next += current;
		current = next - current;
	}
	return;
}
Fibonacci(15);


//Task 6
var min = 10,
	max = 20;

while (true) {
	var first = Math.round(Math.random() * (max - min) + min);
	var second = Math.round(Math.random() * (max - min) + min);
	if (prompt(first + ' + ' + second + '?') == first + second) {
		alert('Верно');
		break;
	} 	
}





