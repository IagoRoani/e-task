
var nomeClie = localStorage.getItem("nomeCliente");
var sobrenomeClie = localStorage.getItem("sobrenomeCliente");
var emailClie = localStorage.getItem("emailCliente");
var id = localStorage.getItem("id_Cliente");
nome_user.innerHTML = nomeClie + " " + sobrenomeClie;
email_user.innerHTML = emailClie;

axios.get("../maquinas/nome-maquina/"+id).then(m => {
    var maq = m.data[0];
    console.log(maq);
    

    //OS
    nomeMaquina.innerHTML = maq.sistema_Operacional;
    tipoOS.innerHTML = ` ${maq.tipo_sistema} bits `;

    //CPU
    modeloCPU.innerHTML = maq.cpu_modelo;
    // RAM
    memoriaRAM.innerHTML = ` ${maq.memoria_ram_total.toFixed(1)} GB`;
    //HD
    discoHD.innerHTML = maq.hd_disco;
    utilizavelHD.innerHTML = ` ${maq.hd_utilizavel} GB `;
    disponivelHD.innerHTML = ` ${maq.hd_disponivel} GB `;
    //GPU
    modeloGPU.innerHTML = maq.modelo_gpu;
    versaoGPU.innerHTML = maq.version_gpu;
});