let campoCantidad = document.getElementById("cantidad");
let campoContrasena = document.getElementById("contrasena");

let botonGenerar = document.getElementById("generar");
let botonLimpiar = document.getElementById("limpiar");

const cadenaCaracteraes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
const arrayCaracteresEspeciales = "!@#$%^&*()".split("")

const mensaje = document.getElementById("mensaje");

    
    botonGenerar.addEventListener("click", () => {
        
        let numerodigitado = parseInt(campoCantidad.value);

        if (numerodigitado < 6 || numerodigitado > 100) {
            alert("La contraseña debe contener 6 o más carácteres");
            return;
        }
    
        let contrasena = "";
        
        for(let i=0; i < numerodigitado; i++ ){
            
            const contrasenaAleatoria = cadenaCaracteraes [Math.floor (Math.random() * cadenaCaracteraes.length)];
            
    
            contrasena += contrasenaAleatoria;
    
        }

        const arryContrasena = contrasena.split("");

       const caracterEspecial = arryContrasena.find((element) => {

            return arrayCaracteresEspeciales.includes(element);
            
        }) 

        // console.log(caracterEspecial);

        
        campoContrasena.value = contrasena;

        if(!caracterEspecial){
    
            mensaje.classList.remove("hidden");
    
        } else{
            mensaje.classList.add("hidden");
        }
    })
    botonLimpiar.addEventListener("click", () => {
        campoContrasena.value = "";
    })
    
    
    

        
        
        
        
