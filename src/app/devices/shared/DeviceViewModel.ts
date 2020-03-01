import { SectionKeyViewModel } from "./SectionKeyViewModel";

export class DeviceViewModel {
    id: number; 
    isActive: boolean;
    isConnected: boolean;
    name:string;
    sectionKey: SectionKeyViewModel[];
}