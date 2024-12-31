export function Gallery() {
  const leftImages = [
    'https://as2.ftcdn.net/v2/jpg/05/14/20/47/1000_F_514204772_mT0EpTdZkScyiRPn2PInaKaqd88QGrzE.jpg',
    'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://as1.ftcdn.net/v2/jpg/05/78/32/06/1000_F_578320651_6RsmjbmiIo1ioL8L4lyH3q4EUFfjoR9l.jpg'
  ];

  const rightImages = [
    'https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3184654/pexels-photo-3184654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://as2.ftcdn.net/v2/jpg/04/03/02/41/1000_F_403024148_sIJoD571eHza96q1VtfYO1J1yccC5prn.jpg'
  ];

  return (
    <>
    <div className="md:opacity-1 opacity-10 absolute z-[10] mt-[60vh]">
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

    <div className="md:opacity-1 opacity-15 absolute z-[10] mt-[-20vh]">
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
