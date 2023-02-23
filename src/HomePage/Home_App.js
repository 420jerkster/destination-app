import React, {Component} from "react"
import "../styles/tailwind_output.css"
import beach_vid_1 from "../Files/production ID_4556163.mp4"

/*Image Paths*/
import { Img_path } from "../Data/Img_scroller-y"
import AboutPage from "./About"
import Popular from "./PopularPlaces&Restro"
import Footer from "./Footer"


class App extends Component{
    render(){


        const Img_div = Img_path.map((index)=>{
            return(
                <div className="flex space-x-6 ">
                    <img src={index[0]} className="object-fill w-80 h-108" />
                    <img src={index[1]}  className="object-fill mt-14 w-80 h-108 " />
                    <img src={index[2]}  className="object-fill w-80 h-108" />
                </div>
            )
        }) 

        return(
            <div className="overflow-hidden">
                {/* 1 */}
                <div className="relative overflow-hidden">
                    <div className="fixed top-0 z-50 hidden w-full h-16 bg-black bg-opacity-80 backdrop-filter backdrop-blur-md">
                        <div className="flex float-right m-2 space-x-8 ">
                            <div className="bg-green-700 hover:bg-green-800 transition-all duration-300 cursor-pointer p-2.5  rounded-md ">
                                <p className="text-xl font-bold tracking-wider uppercase select-none text-gray-50">Book Now</p>
                            </div>
                            
                            <div className="bg-transparent group p-2.5 cursor-pointer  rounded-md ">
                                <p className="text-xl font-bold tracking-wider uppercase transition-all duration-300 transform select-none group-hover:-translate-y-1 group-hover:text-green-400 text-gray-50">Explore Packages</p>
                            </div>

                            <div className="bg-transparent group p-2.5 cursor-pointer  rounded-md ">
                                <p className="text-xl font-bold tracking-wider uppercase transition-all duration-300 transform select-none group-hover:-translate-y-1 group-hover:text-green-400 text-gray-50">Request Info</p>
                            </div>
                            
                            <div className="bg-transparent group p-2.5 cursor-pointer  rounded-md ">
                                <p className="text-xl font-bold tracking-wider uppercase transition-all duration-300 transform select-none group-hover:-translate-y-1 group-hover:text-green-400 text-gray-50">Contact Us</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="absolute top-0 z-40 w-full bg-opacity-50 h-72 md:h-96 xl:h-screen bg-gradient-to-b from-transparent to-black">
                        <div className="p-6">
                            <div className="mx-auto max-w-max xl:mx-0 xl:ml-20 xl:mt-28 md:mt-16">
                                <p className="font-sans text-6xl font-extrabold tracking-widest text-center uppercase md:text-9xl xl:text-9xl text-gray-50 2xl:text-9xl">Hawaii</p>
                                <p className="text-sm font-bold tracking-wide text-center text-gray-200 md:text-lg">The loveliest fleet of islands that lies anchored in any ocean.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute z-30 hidden top-16 right-8 scroller-y xl:block ">
                        {Img_div}
                    </div>
                    
                    <video src={beach_vid_1} autoPlay muted loop className="object-cover w-full h-72 md:h-96 xl:h-screen" />
                </div>

                {/* 2 */}
                <div className="relative overflow-hidden">
                    <AboutPage />
                </div>

                {/* 2 */}
                <div className="relative xl:h-screen xl:overflow-hidden">
                    <Popular />
                </div>
                
                {/* 3 */}
                <div className="">
                    <Footer />
                </div>
            </div>
        )
    }
}


export default App;
