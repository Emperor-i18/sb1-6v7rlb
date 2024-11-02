import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: 'Tech Corp',
      role: 'Senior Full Stack Developer',
      period: '2020 - Present',
      description: 'Led development of enterprise applications using React and Node.js.',
    },
    {
      company: 'StartUp Inc',
      role: 'Frontend Developer',
      period: '2018 - 2020',
      description: 'Developed responsive web applications and improved user experience.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}