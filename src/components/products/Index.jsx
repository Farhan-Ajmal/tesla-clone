import React from "react";
import Hero from "../../assets/images/tesla-model-x.webp";
import video from "../../assets/images/Electric.webm";

const Index = () => {
  const products = [
    {
      id: 1,
      videoSrc: video, 
      title: "Experience Tesla",
      subTitle: "Schedule a Demo Drive Today",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 2,
      imgSrc: Hero,
      title: "Model 3",
      subTitle: "Lease from $429/mo",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 3,
      imgSrc: Hero,
      title: "Model S",
      subTitle: "Lease from $429/mo",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 4,
      imgSrc: Hero,
      title: "Model X",
      subTitle: "Lease from $429/mo",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 5,
      imgSrc: Hero,
      title: "Model Y",
      subTitle: "Lease from $429/mo",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
  ];
  return (
    <>
      {products.map((item) => {
        return (
          <div className="h-[100vh] max-w-screen relative snap-center">
            <div className="relative flex justify-center items-center h-screen w-full">
              {item.imgSrc && <img src={item.imgSrc} alt="" className="h-full w-screen object-cover" />}
              {item.videoSrc && <video src={item.videoSrc} autoPlay loop muted className="h-full w-screen object-cover" />}
              <div className="absolute top-20 w-full flex flex-col text-center justify-center items-center text-white">
                <h1 className="text-5xl font-medium">{item.title}</h1>
                <p>{item.subTitle}</p>
              </div>
              <div className="absolute w-full bottom-20 flex flex-row gap-3 text-center justify-center items-center">
                {item.id === 1 ? (
                  <button className="bg-gray-100 px-20 py-1.5 text-black text-md rounded-sm">
                    Demo Drive
                  </button>
                ) : (
                  <>
                    <button className="bg-gray-600 px-20 py-1.5 text-white text-md rounded-sm">
                      Demo Drive
                    </button>
                    <button className="bg-gray-100 px-20 py-1.5 text-black text-md rounded-sm">
                      Demo Drive
                    </button>
                  </>
                )}
              </div>
            </div>{" "}
          </div>
        );
      })}
    </>
  );
};

export default Index;
