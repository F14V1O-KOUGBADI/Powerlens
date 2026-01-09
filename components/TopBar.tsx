
import React from 'react';
import { Bell, User, Wifi, Database } from 'lucide-react';
import { UserRole } from '../types';

interface TopBarProps {
  user: { name: string; role: UserRole };
  time: Date;
}

export const TopBar: React.FC<TopBarProps> = ({ user, time }) => {
  return (
    <header className="h-16 bg-[#0a0f1e] border-b border-[#1e293b] flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-slate-400">
          <Wifi size={16} className="text-green-400" />
          <span className="text-xs uppercase font-bold mono">Campus-Net-01</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <Database size={16} className="text-blue-400" />
          <span className="text-xs uppercase font-bold mono">Node-Storage: OK</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="text-right hidden sm:block">
          <div className="text-lg font-bold mono tracking-tighter">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            {time.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
          </div>
        </div>

        <div className="h-8 w-[1px] bg-[#1e293b]" />

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0a0f1e]" />
          </button>
          
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right">
              <div className="text-xs font-bold text-white leading-none">{user.name}</div>
              <div className="text-[9px] text-blue-400 font-bold uppercase mt-1">{user.role.replace('_', ' ')}</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-[#1e293b] flex items-center justify-center text-slate-400">
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
