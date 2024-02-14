const codificador = () => {

    let codific = document.getElementById('ingresarDatos').value;
    const clave = ['e', 'i', 'a', 'o', 'u'];
    const valor = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    for (let i = 0; i < clave.length; i++) {
        if (codific.includes(clave[i])) {
            codific = codific.split(clave[i]).join(valor[i]);
        }
    }
    accionBotones(codific)
};

const decodificador = () => {
    let decodific = document.getElementById('ingresarDatos').value;
    const clave = ['e', 'i', 'a', 'o', 'u'];
    const valor = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    for (let i = 0; i < clave.length; i++) {
        if (decodific.includes(valor[i])) {
            decodific = decodific.split(valor[i]).join(clave[i]);
        }
    }

    accionBotones(decodific)
};

accionBotones = (texto) =>{
        document.getElementById('muneco').style.display = "none";
    document.getElementById('sinResultado').style.display = "none";
    document.getElementById('indicacion').style.display = "none";
    document.getElementById('resultadoMensaje').textContent = texto;
    document.getElementById('resultadoMensaje').style.display = "";
    document.getElementById('botonCopiar').style.display = "";
}

copiar = () =>{
    let texto = document.getElementById('resultadoMensaje').textContent;
    const copiarContenido = async () => {
        try {
            await navigator.clipboard.writeText(texto);
            alert('Contenido copiado al portapapeles');
        } catch (err) {
            alert('Error al copiar: ', err);
        }
    }
    copiarContenido();    
}
