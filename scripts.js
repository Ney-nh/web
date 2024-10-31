function guardarDatosDonante() {
    const nombre = document.getElementById('nombreDonante').value;
    const curso = document.getElementById('cursoDonante').value;
    const alimento = document.getElementById('alimentoDonante').value;

    const datos = `Nombre: ${nombre}\nCurso: ${curso}\nAlimento: ${alimento}\n\n`;

    const blob = new Blob([datos], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'datos_donante.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Datos de donante guardados como datos_donante.txt');
}

function guardarDatosRetirante() {
    const nombre = document.getElementById('nombreRetiro').value;
    const curso = document.getElementById('cursoRetiro').value;
    const alimento = document.getElementById('alimentoRetiro').value;

    const datos = `Nombre: ${nombre}\nCurso: ${curso}\nAlimento: ${alimento}\n\n`;

    const blob = new Blob([datos], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'datos_retirante.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Datos de retirante guardados como datos_retirante.txt');
}

document.getElementById('guardarDonante').addEventListener('click', guardarDatosDonante);
document.getElementById('guardarRetiro').addEventListener('click', guardarDatosRetirante);