import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          I'm a passionate developer with 5+ years of experience in building web applications.
          My expertise spans across frontend and backend development, with a keen eye for
          design and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {['Open Source', 'AI/ML', 'UI Design', 'Cloud Architecture'].map((interest) => (
                <span key={interest} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}