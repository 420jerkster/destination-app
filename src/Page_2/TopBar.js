import React, {Component} from "react"
import "../styles/tailwind_output.css"

class TopBar extends Component{
    render(){
        return(
            <div className="">
                <div className="flex float-left m-4 space-x-4 ">
                    <div className="p-1 px-3 transition-all duration-200 bg-black bg-opacity-25 rounded-md cursor-pointer hover:translate-y-3 hover:bg-opacity-60 ">
                        <p className="text-lg font-semibold tracking-wider uppercase text-gray-50 ">Book a trip</p>
                    </div>

                    <div className="p-1 px-3 transition-all duration-200 bg-black bg-opacity-25 rounded-md cursor-pointer hover:translate-y-3 hover:bg-opacity-60 ">
                        <p className="text-lg font-semibold tracking-wider uppercase text-gray-50 ">Contact Us</p>
                    </div>

                    <div className="p-1 px-3 transition-all duration-200 bg-black bg-opacity-25 rounded-md cursor-pointer hover:translate-y-3 hover:bg-opacity-60 ">
                        <p className="text-lg font-semibold tracking-wider uppercase text-gray-50 ">Get info</p>
                    </div>
                </div>

                <div className="flex float-right m-4 space-x-4">
                    <div className="p-1 px-3 transition-all duration-200 bg-black rounded-md cursor-pointer hover:translate-y-3 hover:bg-opacity-60 ">
                        <p className="text-lg font-semibold tracking-wider uppercase text-gray-50 ">Join</p>
                    </div>
                    
                    <div className="p-1 px-3 transition-all duration-200 bg-green-500 rounded-md cursor-pointer hover:translate-y-3 hover:bg-green-300 ">
                        <p className="text-lg font-semibold tracking-wider text-gray-900 uppercase ">Login</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar