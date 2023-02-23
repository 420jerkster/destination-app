import React, {Component} from "react"
import "../styles/tailwind_output.css"
import Background from "../Files/Page_2_B1.mp4"
import TopSearchBar from "./Search_Card_Header"
import PlaceCard from "./PlaceCard"

class App extends Component{
    render(){
        return(
            <div>
            
                <div className="relative">
                    <video src={Background} autoPlay loop muted className="object-cover w-full h-104 " />
                    
                    <div className="absolute top-0 w-full h-104 bg-gradient-to-r from-black to-transparent">
                        <div className="m-10 space-y-6 mt-28 max-w-max">
                            <p className="text-5xl font-extrabold text-center text-gray-300">Popular Places</p>
                            <p className="text-5xl font-extrabold text-center text-gray-300">in</p>
                            <p className="font-extrabold text-center uppercase text-8xl text-gray-50">Hawaii</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto my-10 shadow-md w-114">
                    <input placeholder="Seach for places" className="w-full h-12 p-3 text-lg font-bold placeholder-gray-500 bg-gray-300 rounded-md outline-none" />
                </div>

                <div className="w-9/12 mx-auto bg-gray-300">
                    <p>akjsdhas</p>
                </div>
            </div>
        )
    }
}

export default App