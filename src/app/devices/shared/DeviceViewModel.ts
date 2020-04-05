import { SectionKeyViewModel } from "./SectionKeyViewModel";

export class DeviceViewModel {
    id: number; 
    guid: string;
    isActive: boolean;
    isConnected: boolean;
    name:string;
    sectionKey: SectionKeyViewModel[];
}