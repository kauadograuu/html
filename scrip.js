function atualizarflelogico() (
    const relogio = document.getElementById('relogio')
    //aqui colocar no elemento do id do relogio
    const agora = new Date();
    agora.setHours(agora.getHours()-3)
    //essa linha serve para definir o fuso horario
    const horas = String(agora.getHours()).padStart(2,'0');
    const minutos = String(agora.getminutes()).padStart(2,'0');
    const segundos = String(agora.getsegundos()).padStart(2,'0');
    relogioElement.textContent = `${horas}:${minutos}:${segundos} `
)