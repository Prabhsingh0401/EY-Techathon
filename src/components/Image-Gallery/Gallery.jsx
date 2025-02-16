export function Gallery() {
  const leftImages = [
    'https://i0.wp.com/www.re-thinkingthefuture.com/wp-content/uploads/2022/02/A6300-Sustainability-and-Indian-Villages-Image-5-1024x683.jpg',
    'https://theschoolofpolitics.com/blog/wp-content/uploads/2023/09/small-town.jpeg',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/0*lxr0_YyNDQHzX667'
  ];

  const rightImages = [
    'https://www.planindia.org/wp-content/uploads/2022/01/4-3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbJ3HSje5MIV9JqXR3tOLxhs88vZ0ihuuRA&s',
    'https://as2.ftcdn.net/v2/jpg/04/03/02/41/1000_F_403024148_sIJoD571eHza96q1VtfYO1J1yccC5prn.jpg'
  ];

  return (
    <>
    <div className="md:opacity-1 lg:opacity-30 opacity-0 absolute z-[10] mt-[60vh]">
      <div className="flex lg:right-0 ml-[20vw] lg:ml-[50vw] justify-between w-[100vw] lg:w-[36vw] h-[130vh] lg:h-[150vh] overflow-hidden ">
        <div className="flex flex-col p-[1vw] mt-10">
          {leftImages.map((image, index) => (
            <div
              key={index}
              className="h-[60vh] w-[50vw] lg:w-[16vw] bg-center bg-cover rounded-[20px] mt-5"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="flex flex-col gap-[2vh] p-[1vw] mt-[10vh]">
          {rightImages.map((image, index) => (
            <div
              key={index}
              className="h-[38vh] w-[50vw] lg:w-[16vw] bg-center bg-cover rounded-[20px]"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>

    <div className="md:opacity-30 opacity-15 absolute z-[10] mt-[-20vh]">
      <div className="flex left-0 mr-[40vw] justify-between w-[100vw] lg:w-[36vw] h-[130vh] lg:h-[150vh] overflow-hidden ">
        <div className="flex flex-col p-[1vw] mt-10">
          {leftImages.map((image, index) => (
            <div
              key={index}
              className="h-[60vh] w-[50vw] lg:w-[16vw] bg-center bg-cover rounded-[20px] mt-5"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="flex flex-col gap-[2vh] p-[1vw] mt-[10vh]">
          {rightImages.map((image, index) => (
            <div
              key={index}
              className="h-[38vh] w-[50vw] lg:w-[16vw] bg-center bg-cover rounded-[20px]"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
