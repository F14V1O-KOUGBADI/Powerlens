
import React from 'react';
import { Download, FileText, FileSpreadsheet, File as FileIcon, Calendar } from 'lucide-react';

export const Reports: React.FC = () => {
  const reports = [
    { title: 'Rapport Mensuel Consommation', date: 'Janvier 2024', size: '2.4 MB', type: 'PDF' },
    { title: 'Audit Performance Solaire', date: 'Q4 2023', size: '1.1 MB', type: 'XLSX' },
    { title: 'Historique des Alertes Critiques', date: '2023 Full', size: '840 KB', type: 'PDF' },
    { title: 'Bilan Énergétique Bât. Sciences', date: 'Déc. 2023', size: '4.2 MB', type: 'PDF' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Rapports & Historique</h2>
          <p className="text-slate-400 text-sm mt-1">Export de données et analyses descriptives</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#1e293b] hover:bg-slate-800 rounded text-sm font-bold uppercase transition-colors">
            <Calendar size={18} />
            Période
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold uppercase transition-colors">
            Générer Rapport
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-[#0a0f1e] border border-[#1e293b] rounded-xl overflow-hidden">
          <div className="p-6 border-b border-[#1e293b]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Archives des Rapports</h3>
          </div>
          <div className="divide-y divide-[#1e293b]">
            {reports.map((report, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-900/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-slate-400">
                    {report.type === 'PDF' ? <FileText size={20} /> : <FileSpreadsheet size={20} />}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{report.title}</div>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-[10px] text-slate-500 uppercase font-bold">{report.date}</span>
                      <span className="text-[10px] text-slate-400 font-bold">{report.size}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/5 rounded">
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#0a0f1e] border border-[#1e293b] rounded-xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Résumé de l'Impact</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Économies (Mois)</span>
                <span className="text-lg font-bold mono text-green-400">-12.4%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Évènements de Délestage</span>
                <span className="text-lg font-bold mono text-orange-400">14</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">CO2 Évité (Est.)</span>
                <span className="text-lg font-bold mono text-blue-400">1.2 T</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-[#1e293b] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileIcon size={20} className="text-slate-400" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-white">Exports Automatiques</h3>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
              Configurez l'envoi automatique des rapports par e-mail ou FTP.
            </p>
            <button className="w-full py-2 border border-slate-700 rounded text-[10px] font-bold uppercase hover:bg-slate-800 transition-colors">
              Configurer Planification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
