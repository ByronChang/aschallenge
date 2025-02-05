export declare class PhaseChangeService {
    private readonly criticalPressure;
    private readonly criticalVolume;
    calculateSpecificVolumes(pressure: number): {
        specific_volume_liquid: number;
        specific_volume_vapor: number;
    };
}
