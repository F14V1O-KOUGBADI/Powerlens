
import React, { useState } from 'react';
import { INITIAL_EQUIPMENT } from '../mockData';
import { Search, Filter, Circle, ToggleLeft, ToggleRight, Wifi, Radio } from 'lucide-react';

export const EquipmentManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEquipment = INITIAL_EQUIPMENT.filter(e => 
    e.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Équipements & Circuits</h2>
          <p className="text-slate-400 text-sm mt-1">Liste exhaustive des terminaux connectés</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Rechercher un équipement..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0a0f1e] border border-[#1e293b] rounded py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="p-2 bg-slate-800 rounded border border-slate-700 text-slate-400 hover:text-white">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/50 border-b border-[#1e293b]">
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider">État</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider">Équipement</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider">Type</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider">Bâtiment</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider">Conso. (kW)</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider">Réseau</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1e293b]">
            {filteredEquipment.map((eq) => (
              <tr key={eq.id} className="hover:bg-slate-900/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${eq.status === 'ON' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.3)]' : 'bg-slate-600'}`} />
                    <span className={`text-[10px] font-bold uppercase ${eq.status === 'ON' ? 'text-green-400' : 'text-slate-500'}`}>
                      {eq.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-bold text-white">{eq.name}</div>
                  <div className="text-[10px] text-slate-500 uppercase mt-0.5">#{eq.id}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                    eq.type === 'CRITICAL' ? 'bg-red-500/10 text-red-500 border border-red-500/30' : 
                    'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                  }`}>
                    {eq.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs font-medium text-slate-400">{eq.buildingId}</td>
                <td className="px-6 py-4 text-xs font-bold mono text-white">{eq.consumption.toFixed(1)}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    {eq.network === 'WiFi' ? <Wifi size={14} /> : <Radio size={14} />}
                    <span className="text-[10px] font-bold uppercase">{eq.network}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className={`p-1 transition-colors ${eq.status === 'ON' ? 'text-green-400 hover:text-green-300' : 'text-slate-500 hover:text-slate-400'}`}>
                    {eq.status === 'ON' ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredEquipment.length === 0 && (
          <div className="p-12 text-center text-slate-500 italic text-sm">
            Aucun équipement ne correspond à votre recherche.
          </div>
        )}
      </div>
    </div>
  );
};
