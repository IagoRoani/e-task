/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.oshente;

import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

/**
 *
 * @author pedro
 */
public class OS {
    public OperatingSystem os;
    public  HardwareAbstractionLayer hal;

    public OS() {
        os = new SystemInfo().getOperatingSystem();
        hal = new SystemInfo().getHardware();
    }
    public String getOS(){        
        return String.format("%s %s %s", os.getManufacturer(),os.getFamily(),os.getVersionInfo().getVersion() );
    }
    public String getNomePC(){
        return os.getNetworkParams().getDomainName();
    }
    
    public String getBitness(){
        return String.valueOf(os.getBitness());
    }
    
    public String getUptime() {
        return String.valueOf(FormatUtil.formatElapsedSecs(os.getSystemUptime())).replaceAll(" days, ", ":");
    }
    
    
    
}
