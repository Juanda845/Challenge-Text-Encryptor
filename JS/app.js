document.getElementById('btn-encriptar').addEventListener('click', function () {
    const inputTexto = document.getElementById('input-texto').value;
    const textoEncriptado = encriptarTexto(inputTexto);

    if (textoEncriptado) {
        // Mostrar el texto encriptado y habilitar el span y el botón de copiar
        const spanEncriptado = document.getElementById('palabra-encryptada');
        spanEncriptado.innerText = textoEncriptado;
        spanEncriptado.style.display = 'inline';

        const btnCopiar = document.getElementById('btn-copiar');
        btnCopiar.style.display = 'block';

        // Ocultar la imagen, h3, y p
        document.querySelector('.img-output').style.display = 'none';
        document.querySelector('.title-output').style.display = 'none';
        document.querySelector('.parrafo-output').style.display = 'none';
    }
});

document.getElementById('btn-desencriptar').addEventListener('click', function () {
    const inputTexto = document.getElementById('input-texto').value;
    const textoDesencriptado = desencriptarTexto(inputTexto);

    if (textoDesencriptado) {
        // Mostrar el texto desencriptado y habilitar el span y el botón de copiar
        const spanEncriptado = document.getElementById('palabra-encryptada');
        spanEncriptado.innerText = textoDesencriptado;
        spanEncriptado.style.display = 'inline';

        const btnCopiar = document.getElementById('btn-copiar');
        btnCopiar.style.display = 'block';

        // Ocultar la imagen, h3, y p
        document.querySelector('.img-output').style.display = 'none';
        document.querySelector('.title-output').style.display = 'none';
        document.querySelector('.parrafo-output').style.display = 'none';
    }
});

document.getElementById('btn-copiar').addEventListener('click', function () {
    const textoParaCopiar = document.getElementById('palabra-encryptada').innerText;

    navigator.clipboard.writeText(textoParaCopiar)
        .catch(function () {
            console.error('Error al copiar el texto');
        });
});

document.getElementById('btn-limpiar').addEventListener('click', function () {
    // Limpiar el textarea y el span
    document.getElementById('input-texto').value = '';
    document.getElementById('palabra-encryptada').innerText = '';

    // Mostrar la imagen, h3, y p
    document.querySelector('.img-output').style.display = 'block';
    document.querySelector('.title-output').style.display = 'block';
    document.querySelector('.parrafo-output').style.display = 'block';

    // Ocultar el botón de copiar
    document.getElementById('btn-copiar').style.display = 'none';
});

function encriptarTexto(texto) {
    texto = texto.toLowerCase()
        .replace(/[0-9]/g, '')
        .replace(/[!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]/g, '')
        .replace(/[áéíóúÁÉÍÓÚ]/g, '')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    return texto;
}

function desencriptarTexto(texto) {
    texto = texto.toLowerCase()
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    return texto;
}
