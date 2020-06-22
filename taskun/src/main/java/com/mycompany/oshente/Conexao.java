package com.mycompany.oshente;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Timer;
import java.util.TimerTask;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexao {

    // jdbc:sqlserver://srvetask.database.windows.net:1433;database=bdEtask;user=etask@srvetask;password={your_password_here};encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;
    // "com.mysql.cj.jdbc.Driver";
    //"jdbc:mysql://localhost:3306/e_task?useTimezone=true&serverTimezone=UTC";
    public static Connection conect = null;
    private String drive = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
    private String url = "jdbc:sqlserver://srvetask.database.windows.net:1433;database=bdEtask;user=etask@srvetask;password=#Gfgrupo5";
    private String user = "etask@srvetask";
    private String password = "#Gfgrupo5;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;";
    private PreparedStatement pst = null;

    private OS os = new OS();
    private CPU cpu = new CPU();
    private RAM ram = new RAM();
    private GPU gpu = new GPU();
    private HD hd = new HD();

    // atributos para pegar os dados para a tabela Maquinas.
    private Integer id_MaquinaUpdate;
    private String nomeMaq;
    private String sistemOpera;
    private String tipoSistema;

    private String modeloCPU;
    private String memoriaRAM;
    private String mRAMUtilizavel;
    private String tipoMemoriaRAM;
    private String velocidadeRAM;

    private String modeloHD;
    private String discoHD;
    private String hdETipo;
    private String utilizavelHD;
    private String disponivelHD;

    private String modeloGPU;
    private String memoriaGPU;
    private String versaoGPU;

    long TEMPO1 = (1000);

    private Timer timer = new Timer();

    private TimerTask chamandoEnviarDadosDash = new TimerTask() {
        @Override
        public void run() {
            addDadoTblDashboard();
        }
    };

    public Conexao() {
        System.out.println("Conectando ao banco");
        try {
            Class.forName(this.getDrive());

            conect = DriverManager.getConnection("jdbc:sqlserver://srvetask.database.windows.net:1433;databaseName=bdEtask", "etask@srvetask", "#Gfgrupo5");

            // conect = DriverManager.getConnection(url, user, password);
            System.out.println("Conectado com sucesso!");

        } catch (ClassNotFoundException e) {
            System.out.println("Classe não encontrada, adcionar driver nas bibliotecas");
            Logger.getLogger(Conexao.class.getName()).log(Level.SEVERE, null, e);

        } catch (SQLException ex) {

            System.out.println("Falha na conexão");
            System.out.println(ex);
            throw new RuntimeException();
        }

        //INICIANDO VARIAVEIS
        sistemOpera = os.getOS();
        nomeMaq = os.getNomePC();
        tipoSistema = os.getBitness();
        //CPU
        modeloCPU = cpu.getProcessador();
        //RAM
        memoriaRAM = ram.getTotalMemoria();
        mRAMUtilizavel = ram.getUtilizavel();
        tipoMemoriaRAM = ram.getTipoMemoria();
        velocidadeRAM = ram.getClockSpeed();
        //HD
        modeloHD = hd.getNomeModelo() + hd.getSizeDisk();
        discoHD = hd.getDiscoAlocado();
        hdETipo = hd.getTipoSADisco();
        utilizavelHD = hd.getDiscosTotalUtilizavel();
        disponivelHD = hd.getDiscosTotalDisponivel();
        //GPU
        modeloGPU = gpu.getNomePlaca();
        memoriaGPU = gpu.getRAM();
        versaoGPU = gpu.getVersaoGPU();

        timer.scheduleAtFixedRate(chamandoEnviarDadosDash, TEMPO1, TEMPO1);
    }

    public void addDadoTblMaquinas() {
        try {

            Statement stmt = conect.createStatement();

            String sqlInsert = "";

            sqlInsert = String.format("INSERT INTO Maquina "
                    + "(nome_Maquina, sistema_Operacional, tipo_sistema,cpu_modelo, memoria_ram_total,memoria_ram_utilizavel,tipo_memoria_ram, velocidade_memoria_ram,"
                    + "hd_modelo,hd_disco, hd_e_tipo, hd_utilizavel, hd_disponivel, modelo_gpu, memoria_gpu, version_gpu) "
                    + " VALUES ('%s','%s','%s','%s',%s,%s,'%s',%s,'%s','%s','%s',%s,%s,'%s','%s','%s');",
                    this.getNomeMaq(), this.getSistemOpera(), this.getTipoSistema(), this.getModeloCPU(), this.getMemoriaRAM(), this.getmRAMUtilizavel(), this.getTipoMemoriaRAM(), this.getVelocidadeRAM(),
                    this.getModeloHD(), this.getDiscoHD(), this.getHdETipo(), this.getUtilizavelHD(), this.getDisponivelHD(), this.getModeloGPU(), this.getMemoriaGPU(), this.getVersaoGPU());
//  
            //sqlInsert = "insert into teste (nome) values ('"+this.getModeloCPU()+"')";
            stmt.executeUpdate(sqlInsert);
            System.out.println("valor adicionado");

        } catch (SQLException e) {
            System.out.println("Não foi possivel adicionar o valor");
            System.out.println(e);
        }
    }

    public void atualizarDadoTblMaquinas() {
        try {
            Statement stmt = conect.createStatement();

            String sqlAtualizar = "";

            sqlAtualizar = String.format("UPDATE Maquina SET sistema_Operacional = '%s', tipo_sistema = '%s', cpu_modelo = '%s', memoria_ram_total = %s, memoria_ram_utilizavel = %s"
                    + ", tipo_memoria_ram = '%s', velocidade_memoria_ram = %s, hd_modelo = '%s',hd_disco = '%s',  hd_e_tipo = '%s',  hd_utilizavel = %s, hd_disponivel = %s, modelo_gpu = '%s',  memoria_gpu = '%s', version_gpu = '%s'"
                    + " where id_Maquina = %s;", this.getSistemOpera(), this.getTipoSistema(), this.getModeloCPU(), this.getMemoriaRAM(), this.getmRAMUtilizavel(), this.getTipoMemoriaRAM(), this.getVelocidadeRAM(),
                    this.getModeloHD(), this.getDiscoHD(), this.getHdETipo(), this.getUtilizavelHD(), this.getDisponivelHD(), this.getModeloGPU(), this.getMemoriaGPU(), this.getVersaoGPU(), this.getId_MaquinaUpdate());

            int updateCount = stmt.executeUpdate(sqlAtualizar);

            System.out.println("Banco atualizado!");
            System.out.println(updateCount + " linhas atualizadas");

        } catch (Exception e) {
            System.out.println("Não foi possivel atualizar dados");
            System.out.println(e);
        }
    }

    private Statement stmtUpdate() throws SQLException {
        Statement stmt = conect.createStatement();
        return stmt;
    }

    public boolean verificarDadoTabela() {

        boolean dadoExiste = false;
        ResultSet rs;
        try {

            ResultSet result;

            String sqlSelect = "";

            sqlSelect = String.format("SELECT id_Maquina FROM Maquina WHERE nome_Maquina ='%s';", this.getNomeMaq());

            pst = conect.prepareStatement(sqlSelect);
            rs = stmtUpdate().executeQuery(sqlSelect);
            while (rs.next()) {
                Integer id = rs.getInt("id_Maquina");
                id_MaquinaUpdate = id;
            }

            pst.execute(); //ps.getResultSet();

            result = pst.getResultSet();

            if (result.next()) {
                dadoExiste = true;
                System.out.println(pst.getResultSet());
            } else {
                dadoExiste = false;
                System.out.println("Este dado não existe!");

            }

        } catch (ExceptionInInitializerError e) {

            System.out.println("Erro!" + e.getMessage());
            System.out.println(e);
            System.out.println(dadoExiste);

        } catch (SQLException ex) {
            System.out.println("Erro SQL" + ex.getMessage());
            System.out.println(ex);
        }

        return dadoExiste;
    }

    public void addDadoTblDashboard() {
        System.out.println("\nDashboard");
        try {
            String sqlInsert = "";
            sqlInsert = String.format("INSERT INTO Dashboard"
                    + "(data_Registro, desempenho_cpu,velocidade_cpu,threands,processos,desempenho_ram,"
                    + "disponivel_ram,ocupado_hd,tempo_hd,desempenho_GPU,fk_Maquina) "
                    + "VALUES ('%s', %s,%s, %s, %s, %s,%s, %s,%s, %s,%s);",
                    os.getUptime(), cpu.getDesempenho(), cpu.getClockSpeedAtual(), cpu.getThreads(), cpu.getProcesses(),
                    ram.getDesempenhoMemoria(), ram.getDisponivel(), hd.getPorcentagemOcupada(), hd.getTempoTransferencia(os.hal.getDiskStores()),
                    gpu.getDesempenho(), this.id_MaquinaUpdate);

            pst = conect.prepareStatement(sqlInsert);
            pst.execute();
            System.out.println("Valor adicionado na Dashboard");
            System.out.println(os.getUptime());

            // System.out.println(contador);
            // System.out.println(resultadoDivisao);
        } catch (SQLException e) {
            String sqlInsert = "";
            sqlInsert = String.format("INSERT INTO Dashboard"
                    + "(data_Registro, desempenho_cpu,velocidade_cpu,threands,processos,desempenho_ram,"
                    + "disponivel_ram,ocupado_hd,tempo_hd,desempenho_GPU,fk_Maquina) "
                    + "VALUES ('%s', %s,%s, %s, %s, %s,%s, %s,%s, %s,%s);",
                    os.getUptime(), cpu.getDesempenho(), cpu.getClockSpeedAtual(), cpu.getThreads(), cpu.getProcesses(),
                    ram.getDesempenhoMemoria(), ram.getDisponivel(), hd.getPorcentagemOcupada(), hd.getTempoTransferencia(os.hal.getDiskStores()),
                    gpu.getDesempenho(), this.id_MaquinaUpdate);
            System.out.println(sqlInsert);
            System.out.println("Não foi possivel adicionar o valor");
            System.out.println(e.getMessage());
        }
    }

    //GETs 
    public static Connection getConect() {
        return conect;
    }

    public String getDrive() {
        return drive;
    }

    public String getUrl() {
        return url;
    }

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }

    public PreparedStatement getPst() {
        return pst;
    }

    //TABELAS
    public OS getOs() {
        return os;
    }

    public CPU getCpu() {
        return cpu;
    }

    public RAM getRam() {
        return ram;
    }

    public GPU getGpu() {
        return gpu;
    }

    public HD getHd() {
        return hd;
    }

    public Integer getId_MaquinaUpdate() {
        return id_MaquinaUpdate;
    }

    public String getNomeMaq() {
        return nomeMaq;
    }

    public String getSistemOpera() {
        return sistemOpera;
    }

    public String getTipoSistema() {
        return tipoSistema;
    }

    public String getModeloCPU() {
        return modeloCPU;
    }

    public String getMemoriaRAM() {
        return memoriaRAM;
    }

    public String getmRAMUtilizavel() {
        return mRAMUtilizavel;
    }

    public String getTipoMemoriaRAM() {
        return tipoMemoriaRAM;
    }

    public String getVelocidadeRAM() {
        return velocidadeRAM;
    }

    public String getModeloHD() {
        return modeloHD;
    }

    public String getDiscoHD() {
        return discoHD;
    }

    public String getHdETipo() {
        return hdETipo;
    }

    public String getUtilizavelHD() {
        return utilizavelHD;
    }

    public String getDisponivelHD() {
        return disponivelHD;
    }

    public String getModeloGPU() {
        return modeloGPU;
    }

    public String getMemoriaGPU() {
        return memoriaGPU;
    }

    public String getVersaoGPU() {
        return versaoGPU;
    }

    public long getTEMPO1() {
        return TEMPO1;
    }

    public Timer getTimer() {
        return timer;
    }

    public TimerTask getChamandoEnviarDadosDash() {
        return chamandoEnviarDadosDash;
    }

}
