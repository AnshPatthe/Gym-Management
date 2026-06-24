import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  Filter
} from 'lucide-react';

import {
  getMembers,
  deleteMember,
  addMember
} from '../../services/memberService';

export default function Members() {
  const [searchTerm, setSearchTerm] = useState('');
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [newMember, setNewMember] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "Male",
    plan: "Standard"
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await getMembers();
      setMembers(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async () => {
  try {

    await addMember(newMember);

    setShowModal(false);

    setNewMember({
      fullName: "",
      email: "",
      phone: "",
      gender: "Male",
      plan: "Standard"
    });

    fetchMembers();

  } catch (error) {
    console.error(error);
  }
};

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm("Delete this member?");

    if (!confirmDelete) return;

    try {
      await deleteMember(id);

      setMembers(
        members.filter(
          (member) => member._id !== id
        )
      );

    } catch (error) {
      console.error(error);
    }
  };

  const filteredMembers = members.filter(
    (member) =>
      member.fullName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      member.email
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Members...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        <div className="relative w-full sm:w-96">
          {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gym-lightgray" /> */}

          <input
            type="text"
            placeholder="Search members..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>

          <button
              onClick={() => setShowModal(true)}
              className="btn-primary flex items-center gap-2"
            >
            <Plus className="w-4 h-4" />
            Add Member
          </button>
        </div>

      </div>

      {/* Table */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-card overflow-hidden"
      >

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b border-gym-gray">

                <th className="px-6 py-4">
                  ID
                </th>

                <th className="px-6 py-4">
                  Name
                </th>

                <th className="px-6 py-4">
                  Email
                </th>

                <th className="px-6 py-4">
                  Phone
                </th>

                <th className="px-6 py-4">
                  Plan
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

                <th className="px-6 py-4 text-right">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredMembers.map((member) => (

                <tr
                  key={member._id}
                  className="border-b border-gym-gray/40"
                >

                  <td className="px-6 py-4 text-gym-lightgray">
                    {member._id.slice(-6)}
                  </td>

                  <td className="px-6 py-4 text-white">
                    {member.fullName}
                  </td>

                  <td className="px-6 py-4 text-gym-lightgray">
                    {member.email}
                  </td>

                  <td className="px-6 py-4 text-gym-lightgray">
                    {member.phone}
                  </td>

                  <td className="px-6 py-4">
                    <span className="bg-gym-gray px-3 py-1 rounded-full text-xs">
                      {member.plan}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs">
                      {member.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-end gap-2">

                      <button className="p-2 hover:text-white">
                        <Edit2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(member._id)
                        }
                        className="p-2 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <button className="p-2 hover:text-white">
                        <MoreVertical className="w-4 h-4" />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.div>
              {showModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="bg-gray-900 p-6 rounded-xl w-full max-w-md">

              <h2 className="text-xl font-bold text-white mb-4">
                Add Member
              </h2>

              <div className="space-y-3">

                <input
                  placeholder="Full Name"
                  value={newMember.fullName}
                  onChange={(e) =>
                    setNewMember({
                      ...newMember,
                      fullName: e.target.value
                    })
                  }
                  className="input-field"
                />

                <input
                  placeholder="Email"
                  value={newMember.email}
                  onChange={(e) =>
                    setNewMember({
                      ...newMember,
                      email: e.target.value
                    })
                  }
                  className="input-field"
                />

                <input
                  placeholder="Phone"
                  value={newMember.phone}
                  onChange={(e) =>
                    setNewMember({
                      ...newMember,
                      phone: e.target.value
                    })
                  }
                  className="input-field"
                />

                <select
                  value={newMember.gender}
                  onChange={(e) =>
                    setNewMember({
                      ...newMember,
                      gender: e.target.value
                    })
                  }
                  className="input-field"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>

                <select
                  value={newMember.plan}
                  onChange={(e) =>
                    setNewMember({
                      ...newMember,
                      plan: e.target.value
                    })
                  }
                  className="input-field"
                >
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                  <option>Elite</option>
                </select>

              </div>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => setShowModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>

                <button
                  onClick={handleAddMember}
                  className="btn-primary flex-1"
                >
                  Save
                </button>

              </div>

            </div>

          </div>
        )}

    </div>
  );
}

