
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { generateHistory } from '../mockData';

const data = generateHistory(24);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tableau de Bord Global</h2>
          <p className="text-slate-400 text-sm mt-1">Données agrégées sur les dernières 24 heures</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-slate-800 rounded text-xs font-bold uppercase hover:bg-slate-700">24H</button>
          <button className="px-3 py-1 border border-slate-700 rounded text-xs font-bold uppercase hover:bg-slate-700">7 Jours</button>
          <button className="px-3 py-1 border border-slate-700 rounded text-xs font-bold uppercase hover:bg-slate-700">30 Jours</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-xl p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Mix Énergétique & Consommation</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorCons" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorGrid" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="timestamp" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0f1e', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="consumption" stroke="#ef4444" fillOpacity={1} fill="url(#colorCons)" strokeWidth={2} name="Consommation" />
                <Area type="monotone" dataKey="grid" stroke="#3b82f6" fillOpacity={1} fill="url(#colorGrid)" strokeWidth={2} name="Réseau" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-xl p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Production Solaire</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="timestamp" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0f1e', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="solar" fill="#4ade80" radius={[4, 4, 0, 0]} name="Production (kW)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0a0f1e] border border-[#1e293b] p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase text-slate-500">Auto-consommation</span>
            <span className="text-green-400 font-bold">18.5%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-green-400 h-full w-[18.5%]" />
          </div>
        </div>
        <div className="bg-[#0a0f1e] border border-[#1e293b] p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase text-slate-500">Stabilité Réseau</span>
            <span className="text-blue-400 font-bold">99.98%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-400 h-full w-[99.98%]" />
          </div>
        </div>
        <div className="bg-[#0a0f1e] border border-[#1e293b] p-6 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase text-slate-500">Charge Critique</span>
            <span className="text-orange-400 font-bold">42.1%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-orange-400 h-full w-[42.1%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
