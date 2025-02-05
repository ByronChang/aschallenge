import { systemsData } from '../data/systems';
export declare class SystemManagerService {
    private damagedSystem;
    getDamagedSystem(): keyof typeof systemsData | null;
    isValidSystem(system: string): system is keyof typeof systemsData;
    getSystemCode(system: keyof typeof systemsData): string;
    resetDamagedSystem(): void;
    getAllSystemsData(): Record<keyof typeof systemsData, string>;
}
