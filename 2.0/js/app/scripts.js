$(function() {
    var cor = ["4CAF50", "0076ce", "3c8dbc", "dd4b39", "f39c12", "605ca8", "00a65a", "1086de"];
    corRandon = cor[Math.floor(Math.random() * cor.length)];
    localStorage.setItem('cor-principal', corRandon);
    
    let cabecalio = document.querySelector(".cabecalio");
    let rodape = document.querySelector(".rodape");
    let entradas = document.querySelectorAll(".cabecalio-nav-lista-configuracoes input");
    
    cabecalio.style.background = "#"+localStorage.getItem('cor-principal');
    rodape.style.background = "#"+localStorage.getItem('cor-principal');
    entradas.forEach(entrada => entrada.style.color = "#"+localStorage.getItem('cor-principal'));
    
    if(!localStorage.getItem('analista')){
        localStorage.setItem('analista', prompt("Seu nome"));
        localStorage.setItem('entrada', prompt("Horário de entrada"));
        localStorage.setItem('saida', prompt("Horário de saída"));
    }
});

$(".troca-script").click(
    function(event){
        event.preventDefault();
        $(".frame").slideToggle()
    }
);
    $(".lista-analista-nome").val(localStorage.getItem('analista'))
    $(".lista-analista-entrada").val(localStorage.getItem('entrada'))
    $(".lista-analista-saida").val(localStorage.getItem('saida'))
    
    
    
    $("#botao-config-analistaS").click(
        
        () => {
            
            $(".entradas-analista").slideToggle();
            
            $(".lista-analista-nome").focus();
            
        }
        
        );
        
        $(".lista-analista-nome").focusout(
            
            () => {
                
                localStorage.setItem('analista', $(".lista-analista-nome").val());
                
                atualizaDados()
                
            }
            
            )
            
            $(".lista-analista-entrada").focusout(
                
                () => {
                    
                    localStorage.setItem('entrada', $(".lista-analista-entrada").val());
                    
                    atualizaDados()
                    
                }
                
                )
                
                $(".lista-analista-saida").focusout(
                    
                    () => {
                        
                        localStorage.setItem('saida', $(".lista-analista-saida").val());
                        
                        $(".entradas-analista").slideToggle();
                        
                        document.location.reload(true);
                        
                    }
                    
                    )
                    
                    
                    
                    
                    
                    
                    
                    $(".lista-cliente-nome").val(localStorage.getItem('cliente'))
                    
                    $(".lista-cliente-tag").val(localStorage.getItem('tag'))
                    
                    $(".lista-cliente-telefone").val(localStorage.getItem('telefone'))
                    
                    $(".lista-cliente-email").val(localStorage.getItem('email'))
                    
                    
                    
                    $("#botao-config-clienteS").click(
                        
                        () => {
                            
                            $(".entradas-cliente").slideToggle();
                            
                            $(".lista-cliente-nome").focus();
                            
                        }
                        
                        );
                        
                        $(".lista-cliente-nome").focusout(
                            
                            () => {
                                
                                localStorage.setItem('cliente', $(".lista-cliente-nome").val());
                                
                            }
                            
                            )
                            
                            $(".lista-cliente-tag").focusout(
                                
                                () => {
                                    
                                    localStorage.setItem('tag', $(".lista-cliente-tag").val());
                                    
                                }
                                
                                )
                                
                                $(".lista-cliente-telefone").focusout(
                                    
                                    () => {
                                        
                                        localStorage.setItem('telefone', $(".lista-cliente-telefone").val());
                                        
                                    }
                                    
                                    )
                                    
                                    $(".lista-cliente-email").focusout(
                                        
                                        () => {
                                            
                                            localStorage.setItem('email', $(".lista-cliente-email").val());
                                            
                                            
                                            
                                            document.location.reload(true)
                                            
                                        }
                                        
                                        )
                                        
                                        
                                        
                                        
                                        
                                        $(".lista-atendimento-caso").val(localStorage.getItem('caso'))
                                        
                                        $(".lista-atendimento-remoto").val(localStorage.getItem('remoto'))
                                        
                                        $(".lista-atendimento-dps").val(localStorage.getItem('dps'))
                                        
                                        //$(".lista-atendimento-eticket").val(localStorage.getItem('eticket'))
                                        
                                        $(".lista-atendimento-cis").val(localStorage.getItem('endereco'))
                                        
                                        
                                        
                                        $("#botao-config-atendimentoS").click(
                                            
                                            () => {
                                                
                                                $(".entradas-atendimento").slideToggle();
                                                
                                                $(".lista-atendimento-caso").focus();
                                                
                                            }
                                            
                                            );
                                            
                                            $(".lista-atendimento-caso").focusout(
                                                
                                                () => {
                                                    
                                                    localStorage.setItem('caso', $(".lista-atendimento-caso").val());
                                                    
                                                    atualizaDados()
                                                    
                                                    document.location.reload(true)
                                                    
                                                }
                                                
                                                )
                                                
                                                $(".lista-atendimento-remoto").focusout(
                                                    
                                                    () => {
                                                        
                                                        localStorage.setItem('remoto', $(".lista-atendimento-remoto").val());
                                                        
                                                        atualizaDados()
                                                        
                                                        document.location.reload(true)
                                                        
                                                    }
                                                    
                                                    )
                                                    
                                                    $(".lista-atendimento-dps").focusout(
                                                        
                                                        () => {
                                                            
                                                            localStorage.setItem('dps', $(".lista-atendimento-dps").val());
                                                            
                                                            atualizaDados()
                                                            
                                                            document.location.reload(true)
                                                            
                                                        }
                                                        
                                                        )
                                                        
                                                        $(".lista-atendimento-cis").focusout(
                                                            
                                                            () => {
                                                                
                                                                localStorage.setItem('endereco', $(".lista-atendimento-cis").val());
                                                                
                                                                $(".entradas-atendimento").slideToggle();
                                                                
                                                                document.location.reload(true)
                                                                
                                                            }
                                                            
                                                            )