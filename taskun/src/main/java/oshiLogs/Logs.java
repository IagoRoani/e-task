/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package oshiLogs;

import com.mycompany.oshente.CPU;
import com.mycompany.oshente.HD;
import com.mycompany.oshente.RAM;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.HardwareAbstractionLayer;

/**
 *
 * @author buna_
 */
public class Logs {
    public static void main(String[] args) throws FileNotFoundException, IOException{
        
        FileOutputStream arquivo = new FileOutputStream("log.txt"); //Criando o TXT
        PrintWriter escreva = new PrintWriter(arquivo); //Escrevendo no TXT
        
        Date dataAtual = new Date();  //Pegar data e hora atual
        dataAtual.getTime(); //Metódo
  
        FileOutputStream arquivoHard = new FileOutputStream("logHardware.txt"); //Criando um TXT para armazenar infos do hardware
        PrintWriter escreva01 = new PrintWriter(arquivoHard); // escrevendo no txt de hardware
                
            // log Disco        
        FileOutputStream arquivoDisk = new FileOutputStream("logDisco.txt");
        PrintWriter escreva02 = new PrintWriter(arquivoDisk);
        
        //log GPU 
        FileOutputStream arquivoGPU = new FileOutputStream("logGPU.txt");
        PrintWriter escreva03 = new PrintWriter(arquivoGPU);
        
        //log HD 
        FileOutputStream arquivoHD = new FileOutputStream("logHD.txt");
        PrintWriter escreva04 = new PrintWriter(arquivoHD);
        
    try{
        SystemInfo si = new SystemInfo();
        HardwareAbstractionLayer hal = si.getHardware();
        CentralProcessor cpu = hal.getProcessor();
        CPU cpu1 = new CPU();
        RAM ram = new RAM();
        HD hd = new HD();
        
        
        escreva.println(String.format("Operacao recuperada com sucesso %s", dataAtual)); //Mensagem de sucesso
        escreva02.println(String.format("%s", dataAtual + " Procentagem de uso: " + ram.getDesempenhoMemoria()));
        escreva04.println(String.format("%s", dataAtual + " Porcentagem de uso: " + hd.getPorcentagemDisponivel()));
        escreva01.println(String.format("%s", dataAtual + "Porcentagem de uso: " + cpu1.getDesempenho())); //Simule um erro e a mensagem será outra    
        escreva.close();
        escreva01.close();
        escreva02.close();
        escreva04.close();
        

    }catch (Exception e){
        escreva.println("Error ao recuperar informacoes : " + dataAtual +"\n");//.printStackTrace());
        e.printStackTrace(escreva); //Sugestão do Gerson
        escreva.close();
        escreva01.close();
        escreva02.close();
        escreva04.close();
        
    }

    }

}
