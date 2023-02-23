import React, {Component} from "react"
import "../styles/tailwind_output.css"
import BackG from "../Files/Page_2_B2.mp4"
import maui from "../Files/Page_2/maui-1.jpg"
import { Page_2_Data } from "../Data/Page_2_Data"

class PlacesCard extends Component{
    render(){

        const Page_2 = Page_2_Data.map((Data)=>{

            const Page_2_p = Data.para.map((paragraph)=>{
                return(
                    <div className="space-y-4">
                        <p>{paragraph}</p>
                    </div>
                )
            })

            const Page_2_nearby = Data.nearby.map((near)=>{
                return(
                    <div className="">
                        <li>{near}</li>
                    </div>
                )
            })

            return(
                <div className="">
                    <div className="relative flex w-full bg-transparent h-103">
                        <div className="z-20 w-full bg-gradient-to-r from-gray-300 via-gray-200 to-transparent">
                            <div className="flex-shrink-0 w-1/2 h-full p-5 py-8 space-y-10">
                                <p className="text-5xl font-extrabold text-gray-900">{Data.name}</p>
                                <p className="h-64 space-y-4 overflow-auto text-lg font-semibold text-gray-600 no-scrollbar">{Page_2_p}</p>
                            </div>
                        </div>

                        <video src={Data.video_path} autoPlay loop muted className="absolute top-0 right-0 z-10 object-cover w-1/2 h-103" />

                    </div>

                    <div className="relative flex w-full bg-transparent h-100">
                        
                        <div className="z-20 w-full bg-gradient-to-l from-gray-300 via-gray-200 to-transparent">
                            <div className="absolute right-0 flex-shrink-0 w-1/2 p-5 space-y-4 pt-14">
                                <p className="text-xl font-extrabold text-gray-900">Nearby Places to visit</p>
                                <p className="space-y-2 text-lg font-semibold text-gray-600">
                                    {Page_2_nearby}
                                </p>
                            </div>
                        </div>

                        <img src={maui} className="absolute top-0 left-0 z-10 object-cover w-1/2 h-100" />
                    </div>
                </div>
            )
        })

        return(
            <div>
                {Page_2}
            </div>
        )
    }
}

export default PlacesCard