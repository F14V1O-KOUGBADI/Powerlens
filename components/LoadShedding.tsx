
import React from 'react';
import { ShieldAlert, Clock, Plus, ZapOff, Play, History } from 'lucide-react';

export const LoadShedding: React.FC = () => {
  const rules = [
    { id: 1, name: 'Surchage Réseau - Niveau 1', condition: 'Conso > 1000 kW', action: 'Coupure Hall Sportif + Eclairage Extérieur', type: 'Manuel', priority: 'Moyenne' },
    { id: 2, name: 'Mode Nuit - Économies', condition: 'Heure 22:00 - 06:00', action: 'Passage Chauffage mode éco', type: 'Programmé', priority: 'Basse' },
    { id: 3, name: 'Pic d\'Heure de Pointe', condition: 'Heure 11:30 - 13:30', action: 'Limitation Climatisation Administration', type: 'Programmé', priority: 'Haute' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Délestage & Programmation</h2>
          <p className="text-slate-400 text-sm mt-1">Configuration des règles logiques et coupures planifiées</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold uppercase transition-colors">
          <Plus size={18} />
          Nouvelle Règle
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Règles Actives</h3>
          {rules.map((rule) => (
            <div key={rule.id} className="bg-[#0a0f1e] border border-[#1e293b] p-5 rounded-xl flex items-center justify-between group hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded flex items-center justify-center ${
                  rule.type === 'Manuel' ? 'bg-orange-500/10 text-orange-500' : 'bg-blue-500/10 text-blue-500'
                }`}>
                  {rule.type === 'Manuel' ? <ZapOff size={20} /> : <Clock size={20} />}
                </div>
                <div>
                  <div className="font-bold text-white">{rule.name}</div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Si: <span className="text-slate-300">{rule.condition}</span></span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">Priority: <span className={
                      rule.priority === 'Haute' ? 'text-red-500' : 
                      rule.priority === 'Moyenne' ? 'text-orange-500' : 'text-blue-500'
                    }>{rule.priority}</span></span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-400 hover:text-green-400 transition-colors">
                  <Play size={18} />
                </button>
                <div className="h-6 w-[1px] bg-[#1e293b]" />
                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                  <History size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="text-red-500" size={18} />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">Seuils Critiques</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                  <span>Alerte Consommation</span>
                  <span className="text-white">900 kW</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full">
                  <div className="h-full w-3/4 bg-orange-500" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                  <span>Coupure Sécurité</span>
                  <span className="text-white">1200 kW</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full">
                  <div className="h-full w-[90%] bg-red-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600/5 border border-blue-500/20 rounded-xl p-6">
            <h4 className="text-xs font-bold uppercase text-blue-400 mb-2">Statut de la programmation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Toutes les règles programmées s'exécutent sur l'horloge locale du serveur <span className="font-bold text-slate-200">SRV-LNX-01</span>. En cas de perte réseau, les dernières instructions persistantes restent actives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
