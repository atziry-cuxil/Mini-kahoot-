class Jugador {
    #nombre;
    #puntaje;
    #respuestasCorrectas;

    constructor(nombre) {
        this.nombre = nombre
        this.#puntaje = 0
        this.#respuestasCorrectas = 0
    }

    get nombre() {
        return this.#nombre
    }

    set nombre(value) {
        this.#nombre = value
    }

    get puntaje() {
        return `Tienes ${this.#puntaje} puntos`
    }

    set puntaje(value) {
        this.#puntaje = value
    }

    get puntos() {
        return this.#puntaje
    }

    get respuestasCorrectas() {
        return this.#respuestasCorrectas
    }

    set respuestasCorrectas(value) {
        this.#respuestasCorrectas = value
    }

    sumarPuntos(puntos) {
        this.#puntaje = this.#puntaje + puntos
    }

    aumentarCorrectas() {
        this.respuestasCorrectas = this.respuestasCorrectas + 1
    }

    reiniciar() {
        this.nombre = ''
        this.#puntaje = 0
        this.respuestasCorrectas = 0
    }

}

class Pregunta {
    #texto;
    #opciones;
    #respuestaCorrecta;
    #puntos;

    constructor(texto, opciones, respuestaCorrecta, puntos) {
        this.texto = texto
        this.opciones = opciones
        this.respuestaCorrecta = respuestaCorrecta 
        this.puntos = puntos
    }

    set texto(value) {
        this.#texto = value
    }

    get texto() {
        return this.#texto
    }

    get opciones() {
        return this.#opciones
    }

    set opciones(value) {
        if (Array.isArray(value)) {
            this.#opciones = value
        } else {
            throw new Error('No se aceptan valores diferentes a arreglos')
        }
    }

    get respuestaCorrecta() { 
        return this.#respuestaCorrecta
    }

    set respuestaCorrecta(value) {
        this.#respuestaCorrecta = value
    }

    set puntos(value) {
        this.#puntos = value
    }

    get puntos() {
        return this.#puntos
    }

    validarRespuesta(respuesta) {
        return respuesta == this.#respuestaCorrecta
    }

}

class Quiz {
    #preguntas;
    #preguntaActual;
    #jugador;
    #indice;

    constructor(pregunta, jugador) {
        this.preguntas = pregunta
        this.jugador = jugador
        this.#indice = 0
    }

    set preguntas(value) {
        this.#preguntas = value
    }

    get preguntas() {
        return this.#preguntas
    }

    set preguntaActual(value) {
        this.#preguntaActual = value
    }

    get preguntaActual() {
        return this.#preguntaActual
    }

    set jugador(value) {
        this.#jugador = value
    }

    get jugador() {
        return this.#jugador
    }

    iniciar() {
        this.#indice = 0;
        this.preguntaActual = this.preguntas[this.#indice]
    }

    mostrarPregunta() {
        return this.preguntaActual
    }

    responder(respuesta) {
        let res = this.preguntaActual.validarRespuesta(respuesta) 
        if (res) {
            this.jugador.aumentarCorrectas()
            this.jugador.sumarPuntos(this.preguntaActual.puntos)
        }
    }

    siguientePregunta() {
        this.#indice++;
        this.preguntaActual = this.preguntas[this.#indice]
    }

    finalizarQuiz() {
        return { nombre: this.jugador.nombre, puntaje: this.jugador.puntos, correctas: this.jugador.respuestasCorrectas }
    }

    estadoPregunta() {
        return `Pregunta ${this.#indice + 1} de ${this.#preguntas.length}`
    }

    estadoPreguntaPorcentaje() {
        let porcentaje = 100 / this.#preguntas.length
        return (this.#indice + 1) * porcentaje
    }

}

let pantalla1 = document.querySelector('#pantalla-inicio')
let pantalla2 = document.querySelector('#pantalla-quiz')
let pantallaFinal = document.querySelector('#pantalla-final')
let formIniciar = document.querySelector('#form-iniciar')

let estadoJugador = document.querySelector('#estado-jugador')
let estadoPuntaje = document.querySelector('#estado-puntaje')
let estadoCorrectas = document.querySelector('#estado-correctas')
let estadoPregunta = document.querySelector('#estado-pregunta')
let barraProgreso = document.querySelector('#barra-progreso')

let preguntaVisual = document.querySelector('#texto-pregunta')
let respuestasVisual = document.querySelector('#opciones-respuesta')
let feedbackRespuesta = document.querySelector('#feedback-respuesta')

let btnSiguiente = document.querySelector('#btn-siguiente')
let btnFinalizado = document.querySelector('#btn-finalizado')
let btnReiniciar = document.querySelector('#btn-reiniciar')

let resultadoJugador = document.querySelector('#resultado-jugador')
let resultadoPuntaje = document.querySelector('#resultado-puntaje')
let resultadoCorrectas = document.querySelector('#resultado-correctas')

const pregunta1 = new Pregunta('¿Cual es mi edad?', ['10', '20', '30', '40', '56'], '30', 10)
const pregunta2 = new Pregunta('¿Cual es mi sueno?', ['10', '20', '30', '40', '56'], '20', 10)
const pregunta3 = new Pregunta('¿Cual es mi mercado?', ['10', '20', '30', '40', '50'], '50', 10)
const pregunta4 = new Pregunta('¿Cual es mi lugar?', ['10', '20', '30', '40', '56'], '10', 10)
const pregunta5 = new Pregunta('¿Cual es mi comida favorita?', ['10', '20', '30', '40', '56'], '30', 10)

const ArregloDePreguntas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5]
let QuizOne;

formIniciar.addEventListener('submit', (event) => {
    event.preventDefault()
    let playerOne = new Jugador(event.target['nombre-jugador'].value)
    QuizOne = new Quiz(ArregloDePreguntas, playerOne)
    QuizOne.iniciar();
    formIniciar.reset();
    pantalla1.classList.add('d-none')
    pantalla2.classList.remove('d-none')
    renderizar(playerOne);
})

respuestasVisual.addEventListener('click', (event) => {
    if (event.target.disabled != undefined) {
        event.target.classList.add('active')
        let esCorrecta = QuizOne.preguntaActual.validarRespuesta(event.target.textContent);
        feedbackRespuesta.textContent = `Su respuesta es ${esCorrecta ? 'correcta' : 'incorrecta'}`
        if (!esCorrecta) {
            feedbackRespuesta.classList.remove('alert-success')
            feedbackRespuesta.classList.add('alert-danger')
        }
        feedbackRespuesta.classList.remove('d-none')
        let botonesRespuesta = respuestasVisual.childNodes 
        botonesRespuesta.forEach(btn => btn.disabled = true)
        QuizOne.responder(event.target.textContent)
        btnSiguiente.disabled = false;
        if (!btnFinalizado.classList.contains('d-none')) {
            btnFinalizado.disabled = false;
        }
    }
})

btnSiguiente.addEventListener('click', (event) => {
    QuizOne.siguientePregunta();
    renderizar(QuizOne.jugador)
})

btnFinalizado.addEventListener('click', (event) => {
    pantalla2.classList.add('d-none')
    pantallaFinal.classList.remove('d-none')
    let fin = QuizOne.finalizarQuiz();
    resultadoJugador.textContent = fin.nombre
    resultadoCorrectas.textContent = fin.correctas
    resultadoPuntaje.textContent = fin.puntaje
    btnFinalizado.classList.add('d-none')
    btnSiguiente.classList.remove('d-none')
})

btnReiniciar.addEventListener('click', (event) => {
    QuizOne.jugador.reiniciar()
    pantallaFinal.classList.add('d-none')
    pantalla1.classList.remove('d-none')
    QuizOne.jugador.reiniciar()
})

const renderizar = (playerOne) => {
    estadoPregunta.textContent = QuizOne.estadoPregunta()
    barraProgreso.style = `width : ${QuizOne.estadoPreguntaPorcentaje()}%`
    feedbackRespuesta.classList.add('d-none')
    feedbackRespuesta.classList.add('alert-success')
    feedbackRespuesta.classList.remove('alert-danger')
    estadoJugador.textContent = `Jugador: ${playerOne.nombre}`
    estadoPuntaje.textContent = playerOne.puntaje
    estadoCorrectas.textContent = `Correctas: ${playerOne.respuestasCorrectas}`
    preguntaVisual.textContent = QuizOne.preguntaActual.texto
    respuestasVisual.innerHTML = ''
    QuizOne.preguntaActual.opciones.forEach(Element => {
        let btnRespuesta = document.createElement('button')
        btnRespuesta.className = 'btn btn-outline-primary text-start py-3'
        btnRespuesta.textContent = Element
        respuestasVisual.append(btnRespuesta)
    })
    if (QuizOne.estadoPreguntaPorcentaje() == 100) {
        btnFinalizado.classList.remove('d-none')
        btnSiguiente.classList.add('d-none')
    }
    btnSiguiente.disabled = true;
}




