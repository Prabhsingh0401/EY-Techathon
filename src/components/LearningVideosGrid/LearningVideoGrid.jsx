import React from 'react';

const VideoGrid = () => {
  const videos = [
    {
      url: 'https://www.youtube.com/embed/_BJSG-fdJQA?si=icCt9fAqdnioog4s',
      title: 'Video 1'
    },
    {
      url: 'https://www.youtube.com/embed/igz52RqAvbU?si=28o1Lvdj-bU6AGVL',
      title: 'Video 2'
    },
    {
      url: 'https://www.youtube.com/embed/Fe51S5xUqcc?si=gImKskxZYA2D0Y2c',
      title: 'Video 3'
    },
    {
      url: 'https://www.youtube.com/embed/8A3s9WP_7l4?si=kukJAEKwas5r7dCL',
      title: 'Video 4'
    },
    {
      url: 'https://www.youtube.com/embed/WO_jJge0ZTc?si=2bgPD97gj3RgJtzZ',
      title: 'Video 5'
    },
    {
      url: 'https://www.youtube.com/embed/sgsSd2FghyU?si=iop4jDnn85k9TdVv',
      title: 'Video 6'
    }
  ];

  return (
    <div className="w-full max-w-8xl mx-auto p-10 mt-10">
        <h1 className="text-3xl font-bold mb-10 bg-gradient-to-r from-pink-500 to-purple-900 bg-clip-text text-transparent">
            Learning Resources
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;