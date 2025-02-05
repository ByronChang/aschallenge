import { Injectable } from '@nestjs/common';

@Injectable()
export class PhaseChangeService {
  private readonly criticalPressure = 10; // MPa
  private readonly criticalVolume = 0.0035; // m³/kg

  /**
   * Calcular los volúmenes específicos líquido y vapor para una presión dada.
   * 
   * @param pressure Presión en MPa
   * @returns { specific_volume_liquid, specific_volume_vapor }
   */
  public calculateSpecificVolumes(pressure: number): {
    specific_volume_liquid: number;
    specific_volume_vapor: number;
  } {
    // Validar rango de presión
    if (pressure < 1 || pressure > this.criticalPressure) {
      throw new Error(
        `Pressure out of range. Must be between 1 MPa and ${this.criticalPressure} MPa. Received: ${pressure}`
      );
    }    

    // Ajustar ecuación para presiones menores a 10 MPa
    const specific_volume_liquid = this.criticalVolume - (0.0035 / this.criticalPressure) * (this.criticalPressure - pressure);
    const specific_volume_vapor = this.criticalVolume + (0.0035 / this.criticalPressure) * (this.criticalPressure - pressure);

    return {
      specific_volume_liquid: Number(specific_volume_liquid.toFixed(4)),
      specific_volume_vapor: Number(specific_volume_vapor.toFixed(4)),
    };
  }
}