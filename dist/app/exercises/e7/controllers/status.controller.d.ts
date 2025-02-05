import { SystemManagerService } from '../services/system-manager.service';
export declare class StatusController {
    private readonly systemManagerService;
    constructor(systemManagerService: SystemManagerService);
    getStatus(): {
        damaged_system: "navigation" | "communications" | "life_support" | "engines" | "deflector_shield";
    };
}
