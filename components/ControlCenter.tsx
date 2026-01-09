
import React, { useState } from 'react';
import { ShieldAlert, Zap, Battery, Power, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { SystemStatus, UserRole } from '../types';
import { Modal } from './Modal';

interface ControlCenterProps {
  role: UserRole;
}

export const ControlCenter: React.FC<ControlCenterProps> = ({ role }) => {
  const [globalStatus, setGlobalStatus] = useState<SystemStatus>(SystemStatus.ALIMENTED);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<{ status: SystemStatus; risk: string } | null>(null);

  const stats = [
    { label: 'Charge Totale', value: '842.5 kW', color: 'text-white' },
    { label: 'Production Solaire', value: '128.2 kW', color: 'text-green-400' },
    { label: 'Capacité Batterie', value: '88%', color: 'text-blue-400' },
    { label: 'Fréquence Réseau', value: '50.01 Hz', color: 'text-orange-400' },
  ];

  const handleActionClick = (status: SystemStatus, risk: string) => {
    setPendingAction({ status, risk });
    setIsModalOpen(true);
  };

  const confirmAction = () => {
    if (pendingAction) {
      setGlobalStatus(pendingAction.status);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Centre de Supervision Énergétique</h2>
          <p className="text-slate-400 text-sm mt-1">Surveillance temps réel du réseau campus universitaire</p>
        </div>
        <div className={`px-4 py-2 rounded border font-bold text-sm uppercase flex items-center gap-2 ${
          globalStatus === SystemStatus.ALIMENTED ? 'bg-green-500/10 border-green-500 text-green-400' :
          globalStatus === SystemStatus.LIMITED ? 'bg-orange-500/10 border-orange-500 text-orange-400' :
          'bg-red-500/10 border-red-500 text-red-500'
        }`}>
          {globalStatus === SystemStatus.ALIMENTED && <CheckCircle2 size={18} />}
          {globalStatus === SystemStatus.LIMITED && <AlertTriangle size={18} />}
          {globalStatus === SystemStatus.CUT && <ShieldAlert size={18} />}
          Système : {globalStatus}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#0a0f1e] border border-[#1e293b] p-5 rounded-lg">
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-2">{stat.label}</div>
            <div className={`text-3xl font-bold mono ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Simplified One-Line Diagram Representation */}
        <div className="lg:col-span-2 bg-[#0a0f1e] border border-[#1e293b] rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px]">
          <div className="relative w-full max-w-lg">
            {/* Grid Icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-[#1e293b]">
                <Zap className="text-blue-400" />
              </div>
              <span className="text-[10px] font-bold mt-2 uppercase text-slate-400">Réseau (Enedis)</span>
            </div>

            {/* Solar Icon */}
            <div className="absolute top-20 left-1/4 -translate-x-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-[#1e293b]">
                <Zap className="text-green-400" />
              </div>
              <span className="text-[10px] font-bold mt-2 uppercase text-slate-400">Solaire</span>
            </div>

            {/* Battery Icon */}
            <div className="absolute top-20 right-1/4 translate-x-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-[#1e293b]">
                <Battery className="text-blue-400" />
              </div>
              <span className="text-[10px] font-bold mt-2 uppercase text-slate-400">Stockage</span>
            </div>

            {/* Central Bus */}
            <div className="mt-48 h-2 bg-slate-700 rounded-full w-full relative">
              <div className={`absolute inset-0 rounded-full blur-[2px] transition-colors duration-500 ${
                globalStatus === SystemStatus.ALIMENTED ? 'bg-green-400/50' :
                globalStatus === SystemStatus.LIMITED ? 'bg-orange-400/50' :
                'bg-red-400/50'
              }`} />
            </div>

            {/* Buildings Connectors */}
            <div className="flex justify-between px-4 mt-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-[1px] h-10 bg-slate-700" />
                  <div className="w-4 h-4 bg-slate-800 border border-slate-700 rounded-full mt-[-2px]" />
                  <span className="text-[9px] font-bold mt-2 uppercase text-slate-500">Bât. {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Critical Actions Panel */}
        <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-xl p-6 flex flex-col">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Actions Critiques</h3>
          
          <div className="space-y-4 flex-1">
            <button 
              onClick={() => handleActionClick(SystemStatus.ALIMENTED, 'Restauration complète de la puissance.')}
              className="w-full group relative overflow-hidden bg-green-500/10 border border-green-500/50 hover:bg-green-500/20 p-4 rounded-lg flex items-center gap-4 transition-all"
            >
              <div className="w-12 h-12 rounded bg-green-500 flex items-center justify-center text-white">
                <Power size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-green-400 uppercase text-xs tracking-wider">Rétablir Alimentation</div>
                <div className="text-[10px] text-slate-400 mt-1 italic">Mode normal / Sans restriction</div>
              </div>
            </button>

            <button 
              onClick={() => handleActionClick(SystemStatus.LIMITED, 'Réduction de 40% de la puissance globale. Certains équipements secondaires seront coupés.')}
              className="w-full group relative overflow-hidden bg-orange-500/10 border border-orange-500/50 hover:bg-orange-500/20 p-4 rounded-lg flex items-center gap-4 transition-all"
            >
              <div className="w-12 h-12 rounded bg-orange-500 flex items-center justify-center text-white">
                <Zap size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-orange-400 uppercase text-xs tracking-wider">Limiter Puissance</div>
                <div className="text-[10px] text-slate-400 mt-1 italic">Délestage niveau 1 / Orange</div>
              </div>
            </button>

            <button 
              onClick={() => handleActionClick(SystemStatus.CUT, 'Coupure totale immédiate de tous les circuits non-critiques.')}
              className="w-full group relative overflow-hidden bg-red-500/10 border border-red-500/50 hover:bg-red-500/20 p-4 rounded-lg flex items-center gap-4 transition-all"
            >
              <div className="w-12 h-12 rounded bg-red-500 flex items-center justify-center text-white">
                <ShieldAlert size={24} />
              </div>
              <div className="text-left">
                <div className="font-bold text-red-500 uppercase text-xs tracking-wider">Coupure Urgence</div>
                <div className="text-[10px] text-slate-400 mt-1 italic">Interruption forcée du flux</div>
              </div>
            </button>
          </div>

          <div className="mt-8 p-4 bg-slate-900/50 rounded border border-[#1e293b]">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert size={14} className="text-blue-400" />
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Note de sécurité</span>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed italic">
              Toutes les actions sont enregistrées avec horodatage et ID utilisateur. Double authentification requise pour les coupures globales.
            </p>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmAction}
        title="Confirmation d'Action Critique"
        message={pendingAction?.risk || ''}
        severity={pendingAction?.status === SystemStatus.CUT ? 'high' : 'medium'}
      />
    </div>
  );
};
