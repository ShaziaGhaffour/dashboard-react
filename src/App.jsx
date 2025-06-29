import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseSidebar from './components/SideBar/sidebar';
import Navbar from './components/Navbar';
import DashboardContent from './Pages/DashboardContent';
import AnalyticsContent from './Pages/Analytics';
import InvoiceContent from './Pages/Invoice';
import CalendarContent from './Pages/Calendar';
import ScheduleContent from './Pages/Schedule';
import MessagesContent from './Pages/Messages';
import NotificationContent from './Pages/Notification';
import SettingsContent from './Pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <div className="w-[5%] min-w-[190px] bg-white border-r border-gray-200">
  <BaseSidebar />
</div>
        <div className="w-[95%] flex flex-col">
          <div className="h-16">
            <Navbar />
          </div>
          <main className="flex-1 overflow-auto bg-gray-50 p-6 flex justify-center items-start">
            <div className="w-full max-w-6xl">
              <Routes>
                <Route path="/" element={<DashboardContent />} />
                <Route path="/analytics" element={<AnalyticsContent />} />
                <Route path="/invoice" element={<InvoiceContent />} />
                <Route path="/schedule" element={<ScheduleContent />} />
                <Route path="/calendar" element={<CalendarContent />} />
                <Route path="/messages" element={<MessagesContent />} />
                <Route path="/notification" element={<NotificationContent />} />
                <Route path="/settings" element={<SettingsContent />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;






