import React from "react";
import Hero from "../../assets/images/tesla-model-x.webp";
import video from "../../assets/images/Electric.webm";
import dummyVideo from "../../assets/images/atoms.mp4";
import model3 from "../../assets/images/model3.jpg"
import models from "../../assets/images/models.jpg"
import modely from "../../assets/images/modely.jpg"
import modelx from "../../assets/images/modelx.jpg"
// import model3 from "../../assets/images/model3.jpg"

const Index = () => {
  const products = [
    {
      id: 1,
      title: "CHARJ",
      videoUrl: video,
      videoBackground: false,
      subTitle: "Schedule a Demo Drive Today",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 2,
      title: "The Energy Pedestal",
      videoUrl: dummyVideo,
      videoBackground: true,
      subTitle: "Lease from $429/mo",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 3,
      title: "Model S",
      imgUrl: models,
      subTitle: "Lease from $429/mo",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 4,
      title: "Model X",
      imgUrl: modelx,
      subTitle: "Lease from $429/mo",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 5,
      title: "Model Y",
      imgUrl: modely,
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
            <div className="relative flex justify-center items-center h-screen w-full ">
              {item.imgUrl && (
                <img
                  src={item.imgUrl}
                  alt=""
                  className="h-full w-screen object-cover"
                />
              )}
              {
                item.videoUrl && (item.videoBackground ? (
                  <div className="bg-[#000000] h-full w-screen flex justify-center">
                    <video src={item.videoUrl} autoPlay loop muted className="h-full w-[1200px] object-cover" />
                  </div>
                ) : (
                  <video src={item.videoUrl} autoPlay loop muted className="h-full w-screen object-cover" />
                ))
              }
              <div className="absolute top-28 w-full flex flex-col text-center justify-center items-center text-white gap-y-7">
                <h1 className="text-5xl font-medium">{item.title}</h1>
                <p>{item.subTitle}</p>
              </div>
              <div className="absolute w-full bottom-20 flex flex-row gap-3 text-center justify-center items-center">
                {item.id === 1 ? (
                  <button className="bg-gray-100 px-20 py-1.5 text-black text-md rounded-sm">
                    ASK US HOW
                  </button>
                ) : (
                  <>
                    <button className="bg-gray-600 px-5 md:px-20 py-1.5 text-white text-md rounded-sm">
                      ASK US HOW
                    </button>
                    <button className="bg-gray-100 px-5 md:px-20 py-1.5 text-black text-md rounded-sm">
                      ASK US HOW
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Index;
