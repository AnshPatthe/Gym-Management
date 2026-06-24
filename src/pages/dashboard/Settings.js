import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Building2, Bell, Shield, Palette } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General Info', icon: <Building2 className="w-4 h-4" /> },
    { id: 'theme', label: 'Theme & Appearance', icon: <Palette className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Settings Navigation */}
      <div className="w-full lg:w-64 shrink-0">
        <div className="glass-card p-4 space-y-2">
          <h3 className="text-white font-bold mb-4 px-4">Settings Menu</h3>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-gym-red text-white shadow-lg shadow-gym-red/20' 
                  : 'text-gym-lightgray hover:bg-gym-gray hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Settings Content */}
      <div className="flex-1">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-6 sm:p-8"
        >
          {activeTab === 'general' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Gym Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gym-lightgray">Gym Name</label>
                    <input type="text" defaultValue="GymPro Fitness" className="input-field" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gym-lightgray">Contact Email</label>
                    <input type="email" defaultValue="support@gympro.com" className="input-field" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gym-lightgray">Phone Number</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="input-field" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gym-lightgray">Timezone</label>
                    <select className="input-field appearance-none bg-gym-black/50">
                      <option>(GMT-05:00) Eastern Time</option>
                      <option>(GMT-08:00) Pacific Time</option>
                    </select>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-sm font-medium text-gym-lightgray">Gym Address</label>
                    <textarea rows="3" defaultValue="123 Fitness Avenue, Muscle City, MC 90210" className="input-field resize-none"></textarea>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gym-gray flex justify-end">
                  <button type="button" className="btn-primary flex items-center gap-2">
                    <Save className="w-4 h-4" /> Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'theme' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Theme Settings</h2>
              <p className="text-gym-lightgray mb-8">Customize the appearance of your dashboard.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium mb-3">Accent Color</h4>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-gym-red ring-2 ring-white ring-offset-2 ring-offset-gym-black"></button>
                    <button className="w-10 h-10 rounded-full bg-blue-600 hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-green-600 hover:scale-110 transition-transform"></button>
                    <button className="w-10 h-10 rounded-full bg-purple-600 hover:scale-110 transition-transform"></button>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gym-gray flex justify-end">
                  <button type="button" className="btn-primary flex items-center gap-2">
                    <Save className="w-4 h-4" /> Save Theme
                  </button>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'notifications' || activeTab === 'security') && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-gym-gray rounded-full flex items-center justify-center mb-4 text-gym-lightgray">
                {activeTab === 'notifications' ? <Bell className="w-8 h-8" /> : <Shield className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Settings Coming Soon</h3>
              <p className="text-gym-lightgray max-w-sm">This settings panel is currently under development and will be available in the next update.</p>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}
