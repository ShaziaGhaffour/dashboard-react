import React, { useState } from 'react';

// Sidebar component
import Sidebar from './components/Sidebar';

// Import all page content components
import DashboardContent from './DashboardContent';
import AnalyticsContent from './Analytics';
import InvoiceContent from './Invoice';
import ScheduleContent from './Schedule';
import CalendarContent from './Calendar';
import MessagesContent from './Messages';
import NotificationContent from './Notification';
import SettingsContent from './Settings';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Show correct page content
  const renderActiveContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'analytics':
        return <AnalyticsContent />;
      case 'invoice':
        return <InvoiceContent />;
      case 'schedule':
        return <ScheduleContent />;
      case 'calendar':
        return <CalendarContent />;
      case 'messages':
        return <MessagesContent />;
      case 'notification':
        return <NotificationContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar: Pass props */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Page Content */}
      <div className="flex-1 overflow-auto">
        {renderActiveContent()}
      </div>
    </div>
  );
}
