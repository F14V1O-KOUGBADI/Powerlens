
import React from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  Activity, 
  Building2, 
  Zap, 
  ShieldAlert, 
  FileBarChart, 
  Plug,
  Clock
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'control', label: 'Centre de contrôle', icon: Activity },
    { id: 'dashboard', label: 'Dashboard Global', icon: LayoutDashboard },
    { id: 'buildings', label: 'Bâtiments & Réseau', icon: Building2 },
    { id: 'equipment', label: 'Équipements & Circuits', icon: Plug },
    { id: 'energy', label: 'Management Énergie', icon: Zap },
    { id: 'shedding', label: 'Délestage & Program.', icon: Clock },
    { id: 'alerts', label: 'Alertes & Événements', icon: ShieldAlert },
    { id: 'reports', label: 'Rapports & Historique', icon: FileBarChart },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0a0f1e] border-r border-[#1e293b] flex flex-col shrink-0">
      <div className="p-6 border-b border-[#1e293b]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-bold text-lg tracking-tight uppercase">Smart Energy</h1>
        </div>
        <p className="text-[10px] text-blue-400 mt-1 uppercase tracking-widest font-bold">Industrial Monitoring</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 transition-all duration-200 border-l-4 ${
                isActive 
                  ? 'bg-blue-600/10 border-blue-600 text-blue-400' 
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#1e293b]">
        <div className="bg-[#1e293b]/30 rounded-lg p-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] text-slate-500 uppercase font-bold">System Health</span>
            <span className="text-[10px] text-green-400 font-bold uppercase">Stable</span>
          </div>
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div className="bg-green-400 h-full w-[94%]" />
          </div>
        </div>
      </div>
    </aside>
  );
};
