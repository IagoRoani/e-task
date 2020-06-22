/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.oshente;

import com.profesorfalken.jsensors.JSensors;
import com.profesorfalken.jsensors.model.components.Components;
import com.profesorfalken.jsensors.model.components.Cpu;
import com.profesorfalken.jsensors.model.components.Gpu;
import java.util.List;

/**
 *
 * @author buna_
 */
public abstract class Initialize {
     protected Components components = JSensors.get.components();
    protected List<Gpu> gpus = components.gpus;
    //protected List<Fan> fans = cpu.sensors.fans;
    protected List<Cpu> cpus = components.cpus;
    //protected List<Temperature> temps = cpu.sensors.temperatures;
}
