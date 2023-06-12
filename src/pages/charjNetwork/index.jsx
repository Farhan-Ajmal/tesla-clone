import charjNetworkImg from "../../assets/images/charj_network.webp"
function CharjNetwork() {
    return (
        <div className="bg-[#000000] py-32 h-full">
            <div className="container mx-auto">
                <div className="grid gap-y-6">
                    <h2 className="text-[32px] md:text-4xl xl:text-[44px] 2xl:text-5xl text-center text-white">The Charj Network Has Launched</h2>
                    <hr className="h-[2px] w-[50px] bg-[#1B1B1B] mx-auto" />
                    <div>
                        <div className="container mx-auto flex justify-center">
                            <div className="w-11/12 lg:w-6/12 ">
                                <img src={charjNetworkImg} alt="Image 1" className="mx-auto" />
                            </div>

                        </div>
                        <div className="container mx-auto flex justify-center">
                            <p className="w-11/12 lg:w-6/12 text-white text-[#919191] text-lg leading-7">
                                The Charj Network launch event occured on June 19th 2021 coinciding with the grand opening celebration of the Pride Hartford Travel Center; The First Alternative Fueling Center of Its Kind in the World.  I am proud to have contributed both the 12 Tesla Superchargers at this site as well as two 50kW DC charginger with both CCS1 and CHAdeMO connectors.  We are proud to work with ABB and network parther EVConnect at this critical infrastructure location which enables compliance with the Federal Alternaitive Fuels Corridors Program!  See the news reel of the launch event at the link.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1">
                <div className="col-span-12">
                    {/* <iframe
                        src="//player.vimeo.com/video/556701532?autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0"
                        data-aid="VIDEO_IFRAME_RENDERED"
                        className="x-el x-el-iframe c2-1 c2-2 c2-a c2-b c2-17 c2-c c2-e c2-d c2-18 c2-19 c2-1a c2-1b c2-f c2-1c c2-3 c2-4 c2-5 c2-6 c2-7 c2-8 w-full h-full"
                        title="Example"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe> */}
                    <iframe src="//player.vimeo.com/video/556701532?autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0" width="100%" height="500">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default CharjNetwork