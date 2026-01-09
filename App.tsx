
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { ControlCenter } from './components/ControlCenter';
import { Dashboard } from './components/Dashboard';
import { BuildingManagement } from './components/BuildingManagement';
import { EquipmentManagement } from './components/EquipmentManagement';
import { LoadShedding } from './components/LoadShedding';
import { Reports } from './components/Reports';
import { UserRole } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('control');
  const [currentUser] = useState({ name: 'Admin Campus', role: UserRole.SUPER_ADMIN });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'control': return <ControlCenter role={currentUser.role} />;
      case 'dashboard': return <Dashboard />;
      case 'buildings': return <BuildingManagement role={currentUser.role} />;
      case 'equipment': return <EquipmentManagement />;
      case 'shedding': return <LoadShedding />;
      case 'reports': return <Reports />;
      default: return <ControlCenter role={currentUser.role} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#050810] text-[#e2e8f0] overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar user={currentUser} time={currentTime} />
        
        <main className="flex-1 overflow-y-auto p-6 bg-[#0a0f1e]/50">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
