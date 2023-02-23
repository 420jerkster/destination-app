import React, {Component} from "react"
import "../styles/tailwind_output.css"
import beach_background from "../Files/Hawaii_beach.jpg"
import text_v_background from "../Files/Page_2_B4.mp4"
import Next_w from "../Files/next_w.png"
import Back_w from "../Files/back_w.png"
/*Image Paths*/
import { AboutHawaii } from "../Data/About_scroller-x"


class AboutPage extends Component{
    render(){

        const AbtHawaii = AboutHawaii.map((index)=>{
            return(
                <div className="relative bg-white h-100 w-80 lg:h-105.5 lg:w-100 cursor-pointer flex-shrink-0 rounded-md overflow-hidden">
                    <img src={index.img_path} className="object-cover h-64 w-80 lg:w-100 lg:h-80 "/>
                    <p className="mt-2 text-lg font-extrabold tracking-wider text-center text-gray-900 uppercase lg:text-2xl ">{index.name}</p>
                    <p className="h-40 p-2 overflow-auto text-sm font-semibold text-gray-600 no-scrollbar lg:text-base"><span className="text-gray-800">{index.span}</span> {index.desc}</p>
                </div>
            )
        }) 

        return(
            <div>
                <div className="w-full h-screen bg-black">
                    <div className="">
                        <div className="relative w-full h-52">
                            <video src={text_v_background} autoPlay loop muted className="object-cover w-full h-full " />
                            <p className="absolute top-0 w-full h-full pt-6 font-extrabold tracking-widest text-center text-transparent uppercase bg-black text-7xl md:text-8xl mix-blend-multiply text-gray-50 2xl:text-11xl">About Hawaii</p>
                            {/*<p className="text-4xl font-extrabold tracking-widest text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 xl:text-9xl">About Hawaii</p>*/}
                            
                        </div>
                    </div>
                    
                    <div class="relative">
                        <div className="flex my-3 ml-4 space-x-8 overflow-auto lg:my-10 no-scrollbar">
                            {AbtHawaii}
                        </div>
                        <div id="next_places" className="absolute top-0 right-0 z-40 w-10 h-full transition-all duration-300 cursor-pointer xl:w-16 bg-gradient-to-r from-transparent to-black">
                            <img src={Next_w} className="w-8 h-8 ml-2 select-none xl:w-12 xl:h-12 mt-52" />
                        </div>
                    </div>
                    
                    <div className="p-3 mx-auto mt-20 bg-white bg-opacity-75 cursor-pointer xl:mt-16 hover:bg-opacity-60 max-w-max backdrop-blur-md backdrop-filter">
                        <p className="text-lg font-semibold tracking-wider text-black select-none lg:text-xl">Explore More</p>
                    </div>
                </div>
                
            </div>

        )
    }
}


export default AboutPage;
