function desenhaGoodLines() {
    document.head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat | 5 Good Lines</title>
    <link rel="icon" href="img/icone_sitel.png">
    <link rel="shotcut icon" href="img/icone_sitel.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    `
    tela.innerHTML = `
    <div class="container">
        <form onsubmit="goodLines.adiciona(event)">
            <div class="form-group">
                <label for="diag">Diag</label>
                <select id="diag" class="custom-select" size="3" required>
                    <option value="ePSA">Epsa</option>
					<option value="32 Bits Diagnostics">32 Bits Diagnostics</option>
					<option value="Alien Autopsy">Alien Autopsy</option>
					<option value="Dell Online Diagnostics">Dell Online Diagnostics</option>
					<option value="FPD Bist">FPD Bist</option>
					<option value="LCD Bist">LCD Bist</option>
					<option value="Led Indicators">Led Indicators</option>
					<option value="MemRX">MemRX</option>
					<option value="MpMemory">MpMemory</option>
					<option value="PC Doctor">PC Doctor</option>
					<option value="PSA">PSA</option>
					<option value="PSU Bist">PSU Bist</option>
					<option value="Quad-Pack Leds">Quad-Pack Leds</option>
					<option value="Tools not Needed">Tools not Needed</option>
                </select>
            </div>
            <div class="form-group">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="code" id="code-passed" value="Passed">
                    <label class="form-check-label" for="code-passed">Passed</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="code" id="code-failed" value="Failed" checked>
                    <label class="form-check-label" for="code-failed">Failed</label>
                </div>
            </div>
            <div class="form-group">
                Colocar padrão de ePSA aqui...
            </div>
            <div class="form-group">
                <label for="quantidade">DPS</label>
                <select id="quantidade" class="custom-select" size="3" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="form-group">
                <label for="sintoma">Sintoma</label>
                <input type="text" class="form-control form-control-sm" id="sintoma" required placeholder="Sintoma do equipamento">
            </div>
            <div class="form-group">Mágica do special line</div>
            <div class="form-group">
                <label for="instrucao">Instrução ao técnico</label>
                <textarea id="instrucao" cols="30" rows="3" class="form-control form-control-sm" required placeholder="Senhor técnico, por favor trocar...">Senhor técnico, por favor trocar ...</textarea>
            </div>
            <button type="submit" class="btn btn-primary">Gerar e copiar</button>
        </form>
    </div>
    <div class="container" id="goodLinesView">
        <!--TextArea view-->
    </div>
    `

    new GoodLinesController();
}