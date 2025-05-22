import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              안녕하세요! 저는 5060대를 위한 IT멘토입니다. 
            </p>
            <p className="text-lg text-gray-600">
              디지털 교육,AI활용 콘텐트 제작, IT컨설팅, 창업 교육을 하고 있습니다.  
              모던 웹 애플리케이션을 개발하고 있습니다.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg">
            {/* 프로필 이미지를 추가할 수 있는 공간 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 