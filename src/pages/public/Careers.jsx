import React from 'react';

const Careers = () => {
  const openings = [
    {
      id: 1,
      title: 'Embedded Systems Engineer',
      department: 'Engineering',
      location: 'On-site / Hybrid',
      type: 'Full-time',
    },
    {
      id: 2,
      title: 'Frontend React Developer',
      department: 'Software',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      id: 3,
      title: 'IoT Hardware Technician',
      department: 'Operations',
      location: 'On-site',
      type: 'Full-time',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Join Our Team</h2>
        <p className="text-slate-600 max-w-xl mx-auto text-sm">
          We are building next-generation fire safety hardware and smart tracking solutions. Help us save lives through technology.
        </p>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-4">Open Positions</h3>

      <div className="space-y-4">
        {openings.map((job) => (
          <div
            key={job.id}
            className="p-5 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div>
              <h4 className="text-lg font-semibold text-slate-900">{job.title}</h4>
              <p className="text-sm text-slate-500">
                {job.department} • {job.location} • {job.type}
              </p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition text-sm">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;