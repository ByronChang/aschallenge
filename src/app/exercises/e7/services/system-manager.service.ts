import { Injectable } from '@nestjs/common';
import {systemsData} from '../data/systems';

@Injectable()
export class SystemManagerService {
  private damagedSystem: keyof typeof systemsData | null = null;

  // Obtener un sistema dañado al azar
  public getDamagedSystem(): keyof typeof systemsData | null {
    const systems = Object.keys(systemsData) as Array<keyof typeof systemsData>;
    this.damagedSystem =
      systems[Math.floor(Math.random() * systems.length)] || null;
    return this.damagedSystem;
  }

  // Validar si el sistema es válido
  public isValidSystem(system: string): system is keyof typeof systemsData {
    return system in systemsData;
  }

  // Obtener el código del sistema
  public getSystemCode(system: keyof typeof systemsData): string {
    return systemsData[system] || 'UNKNOWN';
  }

  // Limpiar el sistema dañado
  public resetDamagedSystem(): void {
    this.damagedSystem = null;
  }

  // Exportar todos los sistemas disponibles
  public getAllSystemsData(): Record<keyof typeof systemsData, string> {
    return systemsData;
  }
}
