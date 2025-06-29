import { Link, useLocation } from 'react-router-dom';
import {
  LayoutGrid, BarChart3, FileText, Calendar, CalendarDays, MessageSquare, Bell, Settings
} from 'lucide-react';

export default function BaseSidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/ DashboardContent' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: FileText, label: 'Invoice', path: '/invoice' },
    { icon: CalendarDays, label: 'Schedule', path: '/schedule' },
    { icon: Calendar, label: 'Calendar', path: '/calendar' },
    { icon: MessageSquare, label: 'Messages', path: '/messages', badge: 49 },
    { icon: Bell, label: 'Notification', path: '/notification' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
     <div className="h-full flex flex-col"> 
    <div className="w-fit mx-auto p-2">
      <div className="flex items-center space-x-3">
        <img src="/Subtract.svg" className="w-6 h-6 object-contain" alt="icon" />
        <span className="text-xl font-semibold text-gray-900">Base</span>
      </div>
    </div>
    <nav className="flex-1 px-4 py-6">
      <ul className="space-y-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  <span className={isActive ? 'text-blue-600' : 'text-gray-700'}>
                    {item.label}
                  </span>
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full min-w-[20px] text-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>

    {/* Bottom Section */}
    <div className="px-4 pb-6">
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg text-sm">
          Upgrade Now
        </button>
      </div>
      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            alt="Easin Arafat"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">Easin Arafat</p>
          <p className="text-xs text-gray-500">Free Account</p>
        </div>
      </div>
    </div>
  </div>
  );
}


