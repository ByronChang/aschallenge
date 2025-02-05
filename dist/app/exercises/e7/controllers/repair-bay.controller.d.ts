import { SystemManagerService } from '../services/system-manager.service';
import { HtmlGeneratorService } from '../services/html-generator.service';
export declare class RepairBayController {
    private readonly systemManagerService;
    private readonly htmlGeneratorService;
    constructor(systemManagerService: SystemManagerService, htmlGeneratorService: HtmlGeneratorService);
    getRepairBay(damagedSystem: string): Promise<string>;
}
