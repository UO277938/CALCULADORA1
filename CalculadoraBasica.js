class Calculadora {
    constructor(valorAnterior, valorActual, operacionActual, memoria){
        this.valorAnterior = valorAnterior;
        this.valorActual = valorActual;
        this.operacionActual= operacionActual;
        this.memoria = memoria;
    }

    encender(){
        if(encendida){
            calculadora.reiniciar()
            return
        }
        panelTexto = document.getElementById("texto")
        encendida= true;

        panelTexto.value = "0" //Panel a 0
        this.valorActual = 0
        this.valorAnterior = undefined
        this.operacionActual = undefined
        this.memoria= "0"
        
    }

    reiniciar(){
        panelTexto.value = "0" //Panel a 0
        this.valorActual = 0
        this.valorAnterior = undefined
        this.operacionActual = undefined
        this.memoria = 0
    }

    digitos(digito){
        if(this.valorActual == undefined || this.valorActual == "0" )
            this.valorActual=digito;
        else
            this.valorActual = this.valorActual  + "" + digito;
        this.actualizarPanel()
    }

    actualizarPanel(){
        panelTexto.value = "" + this.valorActual
        // +
        // " // " + this.valorAnterior + " // " + this.operacionActual;
    }

    punto(){
        this.valorActual = this.valorActual+ "."
        this.actualizarPanel()
    }

    suma(){
        this.operacionActual = "+"
        this.valorAnterior = this.valorActual
        this.valorActual = 0
        //console.log("CAMBIA A " + this.operacionActual)
    }

    resta(){
        this.operacionActual = "-"
        this.valorAnterior = this.valorActual
        this.valorActual = 0
        //console.log("CAMBIA A " + this.operacionActual)
        
    }

    multiplicacion(){
        this.operacionActual = "*"
        this.valorAnterior = this.valorActual
        this.valorActual = 0
        //console.log("CAMBIA A " + this.operacionActual)
    }

    division(){
        this.operacionActual = "/"
        this.valorAnterior = this.valorActual
        this.valorActual = 0
        //console.log("CAMBIA A " + this.operacionActual)
    }

    mrc(){ //Muestra el valor de la memoria
        this.valorActual = this.memoria
        panelTexto.value = "" + this.memoria
    }

    mMenos(){ //Resta el valor actual al guardado en memoria
        var mem = Number(this.memoria)
        mem -= this.valorActual
        this.memoria = mem
    }

    mMas(){ //Suma el valor actual al gaurdado
        var mem = Number(this.memoria)
        mem += Number(this.valorActual)
        this.memoria = mem
    }

    borrar(){
        this.valorActual="0"
        this.actualizarPanel()
    }

    igual(){
        var ant = Number(this.valorAnterior)
        var actu = Number(this.valorActual)

        switch(this.operacionActual){

            case "+":
                var resultado = ant + actu
                this.valorActual = resultado
                break;

            case "-":
                var resultado = ant - actu
                this.valorActual = resultado
                break;

            case "*":
                var resultado = ant * actu
                this.valorActual = resultado
                break;

            case "/":
                var resultado = ant / actu
                this.valorActual = resultado
                break;

            default:
                return
        }
        this.operacionActual = undefined
        this.actualizarPanel()
    }

    porcentaje(){
        var act = Number(this.valorActual) * 0.01
        this.valorActual = "" + act
        this.actualizarPanel()
    }

    raiz(){
        var act = Number(this.valorActual)
        this.valorActual= ""+ Math.sqrt(act)
        this.actualizarPanel()
    }

    signo(){
        var act = Number(this.valorActual) * -1
        this.valorActual = "" + act
        this.actualizarPanel()
    }


}

var calculadora= new Calculadora(undefined,undefined, undefined, undefined)

var panelTexto

var encendida = false



document.addEventListener('keydown', (event) => {
    const keyName = "" + event.key;
    console.log(keyName)
    
    if(keyName.match("1"))
        calculadora.digitos(1)

    if(keyName.match("2"))
    calculadora.digitos(2)

    if(keyName.match("3"))
        calculadora.digitos(3)

    if(keyName.match("4"))
        calculadora.digitos(4)
    
    if(keyName.match("5"))
        calculadora.digitos(5)

    if(keyName.match("6"))
        calculadora.digitos(6)

    if(keyName.match("7"))
        calculadora.digitos(7)

    if(keyName.match("8"))
        calculadora.digitos(8)

    if(keyName.match("9"))
        calculadora.digitos(9)

    if(keyName.match("0"))
        calculadora.digitos(0)

    if(keyName == "." )
        calculadora.punto()
    
    if(keyName == "+")
        calculadora.suma()
    
    if(keyName == "-")
        calculadora.resta()

    if(keyName == "*")
        calculadora.multiplicacion()

    if(keyName == "/")
        calculadora.division()     

    if(keyName == "Enter" || keyName == "=")
        calculadora.igual()
    
    if(keyName == "Backspace" || keyName == "Delete")
        calculadora.borrar()
    
    if(keyName=="%")
        calculadora.porcentaje()
}

  );

/*function cargaPagina(){
    

    

    document.getElementById("on/c").addEventListener("click", ()=>{ 
        if(!encendida){
            encendida = true;
            calculadora.encender()

        }
        else
            calculadora.reiniciar()
    })

}*/
//window.addEventListener("load", cargaPagina)

/*
document.getElementById("punto").addEventListener("click", ()=> calculadora.punto())
        document.getElementById("procentage").addEventListener("click", ()=> calculadora.porcentaje())
        document.getElementById("ce").addEventListener("click", ()=> calculadora.borrar())
        document.getElementById("raiz").addEventListener("click", ()=> calculadora.raiz())
        
        document.getElementById("mrc").addEventListener("click", ()=> calculadora.mrc())
        document.getElementById("mMas").addEventListener("click", ()=> calculadora.mMas())
        document.getElementById("mMenos").addEventListener("click", ()=> calculadora.mMenos())
        
        document.getElementById("masmenos").addEventListener("click", ()=> calculadora.signo())
        document.getElementById("igual").addEventListener("click", ()=> calculadora.igual())
*/

/*      //Cargamos todos los botones digitos (0-9 y punto)
        var digitosBotones = document.getElementsByName("digito")

        digitosBotones.forEach(boton => {
        boton.addEventListener("click", ()=> {
            calculadora.digitos(boton.value)
            })
        })

        //Cargamos todos los botones operaciones (+ - / *)
        var digitosOperaciones = document.getElementsByName("operacion")

        digitosOperaciones.forEach(boton => {
        boton.addEventListener("click", ()=> {
            if(this.operacionActual!= undefined && this.valorAnterior!=undefined){
                calculadora.igual()
            }
            calculadora.operacionActual = boton.value
            this.valorAnterior = this.valorActual
            this.valorActual = ""
            this.acutalizarPanel()
            })
        })*/