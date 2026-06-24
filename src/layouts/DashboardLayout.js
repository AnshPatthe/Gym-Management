import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Users, UserSquare2, CalendarCheck, 
  Dumbbell, Utensils, CreditCard, BarChart3, 
  Bell, Settings, LogOut, Menu, X, Search
} from 'lucide-react';

const sidebarLinks = [
  { path: '/dashboard', icon: <LayoutDashboard />, label: 'Overview', end: true },
  { path: '/dashboard/members', icon: <Users />, label: 'Members' },
  { path: '/dashboard/trainers', icon: <UserSquare2 />, label: 'Trainers' },
  { path: '/dashboard/attendance', icon: <CalendarCheck />, label: 'Attendance' },
  { path: '/dashboard/workout-plans', icon: <Dumbbell />, label: 'Workout Plans' },
  { path: '/dashboard/diet-plans', icon: <Utensils />, label: 'Diet Plans' },
  { path: '/dashboard/payments', icon: <CreditCard />, label: 'Payments' },
  { path: '/dashboard/reports', icon: <BarChart3 />, label: 'Reports' },
];

export default function DashboardLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    if (path === 'dashboard') return 'Overview';
    return path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const SidebarContent = () => (
    <>
      <div className="h-20 flex items-center px-6 border-b border-gym-gray">
        <Dumbbell className="w-8 h-8 text-gym-red mr-2" />
        <span className="text-xl font-bold text-white tracking-tight">
          GYM<span className="text-gym-red">PRO</span>
        </span>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-1">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-gym-red text-white shadow-lg shadow-gym-red/20' 
                    : 'text-gym-lightgray hover:bg-gym-gray hover:text-white'
                }`
              }
            >
              {React.cloneElement(link.icon, { className: 'w-5 h-5' })}
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gym-gray space-y-1">
          <NavLink
            to="/dashboard/settings"
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-gym-gray text-white' 
                  : 'text-gym-lightgray hover:bg-gym-gray hover:text-white'
              }`
            }
          >
            <Settings className="w-5 h-5" /> Settings
          </NavLink>
          <NavLink
            to="/login"
            className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gym-lightgray hover:bg-gym-darkred hover:text-white transition-all duration-200 mt-2"
          >
            <LogOut className="w-5 h-5" /> Logout
          </NavLink>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gym-black flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 fixed inset-y-0 z-50 bg-gym-charcoal border-r border-gym-gray">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gym-black/80 z-40 lg:hidden backdrop-blur-sm"
              onClick={toggleMobileSidebar}
            />
            <motion.aside
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-gym-charcoal border-r border-gym-gray flex flex-col lg:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-20 bg-gym-black/80 backdrop-blur-md border-b border-gym-gray sticky top-0 z-30 px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleMobileSidebar}
              className="lg:hidden text-gym-lightgray hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-white hidden sm:block">{getPageTitle()}</h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gym-lightgray" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gym-gray border border-gym-gray focus:border-gym-red rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gym-red transition-all w-64"
              />
            </div>
            
            <button className="relative p-2 text-gym-lightgray hover:text-white transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-gym-red rounded-full border-2 border-gym-black"></span>
            </button>
            
            <div className="flex items-center gap-3 cursor-pointer group">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border-2 border-gym-gray group-hover:border-gym-red transition-colors"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-white">Admin User</p>
                <p className="text-xs text-gym-lightgray">Manager</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-8 flex-1 overflow-x-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
