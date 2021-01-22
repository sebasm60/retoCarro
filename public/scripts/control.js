'use strict';

window.onload = function() {

    let renault = new carro();
    renault.setEstado("apagado");

    //Encender o apagar vehiculo presionando la tecla 's'.
    document.addEventListener('keydown', () => {

        if (event.which === 83) {
            let marcha = document.getElementById("marcha");
            let frenoDeMano = document.getElementById("frenoDeMano");

            renault.setMarcha(marcha.value);
            renault.setFrenoDeMano(frenoDeMano.value);

            (renault.estado === "apagado") ? renault.encenderApagar("encender"):
                renault.encenderApagar("apagar");
        }
    });

    // Iniciar marcha precionando la tecla 'g'.
    document.addEventListener('keydown', () => {

        if (event.which === 71) {
            let marcha = document.getElementById("marcha");
            let frenoDeMano = document.getElementById("frenoDeMano");
            let clutch = document.getElementById("clutch");
            let freno = document.getElementById("freno");

            renault.setMarcha(marcha.value);
            renault.setFrenoDeMano(frenoDeMano.value);
            renault.setClutch(clutch.value);
            renault.setFreno(freno.value);

            renault.arranque();
        }
    });

    //Programar destino y sus paradas presionando la tecla 'd',
    document.addEventListener('keydown', () => {

        if (event.which === 68) {
            renault.seleccionarDestino();
        }
    });

    //Parquear el vehiculo presionando la tecla 'p'
    document.addEventListener('keydown', () => {

        if (event.which === 80) {
            let marcha = document.getElementById("marcha");

            renault.setMarcha(marcha.value);
            renault.parquear();
        }
    });

    //Encender luces estacionarias precionando 'e'.
    document.addEventListener('keydown', () => {

        if (event.which === 69) {
            renault.encenderEstacionarias();
        }
    });

    // Girar a la derecha presionando 'r' o a la izquierda presionando 'l'.
    document.addEventListener('keydown', () => {

        if (event.which === 82) {
            renault.realizarGiro('Derecha');
        } else if (event.which === 76) {
            renault.realizarGiro('Izquierda');
        }
    });


    // encender direccionales presionando '<' o '>'.
    document.addEventListener('keydown', () => {

        if (event.which === 39) {

            let dirDerecha = document.getElementById('direccionalDerecha');
            (dirDerecha.classList.contains("container")) ? (
                dirDerecha.classList.add('direccionales'), dirDerecha.classList.remove('container'),
                renault.setDireccionalR(true)) :
            (dirDerecha.classList.add('container'), dirDerecha.classList.remove('direccionales'),
                renault.setDireccionalR(false));
        } else if (event.which === 37) {
            let dirIzquierda = document.getElementById('direccionalIzquierda');
            (dirIzquierda.classList.contains("container")) ? (
                dirIzquierda.classList.add('direccionales'), dirIzquierda.classList.remove('container'),
                renault.setDireccionalL(true)
            ) : (dirIzquierda.classList.add('container'), dirIzquierda.classList.remove('direccionales'),
                renault.setDireccionalL(false));
        }
    });


}