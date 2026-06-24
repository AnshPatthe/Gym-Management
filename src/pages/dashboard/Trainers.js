import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Star, Phone, Mail, MoreHorizontal } from 'lucide-react';

const trainers = [
  {
    id: 1,
    name: 'Alex Mercer',
    specialty: 'Strength & Conditioning',
    experience: '8 Years',
    rating: 4.9,
    members: 24,
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Sarah Connor',
    specialty: 'Yoga & Flexibility',
    experience: '5 Years',
    rating: 4.8,
    members: 32,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'David Goggins',
    specialty: 'Endurance & Cardio',
    experience: '12 Years',
    rating: 5.0,
    members: 45,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    specialty: 'HIIT & Weight Loss',
    experience: '6 Years',
    rating: 4.7,
    members: 28,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
  }
];

export default function Trainers() {
  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gym-lightgray" />
          <input
            type="text"
            placeholder="Search trainers..."
            className="input-field pl-10"
          />
        </div>
        
        <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 py-2">
          <Plus className="w-4 h-4" /> Add Trainer
        </button>
      </div>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-transparent"></div>
              <button className="absolute top-3 right-3 p-2 bg-gym-black/50 hover:bg-gym-red rounded-full text-white backdrop-blur-sm transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3">
                <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                <p className="text-gym-red text-sm font-medium">{trainer.specialty}</p>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-center mb-4 text-sm">
                <div className="text-gym-lightgray">Experience: <span className="text-white font-medium">{trainer.experience}</span></div>
                <div className="flex items-center text-yellow-500 font-medium">
                  <Star className="w-4 h-4 fill-current mr-1" /> {trainer.rating}
                </div>
              </div>
              
              <div className="text-sm text-gym-lightgray mb-6">
                Active Members: <span className="text-white font-medium">{trainer.members}</span>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 btn-secondary py-2 text-sm flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> Call
                </button>
                <button className="flex-1 btn-secondary py-2 text-sm flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" /> Message
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
