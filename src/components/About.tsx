import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern patterns."
    },
    {
      icon: <Palette className="text-purple-400" size={24} />,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="text-teal-400" size={24} />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and search engine visibility."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg text-slate-300">
              <p className="text-xl leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating web applications that make a difference. I love turning complex 
                problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in continuous learning and staying 
                up-to-date with the latest industry trends.
              </p>
              <p className="text-lg leading-relaxed">
                My goal is to build digital experiences that not only look great 
                but also perform exceptionally and provide real value to users.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                5+ Years Experience
              </span>
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                50+ Projects Completed
              </span>
              <span className="px-4 py-2 bg-teal-600/20 text-teal-300 rounded-full text-sm font-medium border border-teal-500/30">
                Remote Friendly
              </span>
            </div>
          </div>

          <div className="space-y-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:translate-y-[-2px]"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-slate-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;