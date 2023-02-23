import React, {Component} from "react"
import "../styles/tailwind_output.css"
import BackG from "../Files/Page_2_B4.mp4"
import { Page_2_Data } from "../Data/Page_2_Data"
import TopBar from "./TopBar"


class App extends Component{
    render(){

        const Place = Page_2_Data.map((Place)=>{

            const Place_para = Place.para.map((place_para)=>{
                return(
                    <div>
                        <p className="text-xl text-gray-700 ">{place_para}</p>
                    </div>
                )
            })

            const Place_nearby = Place.para.map((place_nearby)=>{
                return(
                    <div>
                        
                    </div>
                )
            })

            return(
                <div className="relative flex w-full ">
                    <div className="z-20 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-transparent ">
                        <div className="w-1/2 px-2 py-5 space-y-10">
                            <p className="text-4xl font-bold text-center text-gray-900">{Place.name}</p>
                            {Place_para}
                        </div>
                    </div>

                    <img src={Place.img_path} className="absolute top-0 right-0 z-10 object-cover w-1/2 h-108" />
                </div>                                    
            )
        })

        return(
            <div>
                {/*Top bar*/}
                <div className="relative w-full shadow-md h-100 ">
                    <video src={BackG} autoPlay loop muted className="object-cover w-full h-100" />

                    <div className="absolute top-0 z-30 w-full ">
                        <TopBar />
                    </div>

                    <div className="absolute top-0 z-20 w-full ">
                        <div className="mx-auto space-y-4 mt-36 max-w-max">
                            <input placeholder="Search for places" className="w-full p-3 text-lg font-semibold placeholder-gray-500 shadow-sm outline-none bg-gray-50 h-14" />
                            <div className="flex space-x-4">
                                <p className="p-1 font-semibold bg-black cursor-pointer text-gray-50 bg-opacity-40 hover:bg-opacity-60 max-w-max">Best 3 places to visit in Hawaii</p>
                                <p className="p-1 font-semibold bg-black cursor-pointer text-gray-50 bg-opacity-40 hover:bg-opacity-60 max-w-max">Best 10 places to visit in Hawaii</p>
                                <p className="p-1 font-semibold bg-black cursor-pointer text-gray-50 bg-opacity-40 hover:bg-opacity-60 max-w-max">Best 10 restaurants to visit in Hawaii</p>
                                <p className="p-1 font-semibold bg-black cursor-pointer text-gray-50 bg-opacity-40 hover:bg-opacity-60 max-w-max">Best 4 beaches to visit in Hawaii</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div classNam0e=" space-x-3">
                    <p className="py-24 text-6xl font-extrabold text-center text-gray-900">Top 3 Places to visit in Hawaii</p>

                    <div className="">
                        {Place}
                    </div>
                </div>
            </div>
        )
    }
}

export default App