class RepeatDpsView extends View{
    
    constructor(elemento){
        
        super(elemento)
    }
    
    template(model){
        
        return `
        <form>
            <div class="form-row">
                <div class="form-group col">
                    <label for="repeat-problema">Problema atual</label>
                    <select class="custom-select" size="3" id="repeat-problema" required title="Problema atual do equipamento">
                        <option value="3rd Party Hardware">3rd Party Hardware</option>
                        <option value="3rd Party Software">3rd Party Software</option>
                        <option value="Audio Issues">Audio Issues</option>
                        <option value="Battery Related">Battery Related</option>
                        <option value="BIOS Issues">BIOS Issues</option>
                        <option value="BIOS or HDD Passwords">BIOS or HDD Passwords</option>
                        <option value="Bluetooth">Bluetooth</option>
                        <option value="BSOD &amp; Random Shutdown">BSOD &amp; Random Shutdown</option>
                        <option value="Dell Applications">Dell Applications</option>
                        <option value="Dell Mobile Connect">Dell Mobile Connect</option>
                        <option value="Dell SupportAssist">Dell SupportAssist</option>
                        <option value="Dell SupportAssist / AWCC">Dell SupportAssist / AWCC</option>
                        <option value="Docking Stations">Docking Stations</option>
                        <option value="Driver Issues">Driver Issues</option>
                        <option value="Exception Request (TM &amp; Above)">Exception Request (TM &amp; Above)</option>
                        <option value="Gaming Related">Gaming Related</option>
                        <option value="HDD Issues">HDD Issues</option>
                        <option value="Input Devices">Input Devices</option>
                        <option value="Keyboard">Keyboard</option>
                        <option value="Monitor Issues">Monitor Issues</option>
                        <option value="MS Office Issues">MS Office Issues</option>
                        <option value="Networking Issues">Networking Issues</option>
                        <option value="No Boot">No Boot</option>
                        <option value="No Post">No Post</option>
                        <option value="No Power">No Power</option>
                        <option value="No Video">No Video</option>
                        <option value="Noise Issues">Noise Issues</option>
                        <option value="ODD Issues">ODD Issues</option>
                        <option value="OS Issues">OS Issues</option>
                        <option value="Other - General">Other - General</option>
                        <option value="Other - Dell Hardware">Other - Dell Hardware</option>
                        <option value="Other Dell Applications">Other Dell Applications</option>
                        <option value="Performance Issues">Performance Issues</option>
                        <option value="Sleep/Hibernation Issues">Sleep/Hibernation Issues</option>
                        <option value="Thermal Issues">Thermal Issues</option>
                        <option value="Touchpad">Touchpad</option>
                        <option value="Video Issues">Video Issues</option>
                        <option value="Webcam Related">Webcam Related</option>
                        <option value="Windows Hello">Windows Hello</option>
                        <option value="Windows Update">Windows Update</option>
                    </select>
                </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="repeat-temperatura">Temperatura do cliente</label>
                    <input id="repeat-temperatura" type="text" required placeholder="Neutro / Impactado" class="form-control form-control-sm" title="Descreva o humor do cliente">
                </div>
                <div class="form-group col">
                    <label for="repeat-sr">SR</label>
                    <input id="repeat-sr" type="number" required placeholder="0000000000" min="100000000" max="9999999999" required class="form-control form-control-sm">
                </div>
                <div class="form-group col">
                    <label for="repeat-idade-sr">Idade da SR</label>
                    <div class="input-group input-group-sm mb-3">
                        <input id="repeat-idade-sr" type="number" class="form-control" placeholder="100" aria-label="Dias de atendimento" aria-describedby="basic-addon2" required>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Day (s)</span>
                        </div>
                    </div>
                </div>
                <div class="form-group col">
                    <label for="repeat-owner">Owner do caso</label>
                    <input id="repeat-owner" type="text" required placeholder="FULANO_DE_TAL" class="form-control form-control-sm" title="Login de Citrix do owner" value="${localStorage.getItem('login') || ''}">
                </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="repeat-tag">TAG</label>
                    <input id="repeat-tag" type="text" required placeholder="XXXXXX2" class="form-control form-control-sm" title="Entre com a TAG da máquina">
                </div>
                <div class="form-group col">
                    <label for="repeat-modelo">Modelo</label>
                    <input type="text" id="repeat-modelo" required placeholder="Dell G3", class="form-control form-control-sm" title="Entre com o nome do modelo">
                </div>
                <div class="form-group col">
                    <label>   </label>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="repeat-garantia" checked>
                        <label class="custom-control-label" for="repeat-garantia">Em garantia?</label>
                      </div>
                </div>
                <div class="form-group col">
                    <label for="repeat-idade-maquina">Idade da máquina</label>
                    <div class="input-group input-group-sm mb-3">
                        <input id="repeat-idade-maquina" type="number" class="form-control" placeholder="00" aria-label="Dias de máquina" aria-describedby="basic-addon2" required>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Day (s)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="release-resumo">Resumo do caso</label>
                    <textarea id="release-resumo" cols="30" rows="10" required class="form-control form-control-sm">Era uma vez...</textarea>
                </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="release-analise">Analise do L2</label>
                    <input type="text" id="release-analise" class="form-control form-control-sm">
                </div>
            </div>
            <div class="dropdown-divider"></div>
            
            //Aqui falta colocar um método de adicionar DPSs
            <button type="submit" class="btn btn-outline-primary">Gerar template e copiar</button>
        </form>
        `
    }
}