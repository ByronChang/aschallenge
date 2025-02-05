import { PhaseChangeService } from '../services/phase-change.service';
export declare class DiagramController {
    private readonly phaseChangeService;
    constructor(phaseChangeService: PhaseChangeService);
    getDiagram(pressure: string): Promise<{
        specific_volume_liquid: number;
        specific_volume_vapor: number;
    }>;
}
