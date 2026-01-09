
export enum SystemStatus {
  ALIMENTED = 'ALIMENTED',
  LIMITED = 'LIMITED',
  CUT = 'CUT'
}

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ENERGY_MANAGER = 'ENERGY_MANAGER',
  TECHNICIAN = 'TECHNICIAN',
  OBSERVER = 'OBSERVER'
}

export interface Building {
  id: string;
  name: string;
  status: SystemStatus;
  powerkW: number;
  source: 'GRID' | 'SOLAR' | 'BATTERY';
  lastUpdated: string;
}

export interface Equipment {
  id: string;
  buildingId: string;
  name: string;
  type: 'HVAC' | 'LIGHTING' | 'PLUGS' | 'CRITICAL';
  consumption: number;
  status: 'ON' | 'OFF';
  network: 'LoRa' | 'WiFi';
}

export interface EnergyMetric {
  timestamp: string;
  grid: number;
  solar: number;
  consumption: number;
}
