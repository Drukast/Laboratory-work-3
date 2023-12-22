var N, number1 = 0, number2 = 1, transer = 0, result = '1';
N = Number(prompt('Введите сколько элементов ряда Фибоначчи необходимо вывести?', ''));
if (!(isNaN(N)) && N > 0 && N % 1 == 0) {
    for (var i = 1; i < N; i++) {
        transer = number2;
        number2 += number1;
        number1 = transer;
        result = result + ' ' + number2;
    }
    alert(`Ряд Фибоначчи из ${N} элементов равен ${result}`);
} else {
    alert('Неверный ввод необходимого количества элементов!');
}