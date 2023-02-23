import React, {Component} from "react"
import "../styles/tailwind_output.css"

class TopSearchBar extends Component{
    render(){
        return(
            <div className="flex w-full p-8 bg-black bg-opacity-50 space-x-28 rounded-xl backdrop-blur-md backdrop-filter h-98">
                <div className="m-10 space-y-6 max-w-max">
                    <p className="text-5xl font-extrabold text-center text-pink-600">Popular Places</p>
                    <p className="text-5xl font-extrabold text-center text-green-600">in</p>
                    <p className="font-extrabold text-center uppercase text-8xl text-gray-50">Hawaii</p>
                </div>
                
                <div className="">
                    <input placeholder="Seach for places" className="w-full h-12 p-3 text-lg font-bold placeholder-gray-500 rounded-md outline-none bg-gray-50" />
                </div>
            </div>
        )
    }
}

export default TopSearchBar