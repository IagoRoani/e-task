function dadosMaquina(id) {
    axios.get("../maquinas/nome-maquina/"+id).then(m => {
        var maq = m.data[0];
        console.log(maq);
        localStorage.setItem("nameMaquina", maq.nome_Maquina);
        //OS
        sistemaOperacional.innerHTML = maq.sistema_Operacional;
        nomeMaquina.innerHTML = maq.nome_Maquina;
        tipoOS.innerHTML = ` ${maq.tipo_sistema} bits `;

        //CPU
        modeloCPU.innerHTML = maq.cpu_modelo;
        // RAM
        memoriaRAM.innerHTML = ` ${maq.memoria_ram_total.toFixed(1)} GB`;
        tipoRAM.innerHTML = maq.tipo_memoria_ram;
        velocidadeRAM.innerHTML = `${maq.velocidade_memoria_ram.toFixed(1)} GHz`;
        utilizavelRAM.innerHTML = ` ${maq.memoria_ram_utilizavel.toFixed(1)} GB `;
        //HD
        modeloHD.innerHTML = maq.hd_modelo;
        discoHD.innerHTML = maq.hd_disco;
        tipoHD.innerHTML = maq.hd_e_tipo;
        utilizavelHD.innerHTML = ` ${maq.hd_utilizavel} GB `;
        disponivelHD.innerHTML = ` ${maq.hd_disponivel} GB `;
        //GPU
        modeloGPU.innerHTML = maq.modelo_gpu;
        versaoGPU.innerHTML = maq.version_gpu;
        memoriaGPU.innerHTML = ` ${maq.memoria_gpu.toFixed(1)} GB `;
    });
}



 
 
 
 
 
 
 
 
 