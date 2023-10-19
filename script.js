const button1 = document.getElementById('Cesar');
const button2 = document.getElementById('viggenere');
const cesar = document.getElementById('cesar');
const Viggene = document.getElementById('Viggene');

button1.addEventListener('click', () => {
    camposVacios();
    cesar.style.display = 'block';
    Viggene.style.display = 'none';
});

button2.addEventListener('click', () => {
    camposVacios();
    cesar.style.display = 'none';
    Viggene.style.display = 'block';
});

//////////////////////////////////////////////////////

var iframes = document.querySelectorAll('.iframe');

// Función para enviar información al iframe

function textoIngresado() {
    var info = document.getElementById("textoentrada").value;
    const textoentrada = texto.value;
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].contentWindow.postMessage(info, "*");
    }
}
document.getElementById("Cesar").addEventListener("click", textoIngresado);
document.getElementById("viggenere").addEventListener("click", textoIngresado);

function camposVacios(){
    var texto = document.getElementById("textoentrada").value;

    if (texto == ""){
        alert("El texto a cifrar esta vacio");
    }
}

