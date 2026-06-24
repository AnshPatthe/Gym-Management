import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserSquare2, TrendingUp, CalendarCheck, CreditCard, Activity } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
  { name: 'Jul', revenue: 7500 },
];

const attendanceData = [
  { name: 'Mon', count: 120 },
  { name: 'Tue', count: 150 },
  { name: 'Wed', count: 180 },
  { name: 'Thu', count: 140 },
  { name: 'Fri', count: 190 },
  { name: 'Sat', count: 220 },
  { name: 'Sun', count: 90 },
];

const StatCard = ({ title, value, icon, trend, trendUp, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-6 flex items-start justify-between"
  >
    <div>
      <p className="text-gym-lightgray text-sm font-medium mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
      <div className={`flex items-center text-sm font-medium ${trendUp ? 'text-green-500' : 'text-gym-red'}`}>
        {trendUp ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingUp className="w-4 h-4 mr-1 transform rotate-180" />}
        {trend}
      </div>
    </div>
    <div className="bg-gym-gray p-4 rounded-xl text-gym-red">
      {icon}
    </div>
  </motion.div>
);

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="Total Members" 
          value="2,451" 
          icon={<Users className="w-6 h-6" />} 
          trend="+12.5% from last month" 
          trendUp={true} 
          delay={0.1} 
        />
        <StatCard 
          title="Active Trainers" 
          value="48" 
          icon={<UserSquare2 className="w-6 h-6" />} 
          trend="+2 new this week" 
          trendUp={true} 
          delay={0.2} 
        />
        <StatCard 
          title="Monthly Revenue" 
          value="$54,230" 
          icon={<CreditCard className="w-6 h-6" />} 
          trend="+8.2% from last month" 
          trendUp={true} 
          delay={0.3} 
        />
        <StatCard 
          title="Today's Attendance" 
          value="342" 
          icon={<CalendarCheck className="w-6 h-6" />} 
          trend="+15% vs yesterday" 
          trendUp={true} 
          delay={0.4} 
        />
        <StatCard 
          title="Pending Payments" 
          value="$4,120" 
          icon={<Activity className="w-6 h-6" />} 
          trend="-5% from last month" 
          trendUp={false} 
          delay={0.5} 
        />
        <StatCard 
          title="New Signups" 
          value="89" 
          icon={<Users className="w-6 h-6" />} 
          trend="+22% this week" 
          trendUp={true} 
          delay={0.6} 
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Revenue Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass-card p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Revenue Overview</h3>
            <select className="bg-gym-black border border-gym-gray text-sm rounded-lg px-3 py-1 focus:outline-none focus:border-gym-red text-gym-lightgray">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#27272a', color: '#fff', borderRadius: '8px' }}
                  itemStyle={{ color: '#dc2626' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#dc2626" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Attendance Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="glass-card p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Weekly Attendance</h3>
            <span className="text-sm text-gym-lightgray bg-gym-gray px-3 py-1 rounded-full">Current Week</span>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#27272a', color: '#fff', borderRadius: '8px' }}
                  cursor={{ fill: '#27272a', opacity: 0.4 }}
                />
                <Bar dataKey="count" fill="#dc2626" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>
      
      {/* Recent Activity Table Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="glass-card p-6 overflow-hidden"
      >
        <h3 className="text-xl font-bold text-white mb-6">Recent Member Registrations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gym-gray text-gym-lightgray text-sm">
                <th className="pb-3 font-medium">Member</th>
                <th className="pb-3 font-medium">Plan</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((item) => (
                <tr key={item} className="border-b border-gym-gray/50 hover:bg-gym-gray/30 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gym-gray flex items-center justify-center text-xs font-bold text-white">
                        JD
                      </div>
                      <span className="text-white font-medium">John Doe</span>
                    </div>
                  </td>
                  <td className="py-4 text-gym-lightgray">Premium Plan</td>
                  <td className="py-4 text-gym-lightgray">Today, 10:45 AM</td>
                  <td className="py-4">
                    <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded text-xs font-medium border border-green-500/20">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

    </div>
  );
}
