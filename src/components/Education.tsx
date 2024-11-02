import React from 'react';

export default function Education() {
  const education = [
    {
      COLLEGE: 'CHINAMYA VIDYALAYA KOLAR',
      EDU: 'PU COLLEGE',
      PERIOD: '2022-2023',
      SUBJECTS: 'ECONOMICS,BUSINESS,ACCOUTANCY AND COMPUTER SCIENCE',
    },
    {
      COLLEGE: 'GFGC KOLAR',
      EDU : 'BACHELORS OF COMPUTER APPLICATION',
      PERIOD: '2023-2025',
      SUBJECT: 'COMPUTER SCIENCES',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.COLLEGE}</h3>
                  <p className="text-gray-600">{edu.EDU}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.PERIOD}</span>
              </div>
              <p className="text-gray-600">{edu.SUBJECT}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}