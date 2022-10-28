import { useEffect } from 'react'
import './Countdown.css'

export default function Countdown(props) {
    useEffect(() => {
        document.getElementById('countdown1').style.opacity = 1
        document.getElementById('countdown2').style.opacity = 1
        document.getElementById('countdown3').style.opacity = 1
        document.getElementById('countdown4').style.opacity = 1
    })

    return(
        <div id='countdown' className="text-center auto-cols-max">
            <div id='countdown1' className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                <span style={{"--value":15}}></span>
                </span>
                days
            </div> 
            <div id='countdown2' className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                <span style={{"--value":10}}></span>
                </span>
                hours
            </div> 
            <div id='countdown3' className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                <span style={{"--value":24}}></span>
                </span>
                min
            </div> 
            <div id='countdown4' className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                <span style={{"--value":55}}></span>
                </span>
                sec
            </div>
        </div>
    )
}