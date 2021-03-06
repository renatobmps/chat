function desenhaSemDps() {
    document.head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat | Sem DPS</title>
    <link rel="icon" href="img/logo.png">
    <link rel="shotcut icon" href="img/logo.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    `
    tela.innerHTML = `
    <div class="container">
        <form onsubmit="semDps.adiciona(event)">
            <div class="form-row">
                <div class="form-group col">
                    <label for="login">Owner Login</label>
                    <input type="text" class="form-control form-control-sm" id="login" required placeholder="Fulano_XX" pattern="[&quot;A-Za-z0-9_&quot;]{5,20}" title="login de Citrix">
                </div>
                <div class="form-group col">
                    <label for="caso">Case</label>
                    <input type="number" class="form-control form-control-sm" id="caso" required placeholder="XXXXXXXX" pattern="[&quot;0-9&quot;]{8}" title="8 dígitos" maxlength="8">
                </div>
                <div class="form-group col">
                    <label for="data">Data</label>
                    <input type="date" class="form-control form-control-sm" id="data" required placeholder="XX/XX/XXXX" type="date" maxlength="8">
                </div>
                <div class="form-group col">
                    <label for="artigo">Oracle ID</label>
                    <input type="text" class="form-control form-control-sm" id="artigo" required placeholder="SLNXXXXXX" pattern="[&quot;A-Z0-9&quot;]{9}" title="SLN, PNP, HOW, LNK... usado" maxlength="9">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="motivo">Motivo da não abertura do DPS</label>
                    <textarea class="form-control form-control-sm" id="motivo" required placeholder="Cliente fazendo as atualizações pendentes do windows update"></textarea>
                </div>
                <div class="form-group col">
                    <label for="problema">Problema</label>
                    <select class="custom-select" size="2" id="problema" required placeholder="Teclado numérico não funciona">
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
            <div class="form-row">
                <div class="form-group">
                    <button type="submit" class="btn btn-sm btn-primary">Gerar registro</button>
                </div>
            </div>
        </form>
    </div>
    <div class="container" id="semDpsView">
        <!--Table view-->
    </div>
    <div class="container">
        <button onclick="semDps.limpa()" class="btn btn-sm btn-outline-secondary">Limpar tabela</button>
    </div>
    `

    new SemDpsController();
}