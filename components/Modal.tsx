
import React from 'react';
import { AlertTriangle, X, ShieldAlert } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  severity?: 'low' | 'medium' | 'high';
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, title, message, severity = 'medium' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-[#0a0f1e] border border-[#1e293b] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className={`h-1.5 w-full ${
          severity === 'high' ? 'bg-red-500' : severity === 'medium' ? 'bg-orange-500' : 'bg-blue-500'
        }`} />
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded ${
                severity === 'high' ? 'bg-red-500/10 text-red-500' : 'bg-orange-500/10 text-orange-500'
              }`}>
                {severity === 'high' ? <ShieldAlert size={20} /> : <AlertTriangle size={20} />}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
            </div>
            <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded p-4 mb-6">
            <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Impact & Risque</div>
            <p className="text-sm text-slate-300 leading-relaxed italic">{message}</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2 p-2 bg-blue-500/5 rounded border border-blue-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase text-blue-400">Validation Rôle Admin Requise</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={onClose}
                className="py-2.5 rounded bg-slate-800 text-white text-xs font-bold uppercase hover:bg-slate-700 transition-colors"
              >
                Annuler
              </button>
              <button 
                onClick={onConfirm}
                className={`py-2.5 rounded text-white text-xs font-bold uppercase transition-colors ${
                  severity === 'high' ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-600 hover:bg-orange-700'
                }`}
              >
                Confirmer l'Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
