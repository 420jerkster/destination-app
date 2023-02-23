import React, {Component} from "react"
import "../styles/tailwind_output.css"
import { PopularPlacesData } from "../Data/PopularPlaces"

class PlaceCard extends Component{
    render(){

        const PlaceMapping = PopularPlacesData.map((Places)=>{
            return(
                <div>
                    <div class="relative flex-shrink-0 w-full overflow-hidden" >
                        <div class="absolute top-0 w-full h-100 bg-gradient-to-r from-yellow-800 via-yellow-800 to-transparent">
                            <div class="p-10 mt-8 space-y-16">
                                <p class="text-5xl font-extrabold tracking-wider text-gray-50">{Places.name}</p>
                                <p class="w-1/2 text-lg text-gray-300">{Places.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div>
                {PlaceMapping}
            </div>
        )
    }
}

export default PlaceCard