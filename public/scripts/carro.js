'use strict';

class carro {

    constructor(marcha, frenoDeMano, clutch, freno, direccionalR, direccionalL, estado, paradas, distancia, tiempoParada, distanciaParadas) {
        this.marcha = marcha;
        this.frenoDeMano = frenoDeMano;
        this.clutch = clutch;
        this.freno = freno;
        this.estado = estado;
        this.direccionalR = direccionalR;
        this.direccionalL = direccionalL;
        this.paradas = paradas;
        this.distancia = distancia;
        this.tiempoParada = tiempoParada;
        this.distanciaParadas = distanciaParadas;
    }

    encenderApagar(accion) {

        (accion === "apagar") ? (this.marcha != "neutro") ? this.print("El vehiculo debe estar en neutro"):
            (this.frenoDeMano != "on") ? this.print("El freno de mano no esta activo!") :
            (this.estado = "apagado", this.print("Apagando")):
            (this.marcha != "neutro") ? this.print("El vehiculo debe estar en neutro") :
            (this.frenoDeMano != "on") ? this.print("El freno de mano no esta activo!") :
            (this.estado = "encendido", this.print("Encendiendo"));

    }

    seleccionarDestino() {

        this.paradas = Math.floor(Math.random() * (3) + 1);
        this.distancia = document.getElementById("kilometros").value;
        this.tiempoParada = Math.floor(Math.random() * (5) + 1);
        this.distanciaParadas = parseInt((this.distancia - 10) / this.paradas);

        (this.distancia === "") ? this.print("Ingrese la distancia"):
            (this.print(`El numero de paradas seran: ${this.paradas}`),
                this.print(`El tiempo de las paradas es de: ${this.tiempoParada}s`),
                this.print(`Las paradas se realizaran cada ${this.distanciaParadas}Km`));
    }

    arranque() {

        (this.estado === "apagado") ? this.print("Debe encender el vehiculo"):
            (this.clutch != "on") ? this.print("Debe presionar el clutch") :
            (this.marcha != "1") ? this.print("Debe colocar la marcha 1") :
            (this.frenoDeMano != "off") ? this.print("Debe soltar el freno de mano") :
            (this.freno != "off") ? this.print("Debe soltar el freno") :
            (this.print("Arranco..."), this.controlVelocidad());
    }


    realizarGiro(String) {

        if (String === 'Derecha') {
            (this.direccionalR) ? this.print("Girando..."): this.print("Encianda la direcional derecha");
        } else if (String === 'Izquierda') {
            (this.direccionalL) ? this.print("Girando..."): this.print("Encianda la direccional Izquierda");
        }
    }

    controlVelocidad() {
        let velocidad = 0;
        let distancia = 0;
        let frenoRandom = Math.floor(Math.random() * (4) + 2);
        let boolean = false;
        this.print(frenoRandom);

        for (let i = 0; i < this.distancia; i++) {
            velocidad++;
            distancia++;

            if (velocidad == 30) {
                this.marcha++;
                this.print(`La marcha actual es: ${this.marcha}`);
            } else if (velocidad == 50) {
                this.marcha++;
                this.print(`La marcha actual es: ${this.marcha}`);
            } else if (velocidad == 70) {
                this.marcha++;
                this.print(`La marcha actual es: ${this.marcha}`);
            } else if (velocidad == 90) {
                this.marcha++;
                this.print(`La marcha actual es: ${this.marcha}`);
            } else if (velocidad == 110) {
                this.marcha++;
                this.print(`La marcha actual es: ${this.marcha}`);
            } else if (velocidad > 110) {
                break;
            }

            (frenoRandom === this.marcha && boolean === false) ? (this.frenadoAleatorio(), this.velocidad = 0, boolean === true) : false;

            (distancia === this.distanciaParadas || distancia === this.distanciaParadas * 2 || distancia === this.distanciaParadas * 3) ?
            (this.paradasProgramadas(distancia), this.velocidad = 0) : false;
        }
        this.print('Viaje finalizado');
    }


    frenadoAleatorio() {
        this.print("Realizando Frenado aleatorio");

        for (let i = this.tiempoParada; i > 0; i--) {
            this.print(i);
        }
        this.print('Reanudando viaje');
        this.marcha = 1;
    }

    paradasProgramadas(distancia) {
        this.print(`Realizando parada programada Distancia recorrida ${distancia}KM`);
        for (let j = this.tiempoParada; j > 0; j--) {
            this.print(j);
        }
        this.print('Reanudando viaje');
        this.marcha = 1;
    }

    encenderEstacionarias() {

        let dirIzq = document.getElementById('direccionalIzquierda');
        let dirDer = document.getElementById('direccionalDerecha');

        (dirIzq.classList.contains("container") && dirDer.classList.contains("container")) ?
        (dirIzq.classList.add("direccionales"),
            dirIzq.classList.remove("container"),
            dirDer.classList.add("direccionales"),
            dirDer.classList.remove("container"),
            this.direccionalR = true, this.direccionalL = true) :
        (dirIzq.classList.add("container"),
            dirIzq.classList.remove("direccionales"),
            dirDer.classList.add("container"),
            dirDer.classList.remove("direccionales"),
            this.direccionalR = false, this.direccionalL = false);
    }

    parquear() {

        (this.marcha != "r") ? this.print("El vehiculo no esta en Reversa"):
            (this.direccionaR != true && this.direccionalL != true) ? this.print("Debe encender las estacionarias") :
            this.print("Parqueando...");
    }

    print(string) {
        let mensaje = document.getElementById('mensaje');
        mensaje.innerHTML += `${string} <br>`;
    }

    setMarcha(marcha) {
        this.marcha = marcha;
    }

    setFrenoDeMano(frenoDeMano) {
        this.frenoDeMano = frenoDeMano;
    }

    setClutch(clutch) {
        this.clutch = clutch;
    }

    setFreno(freno) {
        this.freno = freno;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    setDireccionalR(direccionalR) {
        this.direccionalR = direccionalR;
    }

    setDireccionalL(direccionalL) {
        this.direccionalL = direccionalL;
    }

    setEstado(estado) {
        this.estado = estado;
    }
}