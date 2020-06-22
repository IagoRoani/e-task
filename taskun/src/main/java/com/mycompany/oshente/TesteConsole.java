/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.oshente;
/**
 *
 * @author pedro
 */
public class TesteConsole {

    public static void main(String[] args) {
        OS os = new OS();
        CPU cpu = new CPU();
        RAM ram = new RAM();
        HD hd = new HD();
        GPU gpu = new GPU();

        System.out.println("\nTabela Maquina: ");
        System.out.println("\nOS ---\n");
        System.out.println(os.getOS());
        System.out.println(os.getNomePC());
        System.out.println(os.getBitness() + " bits");

        //http://oshi.github.io/oshi/apidocs/oshi/SystemInfo.html
        System.out.println("\nCPU --- \n");
        System.out.println(cpu.getProcessador());
        System.out.println(cpu.getClockSpeedAtual()+ " GHz");

        System.out.println("\nRAM ---\n");
        System.out.println(ram.getTotalMemoria() + " GB");
        System.out.println(ram.getUtilizavel() + " GB");

        System.out.println(ram.getTipoMemoria());
        System.out.println(ram.getClockSpeed() + " GHz");

        System.out.println("\nDisco Rigido ----\n");

        System.out.print(hd.getNomeModelo());
        System.out.println(hd.getSizeDisk());
        System.out.println(hd.getDiscoAlocado());
        System.out.println(hd.getTipoSADisco());

        System.out.println("Disponível: " + hd.getDiscosTotalDisponivel() + " GB");
        System.out.println("Utilizável: " + hd.getDiscosTotalUtilizavel() + " GB");  
        
        System.out.println("\nGPU --- ");
        System.out.println(gpu.getNomePlaca());
        System.out.println("Versão: "+gpu.getVersaoGPU());
        System.out.println(gpu.getRAM()+ " GB");

        System.out.println("Tabela Dashboard:");
        System.out.println("\nCPU ---");
        System.out.println(os.getUptime());
        System.out.println(cpu.getDesempenho() + " %");
        System.out.println("Velocidade base: " + cpu.getClockSpeedAtual() + "");
        System.out.println("Threands: " + cpu.getThreads());
        System.out.println("Threands: " + cpu.getProcesses());

        System.out.println("\nRAM ---");
        System.out.println(ram.getDisponivel() + " GB");
        System.out.println(ram.getDesempenhoMemoria() + " %");

        System.out.println("\nHD ---");
        System.out.println(hd.getPorcentagemOcupada() + " %");
        System.out.println(hd.getTempoTransferencia(os.hal.getDiskStores()));
        
        System.out.println("\nGPU --- ");
        System.out.println(gpu.getDesempenho());
    }
}
