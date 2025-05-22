import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          안녕하세요!
          <br />
          <span className="text-3xl md:text-4xl text-blue-400">5060대를 위한 IT멘토, 티토입니다.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          디지털 역량을 강화하여 경제적 자립과 사회적 연결을 지원합니다.
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
        >
          연락하기
        </a>
      </div>
    </section>
  );echo "teetto" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kwonyoonkyung/teetto.git
git push -u origin main
};

export default Hero; 