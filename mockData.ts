
import { Building, Equipment, EnergyMetric, SystemStatus } from './types';

export const INITIAL_BUILDINGS: Building[] = [
  { id: 'b1', name: 'Faculté des Sciences', status: SystemStatus.ALIMENTED, powerkW: 450.2, source: 'GRID', lastUpdated: new Date().toISOString() },
  { id: 'b2', name: 'Bibliothèque Centrale', status: SystemStatus.ALIMENTED, powerkW: 120.5, source: 'SOLAR', lastUpdated: new Date().toISOString() },
  { id: 'b3', name: 'Résidence A', status: SystemStatus.LIMITED, powerkW: 85.0, source: 'GRID', lastUpdated: new Date().toISOString() },
  { id: 'b4', name: 'Centre Sportif', status: SystemStatus.CUT, powerkW: 0.0, source: 'GRID', lastUpdated: new Date().toISOString() },
  { id: 'b5', name: 'Administration', status: SystemStatus.ALIMENTED, powerkW: 65.4, source: 'GRID', lastUpdated: new Date().toISOString() },
];

export const INITIAL_EQUIPMENT: Equipment[] = [
  { id: 'e1', buildingId: 'b1', name: 'Chauffage Central', type: 'HVAC', consumption: 150.5, status: 'ON', network: 'LoRa' },
  { id: 'e2', buildingId: 'b1', name: 'Éclairage Amphi A', type: 'LIGHTING', consumption: 12.2, status: 'ON', network: 'WiFi' },
  { id: 'e3', buildingId: 'b2', name: 'Serveurs Data', type: 'CRITICAL', consumption: 45.0, status: 'ON', network: 'LoRa' },
  { id: 'e4', buildingId: 'b3', name: 'Climatisation Hall', type: 'HVAC', consumption: 30.1, status: 'OFF', network: 'WiFi' },
];

export const generateHistory = (points: number): EnergyMetric[] => {
  const data: EnergyMetric[] = [];
  const now = new Date();
  for (let i = 0; i < points; i++) {
    const time = new Date(now.getTime() - (points - i) * 3600000);
    data.push({
      timestamp: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      grid: 600 + Math.random() * 200,
      solar: 150 + Math.random() * 50,
      consumption: 700 + Math.random() * 150
    });
  }
  return data;
};
