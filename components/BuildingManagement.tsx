
import React from 'react';
import { INITIAL_BUILDINGS } from '../mockData';
import { SystemStatus, UserRole } from '../types';
import { Power, Info, Calendar, ZapOff } from 'lucide-react';

interface BuildingManagementProps {
  role: UserRole;
}

export const BuildingManagement: React.FC<BuildingManagementProps> = ({ role }) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Gestion par Bâtiment</h2>
          <p className="text-slate-400 text-sm mt-1">Supervision granulaire et contrôles locaux</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold uppercase transition-colors">
          Scanner Réseau
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {INITIAL_BUILDINGS.map((building) => (
          <div key={building.id} className="bg-[#0a0f1e] border border-[#1e293b] rounded-xl overflow-hidden flex flex-col">
            <div className="p-5 border-b border-[#1e293b] flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white tracking-tight">{building.name}</h4>
                <div className="text-[10px] text-slate-500 uppercase mt-1">ID: {building.id}</div>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                building.status === SystemStatus.ALIMENTED ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' :
                building.status === SystemStatus.LIMITED ? 'bg-orange-500' : 'bg-red-500'
              }`} />
            </div>
            
            <div className="p-5 flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-900/50 rounded border border-[#1e293b]">
                  <div className="text-[9px] font-bold text-slate-500 uppercase mb-1">Puissance Actuelle</div>
                  <div className="text-lg font-bold mono">{building.powerkW.toFixed(1)} kW</div>
                </div>
                <div className="p-3 bg-slate-900/50 rounded border border-[#1e293b]">
                  <div className="text-[9px] font-bold text-slate-500 uppercase mb-1">Source Active</div>
                  <div className="text-lg font-bold mono text-blue-400">{building.source}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-400 italic">
                <Info size={12} />
                Dernière mise à jour : {new Date(building.lastUpdated).toLocaleTimeString()}
              </div>
            </div>

            <div className="p-4 bg-slate-900/30 grid grid-cols-2 gap-2">
              <button 
                disabled={role === UserRole.OBSERVER}
                className="flex items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed rounded text-[10px] font-bold uppercase transition-all"
              >
                <Calendar size={14} />
                Programmer
              </button>
              <button 
                disabled={role === UserRole.OBSERVER || role === UserRole.TECHNICIAN}
                className="flex items-center justify-center gap-2 py-2 bg-red-500/10 text-red-500 border border-red-500/50 hover:bg-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed rounded text-[10px] font-bold uppercase transition-all"
              >
                <ZapOff size={14} />
                Couper
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
