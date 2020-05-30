analista = {
    nome: localStorage.getItem('analista') || "PREENCHER",
    entrada: localStorage.getItem('entrada') || "PREENCHER",
    saida: localStorage.getItem('saida') || "PREENCHER",
}

cliente = {
    nome: localStorage.getItem('cliente') || "PREENCHER",
    tag: localStorage.getItem('tag') || "PREENCHER",
    telefone: localStorage.getItem('telefone') || "PREENCHER",
    email: localStorage.getItem('email') || "PREENCHER",
}

atendimento = {
    caso: localStorage.getItem('caso') || "PREENCHER",
    remoto: localStorage.getItem('remoto') || "PREENCHER",
    dps: localStorage.getItem('dps') || "PREENCHER",
    cis: localStorage.getItem('cis') || "PREENCHER",
    eticket: localStorage.getItem('eticket') || "PREENCHER",
}