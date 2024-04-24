const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const infos = document.querySelector('#infos');
    infos.classList.remove('hidden');

    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const resultBmi = document.querySelector('#value');
    const description = document.querySelector('#description')

    const bmi = calculateBmi(weight, height);
    resultBmi.innerHTML = bmi.toFixed(2).replace('.', ',');

    const message = returnMessage(bmi);
    description.innerHTML = message;

    if (message === 'Você está no peso ideal!') {
        resultBmi.classList.add('normal')
    } else {
        resultBmi.classList.add('attention');
    }

    form.reset();

})

function calculateBmi(weighValue, heightValue) {
    const bmi = weighValue / (heightValue * heightValue);
    return bmi;
}

function returnMessage(bmi) {
    const messageList = ['Você está abaixo do peso!', 'Você está no peso ideal!', 'Você está com sobrepeso!', 'Você está com obesidade moderada!', 'Você está com obesidade severa!', 'Você está com obesidade mórbida!'];

    if (bmi <= 18.5) return messageList[0];
    if (bmi <= 24.9) return messageList[1];
    if (bmi <= 29.9) return messageList[2];
    if (bmi <= 34.9) return messageList[3];
    if (bmi <= 39.9) return messageList[4];
    return messageList[5];
}