import React, {Component} from "react"
import "../styles/tailwind_output.css"
import Next_w from "../Files/next_w.png"
import Back_w from "../Files/back_w.png"

/*Image Paths*/
import { PopularPlacesData } from "../Data/PopularPlaces"
import { PopularRestroData } from "../Data/PopularPlaces"

class Popular extends Component{
    render(){

        let count = -1

        function Slider_places() {
            count ++
            const scroll_list = ["scroller-onclick-2", "scroller-onclick-3", "scroller-onclick-4", "scroller-onclick-5", "scroller-onclick-6"]
            document.getElementById("popular-places").classList.add(scroll_list[count])

            if (count == 5){
                count = -1
                for (var i = 0 ; i < scroll_list.length; i++){
                    document.getElementById("popular-places").classList.remove(scroll_list[i])

                }
            }
        }

        function Slider_restro() {
            count ++
            const scroll_list = ["scroller-onclick-2", "scroller-onclick-3", "scroller-onclick-4", "scroller-onclick-5", "scroller-onclick-6"]
            document.getElementById("popular-restro").classList.add(scroll_list[count])

            if (count == 5){
                count = -1
                for (var i = 0 ; i < scroll_list.length; i++){
                    document.getElementById("popular-restro").classList.remove(scroll_list[i])

                }
            }
        }

        const PopularPlaces = PopularPlacesData.map((Places)=>{
            return(
                <div className="relative flex-shrink-0 w-full overflow-hidden h-103" >
                    <img src={Places.img_path} className="object-cover w-full h-full xl:float-right xl:w-1/2"  />
                    
                    <div className="absolute bottom-0 w-full xl:top-0 xl:h-103 bg-gradient-to-t xl:bg-gradient-to-r from-yellow-800 via-yellow-800 to-transparent">
                        <div className="p-3 space-y-8 xl:p-10 xl:mt-8 xl:space-y-16">
                            <p className="text-3xl font-extrabold tracking-wider xl:text-5xl xl:w-1/2 text-gray-50">{Places.name}</p>
                            <p className="text-sm text-gray-200 xl:w-1/2 xl:text-lg">{Places.desc}</p>
                        </div>
                    </div>
            
                </div>
            )
        })
        
        const PopularRestro = PopularRestroData.map((Restro)=>{
            return(
                <div className="relative flex-shrink-0 w-full overflow-hidden h-103" >
                    <img src={Restro.img_path} className="object-cover w-full h-full xl:float-right xl:w-1/2 "  />
                    
                    <div className="absolute bottom-0 w-full xl:top-0 xl:h-103 bg-gradient-to-t xl:bg-gradient-to-r from-yellow-800 via-yellow-800 to-transparent">
                        <div className="p-3 space-y-8 xl:p-10 xl:mt-8 xl:space-y-16 ">
                            <p className="text-3xl font-extrabold tracking-wider xl:text-5xl xl:w-1/2 text-gray-50">{Restro.name}</p>
                            <p className="text-sm text-gray-200 xl:w-1/2 xl:text-lg">{Restro.desc}</p>
                        </div>
                    </div>
            
                </div>
            )
        })

        return(
            <div className="">

                <div id="next_places" onClick={Slider_places} className="absolute right-0 z-40 w-10 transition-all duration-300 cursor-pointer xl:w-16 bg-gradient-to-r from-transparent to-black h-103">
                    <img src={Next_w} className="w-8 h-8 ml-2 select-none xl:w-12 xl:h-12 mt-52" />
                </div>

                <div id="popular-places" className="z-30 flex flex-row">
                    {PopularPlaces}
                </div>

                {/*Popular Restro*/}
                <div id="next_restro" onClick={Slider_restro} className="absolute right-0 z-40 w-10 transition-all duration-300 cursor-pointer xl:w-16 bg-gradient-to-r from-transparent to-black h-103">
                    <img src={Next_w} className="w-8 h-8 ml-2 select-none xl:w-12 xl:h-12 mt-52 " />
                </div>

                <div id="popular-restro" className="z-30 flex flex-row">
                    {PopularRestro}
                </div>
            </div>

        )
    }
}


export default Popular;
