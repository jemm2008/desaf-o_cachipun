// *** SECCION DE FUNCIONES QUE USA EL PROGRAMA *** //
//
// 1.- Función Saludo //
let saludo = () => {
    alert (`HOLA!!! Bienvenido al Juego:

                                    PIEDRA,  PAPEL  O  TIJERAS!!!`)
}
//
//2.- Función número de Jugadas //
let num_jugadas = () => {
    let jugadas = parseInt(prompt (`Introduzca el número de veces que desee Jugar: `))
    return jugadas
}
//
//3.- Función jugada del Usuario //
let jugada_usuario = () => {
    let selector = true
    let seleccion_Usuario = 0
    do {
        seleccion_Usuario = parseInt(prompt (`Ingrese su selección a Jugar (1, 2, o 3): 
            1.- Piedra  (ROCK)
            2.- Papel   (PAPPER)
            3.- Tijeras (SCISSORS)`))
        if (seleccion_Usuario >= 1 && seleccion_Usuario <= 3) {
            alert(`Jugada seleccionada correctamente!! (${seleccion_Usuario})`)
            selector = false
        } else {
            alert (`Selección Incorrecta,
            solo números 1 , 2 o 3.`)
        }
    } while (selector)
    console.log(`Jugada Usuario: ${seleccion_Usuario}; (Piedra=1 / Papel=2 / Tijeras=3)`) // Piedra = 1  /  Papel = 2 / Tijeras = 3 //
    return seleccion_Usuario
}
//
//4.- Función jugada de la Máquina //
let jugada_maquina = () =>  {
    let resultado_MAQuina
    for (let i = 0; i <= Math.floor(Math.random()*17); i++) { // La Función tiene dos instancias aleatorias intencionalmente,
        resultado_MAQuina = Math.floor(Math.random()*3) + 1   // para darle más "aleatoriedad" ...
    }
    console.log(`Jugada Máquina: ${resultado_MAQuina}; (Piedra=1 / Papel=2 / Tijeras=3)`) // Piedra = 1  /  Papel = 2 / Tijeras = 3 //
    return resultado_MAQuina
}
//
//5.- Función comparadora de Jugadas y Declaradora de Ganador //
let compara_y_Declara_Ganador = (param_User, param_Maq) => {
    // console.log(`El param_User es: ${param_User}`) // estas líneas de código se usaron para verificación y las
    // console.log(`El param_Maq es: ${param_Maq}`)   // dejo hasta mejorar la salida por HTML en vez de la cónsola.
    console.log(" ...  AND THE WINNER IS   : ")
    switch (param_User) {
        case 1:
            if ( param_Maq === 1) {
                console.log(`Se produjo un Empate!!    (piedra - piedra)`)
            } else if ( param_Maq === 2) {
                console.log(`Ud ha perdido!!    (ud seleccionó piedra, y la máquina papel)`)
            } else {
                console.log(`Ud ha GANADO_!!    (ud seleccionó piedra, y la máquina tijeras)`)
            }
            break
        case 2:
            if ( param_Maq === 1) {
                console.log(`Ud ha GANADO_!!    (ud seleccionó papel y la máquina piedra)`)
            } else if ( param_Maq === 2) {
                console.log(`Se produjo un Empate!!    (papel - papel)`)
            } else {
                console.log(`Ud ha perdido!!    (ud seleccionó papel, y la máquina tijeras)`)
            }
            break
        case 3:
            if ( param_Maq === 1) {
                console.log(`Ud ha perdido!!    (ud seleccionó tijeras, y la máquina piedra)`)
            } else if ( param_Maq === 2) {
                console.log(`Ud ha GANADO_!!    (ud seleccionó tijeras y la máquina papel)`)
            } else {
                console.log(`Se produjo un Empate!!    (tijeras - tijeras)`)
            }
            break
        default:
            console.log(`ERROR!!   ERROR!!   ERROR!!)`)
    }
}
//
//6.- Función indicadora de fin de Jugadas y preguntadora si desea jugar nuevamente //
let jugar_Nuevamente = () => {
    let selecciON = 0
    do {
        alert(`Se acabaron las Jugadas...`)
        selecciON = parseInt(prompt(` Desea Jugar Nuevamente??:
                1.- Si
                2.- No`))
    } while (selecciON != 1 && selecciON != 2)
    // console.log(selecciON)
    if (selecciON === 1) {
        selecciON = true
    } else {
        selecciON = false
        alert(`Muchas gracias por Jugar Cachipún!!!
        que tenga un Feliz día`)
    }
    // console.log(selecciON)
    return selecciON
}
// *** FIN SECCION DE FUNCIONES QUE USA EL PROGRAMA *** //
//
//
// *** FUNCION PRINCIPAL QUE CORRE EL PROGRAMA *** //
let core_Function = () => {
    do {
    saludo()
    let jugadas = num_jugadas()
    for (let i = 1; i <= jugadas; i++ ) {
        alert(`Jugada No.: ${i}`)
        console.log("*************************************")
        console.log(`RESULTADO Jugada No. ${i}: `)
        compara_y_Declara_Ganador(jugada_usuario(),jugada_maquina())
        console.log("********************************************")
        alert(`Revisar resultado Jugada No. ${i} en la consola`)
    }
    } while (jugar_Nuevamente())
}
// *** FIN FUNCION PRINCIPAL *** //
//
//
// *** CODIGO FUNCIONAL*** //
alert(`1.- Abrir la consola, los resultados se muestran en la misma.
2.- Presione el botón verde para correr el Cachipún contra la Máquina.`)
document.getElementById("run_cachipun").addEventListener("click", core_Function)
// *** FIN DEL CODIGO FUNCIONAL*** //