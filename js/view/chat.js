function validaNome() {
    
    if(!localStorage.getItem('analista')){
        localStorage.setItem('analista', prompt("Seu nome", localStorage.getItem('analista')));
        localStorage.setItem('entrada', prompt("Horário de entrada", localStorage.getItem('entrada')));
        localStorage.setItem('saida', prompt("Horário de saída", localStorage.getItem('saida')));
        validaNome()
    }else if(localStorage.getItem('analista') == "null"){
        localStorage.setItem('analista', prompt("Seu nome", localStorage.getItem('analista')));
        localStorage.setItem('entrada', prompt("Horário de entrada", localStorage.getItem('entrada')));
        localStorage.setItem('saida', prompt("Horário de saída", localStorage.getItem('saida')));
        validaNome()
    }
}
validaNome()
desenhaSemDps()

function desenhaChat(){
    {//desenha chat
        tela.classList.forEach(classe => { tela.classList.remove(classe) })
        tela.classList.add("chat")
        
        chatView = []
        
        chat.forEach(p => {
            chatView.push(`
            <fieldset>
            <legend>${p.periodo}<i class="material-icons">swap_vert</i></legend>
            <div class="ctn-collapsable">
            ${p.categoria.map(c => {
                return `
                <div class="container">
                <h3>${c.nome}</h3>
                ${c.scripts.map(s => {
                    if (s.input.length != 0) {
                        return `
                        <div class="card">
                        <div class="card-header">
                        ${s.titulo}
                        ${s.input.map(i => {
                            return `<input id="${s.id}" value="${i}" placeholder="${s.input}">`
                        }).join("")}
                        </div>
                        <div class="card-body script">
                        ${s.texto}
                        </div>
                        </div>
                        `
                    }
                    return `
                    <div class="card">
                    <div class="card-header">
                    ${s.titulo}
                    </div>
                    <div class="card-body script">
                    ${s.texto}
                    </div>
                    </div>
                    `
                }).join("")}
                </div>`
            }).join("")}
            </div>
            </fieldset>`)
        });
        
        tela.innerHTML = `        
        <section class="scripts">
        <div class="accordion" id="accordionExample">
        <div class="card">
        <div class="card-header" id="headingOne">
        <h2 class="mb-0">
        <button class="btn btn-link tgl-anotacoes" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Anotações
        <i class="material-icons">swap_vert</i>
        </button>
        </h2>
        </div>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body clp-anotacoes">
        <textarea class="anotacoes container" placeholder="Anotações..."></textarea>
        <button class="btn" onclick="cpAnotacao()">Copiar tudo</button>
        </div>
        </div>
        </div>
        
        <div class="card">
        <div class="card-header" id="headingTwo">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Scripts 4.0
        <i class="material-icons">swap_vert</i>
        </button>
        </h2>
        </div>
        <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
        <div class="card-body clp-scripts">
        ${chatView.join("")}
        </div>
        </div>
        </div>
        
        <div class="card">
        <div class="card-header" id="headingThree">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Personalizado
        <i class="material-icons">swap_vert</i>
        </button>
        </h2>
        </div>
        <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
        <div class="card-body clp-personalizado">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </div>
        </div>
        </div>
        </div>
        </section>
        `
        
        document.querySelector("footer").innerHTML = ``
    }
    {//Copiar com duplo click
        const ctnCopiado = document.createElement('div')
        ctnCopiado.classList.add('ctn-copiado')
        document.querySelector(".chat").append(ctnCopiado)
        
        let copiado = document.createElement("div")
        copiado.classList.add("alert", "alert-info")
        copiado.textContent = "Copiado";
        
        document.querySelectorAll(".script").forEach(s => {
            s.addEventListener("dblclick", function(){
                let selecionado = document.createElement('textarea')
                selecionado.value = this.innerText
                selecionado.style = "transform: translateY(999999999999px);"
                document.body.appendChild(selecionado)
                selecionado.select(); //Só funciona em campo de texto
                document.execCommand('copy')
                document.querySelector(".ctn-copiado").append(copiado)
                setTimeout(() => {
                    ctnCopiado.removeChild(copiado)
                }, 2000)
            })
        })
        $(".clp-scripts legend").click(function () {
            $('.clp-scripts .ctn-collapsable').toggle()
        })
        document.querySelectorAll(".card-header input").forEach(i => {
            i.addEventListener("blur", () => {
                alteraDado(i.value, i.id)
                desenhaChat()
            })
        })
    }
    {//Anotação
        document.querySelector(".anotacoes").textContent = sessionStorage.getItem("anotacao")
        
        document.querySelector(".anotacoes").addEventListener("input", () => {
            return sessionStorage.setItem("anotacao", document.querySelector(".anotacoes").value)
        })
        
        document.querySelector(".tgl-anotacoes").addEventListener("click", () => {
            setTimeout(() => {
                document.querySelector(".anotacoes").focus()
            }, 10)
        })
    }
}

function cpAnotacao() {
    document.querySelector(".anotacoes").select()
    document.execCommand('copy')
}

function alteraDado(dado, id) {
    localStorage.setItem(id, dado)
    console.log(`Dado ${dado} altado com id ${id}`)
    location.reload()
}