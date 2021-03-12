const activationFunction = (value) => {
    // si sobrepasa el valor mínimo requerido
    if (value > 0) {
        // indicamos que la neurona puede activarse
        return 1
    }

    // aqui la neurona no se activará
    return 0
}

const random = _ => {
    const max = 1
    const min = -1
    return Math.random() * (max - min) + min
}

// los pesos deben estar asociados a la cantidad de entradas
const weights = [random(), random()]
// ritmo de aprendizaje pequeño para "acercarse" lentamente a la respuesta correcta
const learningRate = 0.5


const predict = (input) => {

    // ahora multiplicamos el peso corrrespondiente a cada elemento
    // esta va a ser la entrada que utilizará la neurona para procesar
    const weightedInput = []

    // la suma total de todos los pesos con las entradas
    let sum = 0

    // realizar la operación
    input.forEach((field, index) => {
        sum += field * weights[index]
    })

    return activationFunction(sum)
}


const train = (trainingData) => {
    trainingData.forEach(observation => {
        // solo el input
        const input = observation.slice(0, 2)
        // tomar la predicción inicial
        const guess = predict(input)
        // calcular el error (de forma muy básica, que tan "alejados" estamos)
        const error = observation[2] - guess

        for (let index = 0; index < weights.length; index++) {
            weights[index] += error * input[index] * learningRate
        }
    })
}


// the training data
const training = [
    [1, 1, 1],
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
]

// observación: { nublado: 0, viento: 1 }
const input = [0, 1]
train(training)

const prediction = predict(input)

console.log(`For ${input}, the prediction is ${prediction}`)