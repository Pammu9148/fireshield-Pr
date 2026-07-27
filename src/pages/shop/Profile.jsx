import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md border border-slate-200">
        <p className="text-slate-600">No user information available.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">User Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-600">Full Name</label>
          <p className="p-2 bg-slate-50 border rounded text-slate-800 font-medium">{currentUser.name}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Email Address</label>
          <p className="p-2 bg-slate-50 border rounded text-slate-800 font-medium">{currentUser.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Role</label>
          <p className="p-2 bg-slate-50 border rounded text-slate-800 font-medium">{currentUser.role || 'User'}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Joined</label>
          <p className="p-2 bg-slate-50 border rounded text-slate-800 font-medium">{currentUser.joinedDate || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;