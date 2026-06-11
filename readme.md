# 🎯 Evaluación Práctica: Mini Kahoot Individual con Programación Orientada a Objetos

## 📖 Descripción

Desarrolla una aplicación web utilizando **HTML, CSS y JavaScript** que permita a un usuario responder una serie de preguntas tipo quiz, acumulando puntos por cada respuesta correcta.

El objetivo principal es poner en práctica los conceptos de **Programación Orientada a Objetos (POO)** y la manipulación dinámica del **DOM**.

---

# 🏆 Objetivos de Aprendizaje

Al finalizar este ejercicio deberás demostrar que puedes:

- Crear y utilizar clases.
- Instanciar objetos.
- Implementar métodos y atributos.
- Aplicar encapsulamiento.
- Manipular el DOM dinámicamente.
- Organizar la lógica de una aplicación utilizando POO.

---

# 📋 Requerimientos Generales

La aplicación deberá permitir:

- Ingresar el nombre del jugador.
- Iniciar una nueva partida.
- Mostrar una pregunta a la vez.
- Seleccionar una respuesta.
- Validar si la respuesta es correcta o incorrecta.
- Acumular puntos.
- Mostrar el progreso del quiz.
- Mostrar resultados al finalizar.
- Reiniciar el juego sin recargar la página.

---

# 🧩 Programación Orientada a Objetos

## Clase: Jugador

Representa al participante del juego.

### Atributos

```javascript
nombre
puntaje
respuestasCorrectas
```

### Métodos

```javascript
sumarPuntos()
aumentarCorrectas()
reiniciar()
```

---

## Clase: Pregunta

Representa una pregunta del cuestionario.

### Atributos

```javascript
texto
opciones
respuestaCorrecta
```

### Métodos

```javascript
validarRespuesta(respuesta)
```

Este método deberá retornar:

```javascript
true
```

si la respuesta es correcta.

o

```javascript
false
```

si la respuesta es incorrecta.

---

## Clase: Quiz

Controlará toda la lógica del juego.

### Atributos

```javascript
preguntas
preguntaActual
jugador
```

### Métodos

```javascript
iniciar()
mostrarPregunta()
responder()
siguientePregunta()
finalizarQuiz()
```

---

# 🖥️ Interfaz Gráfica

## Pantalla Inicial

Debe contener:

```text
Mini Kahoot Academy

[ Nombre del jugador ]

[ Iniciar Quiz ]
```

---

## Pantalla de Preguntas

Debe mostrar:

```text
Jugador: Daniel

Puntaje: 20

Pregunta 3 de 10
```

Además:

```text
¿Cuál método convierte un texto a mayúsculas?

[A] .toUpperCase()
[B] .toLowerCase()
[C] .split()
[D] .join()
```

Las opciones deberán generarse dinámicamente utilizando JavaScript.

---

## Respuesta

Cuando el usuario responda:

### Correcta

```text
✅ ¡Respuesta Correcta!
```

### Incorrecta

```text
❌ Respuesta Incorrecta
```

Después de responder:

- Deshabilitar las opciones.
- Mostrar botón **Siguiente**.

---

## Resultado Final

Al terminar el cuestionario:

```text
🎉 Quiz Finalizado

Jugador: Daniel

Puntaje Final: 80

Respuestas Correctas: 8 de 10
```

Mostrar además:

```text
[ Jugar Nuevamente ]
```

---

# 📚 Preguntas Mínimas

El sistema deberá incluir:

- 10 preguntas mínimo.
- 4 opciones por pregunta.
- Temática libre.

Ejemplos:

- JavaScript
- HTML
- CSS
- Tecnología
- Videojuegos
- Cultura General

---

# ⚙️ Reglas del Juego

## Puntaje

```text
Respuesta Correcta = 10 puntos
Respuesta Incorrecta = 0 puntos
```

## Restricciones

- No se puede responder dos veces la misma pregunta.
- Solo una respuesta por pregunta.
- No se puede avanzar sin responder.
- Todo debe manejarse con JavaScript.

---

# ⭐ Extras (Puntos Adicionales)

## Nivel 1

Agregar temporizador:

```text
⏳ 15 segundos
```

---

## Nivel 2

Agregar barra de progreso:

```text
████████░░ 80%
```

---

## Nivel 3

Agregar categorías.

Ejemplo:

```text
Programación
Tecnología
Videojuegos
```

---

## Nivel 4

Guardar mejor puntaje utilizando:

```javascript
localStorage
```

---

## Nivel 5

Agregar sonidos:

```text
✔️ Correcto
❌ Incorrecto
```

---

# 📊 Criterios de Evaluación

| Criterio | Puntos |
|-----------|---------:|
| Uso correcto de Clases | 20 |
| Uso correcto de Objetos | 15 |
| Métodos y atributos | 15 |
| Manipulación del DOM | 20 |
| Funcionamiento del Quiz | 20 |
| Orden y limpieza del código | 10 |
| **TOTAL** | **100** |

---

# 🚀 Entrega Esperada

Al finalizar, el usuario deberá poder:

1. Ingresar su nombre.
2. Jugar una partida completa.
3. Ver su puntaje final.
4. Reiniciar el juego.
5. Utilizar una aplicación desarrollada completamente con **POO + DOM**, sin recargar la página.

---

# 💡 Desafío Extra para los Más Rápidos

Implementa un sistema de **ranking local** que almacene los **5 mejores puntajes** usando `localStorage` y los muestre al finalizar cada partida.

Esto te obligará a practicar:

- Arreglos de objetos.
- Métodos de ordenamiento.
- Persistencia de datos.
- Manipulación avanzada del DOM.

---

# 📦 Entregables

El estudiante deberá entregar:

```text
📁 mini-kahoot/
│
├── index.html
├── style.css
├── app.js
│
└── assets/
```

La aplicación debe ejecutarse correctamente abriendo únicamente el archivo `index.html`.

---

# 🔥 Bonus Challenge

Si terminas antes que los demás, agrega:

- Selección de categoría antes de iniciar.
- Diferentes niveles de dificultad.
- Temporizador configurable.
- Sistema de vidas.
- Tabla de mejores puntajes.
- Modo oscuro.
- Animaciones al responder.