import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, MoreVertical, Edit2, Trash2, Filter } from 'lucide-react';

const mockMembers = [
  { id: 'MEM-001', name: 'John Doe', contact: '+1 (555) 123-4567', plan: 'Premium', joinDate: '2023-01-15', expiryDate: '2024-01-15', status: 'Active' },
  { id: 'MEM-002', name: 'Jane Smith', contact: '+1 (555) 987-6543', plan: 'Standard', joinDate: '2023-03-22', expiryDate: '2023-09-22', status: 'Expired' },
  { id: 'MEM-003', name: 'Mike Johnson', contact: '+1 (555) 456-7890', plan: 'Elite', joinDate: '2023-06-10', expiryDate: '2024-06-10', status: 'Active' },
  { id: 'MEM-004', name: 'Sarah Williams', contact: '+1 (555) 234-5678', plan: 'Basic', joinDate: '2023-08-05', expiryDate: '2023-09-05', status: 'Pending' },
  { id: 'MEM-005', name: 'Robert Brown', contact: '+1 (555) 876-5432', plan: 'Premium', joinDate: '2023-02-18', expiryDate: '2024-02-18', status: 'Active' },
];

export default function Members() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gym-lightgray" />
          <input
            type="text"
            placeholder="Search members by name or ID..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="btn-secondary flex-1 sm:flex-none flex items-center justify-center gap-2 py-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="btn-primary flex-1 sm:flex-none flex items-center justify-center gap-2 py-2">
            <Plus className="w-4 h-4" /> Add Member
          </button>
        </div>
      </div>

      {/* Members Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-gym-black/40 border-b border-gym-gray text-gym-lightgray text-sm">
                <th className="px-6 py-4 font-medium">Member ID</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Plan</th>
                <th className="px-6 py-4 font-medium">Expiry Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockMembers.map((member, index) => (
                <tr key={member.id} className="border-b border-gym-gray/50 hover:bg-gym-gray/30 transition-colors">
                  <td className="px-6 py-4 text-gym-lightgray font-medium">{member.id}</td>
                  <td className="px-6 py-4 text-white font-medium flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gym-gray flex items-center justify-center text-xs font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {member.name}
                  </td>
                  <td className="px-6 py-4 text-gym-lightgray">{member.contact}</td>
                  <td className="px-6 py-4">
                    <span className="bg-gym-gray text-white px-3 py-1 rounded-full text-xs font-medium">
                      {member.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gym-lightgray">{member.expiryDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${
                      member.status === 'Active' ? 'bg-green-500/20 text-green-500 border-green-500/20' :
                      member.status === 'Expired' ? 'bg-red-500/20 text-red-500 border-red-500/20' :
                      'bg-yellow-500/20 text-yellow-500 border-yellow-500/20'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-gym-lightgray hover:text-white transition-colors rounded-lg hover:bg-gym-gray">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gym-lightgray hover:text-gym-red transition-colors rounded-lg hover:bg-gym-gray">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gym-lightgray hover:text-white transition-colors rounded-lg hover:bg-gym-gray">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gym-gray flex items-center justify-between text-sm text-gym-lightgray">
          <span>Showing 1 to 5 of 24 entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-gym-gray hover:bg-gym-gray transition-colors">Previous</button>
            <button className="px-3 py-1 rounded bg-gym-red text-white">1</button>
            <button className="px-3 py-1 rounded border border-gym-gray hover:bg-gym-gray transition-colors">2</button>
            <button className="px-3 py-1 rounded border border-gym-gray hover:bg-gym-gray transition-colors">3</button>
            <button className="px-3 py-1 rounded border border-gym-gray hover:bg-gym-gray transition-colors">Next</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
