import { useEffect, useState } from 'react'
import './Countdown.css'

export default function Countdown(props) {
    const [months, setMonths] = useState(0)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const countdownDate = new Date("August 31, 2023 23:59:59").getTime()

    useEffect(() => {
        document.getElementById('countdown1').style.opacity = 1
        document.getElementById('countdown2').style.opacity = 1
        document.getElementById('countdown3').style.opacity = 1
        document.getElementById('countdown4').style.opacity = 1

        const startCountdown = () => {
            setInterval(() => {
                const now = new Date().getTime()
                const distance = countdownDate - now
                setMonths(Math.floor(distance / (1000 * 60 * 60 * 24 * 30)))
                setDays(Math.floor(distance / (1000 * 60 * 60 * 24)) - (months * 30.436875).toPrecision(2))
                setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
                setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            }, 1000)
        }
        startCountdown()
    })

    return(
        <div id='countdown' className="text-center auto-cols-max">
            <div id='countdown1' className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{months > 12 || days > 31 || hours > 23 || minutes > 60 ? '0' : months}</span>
                <span style={{fontSize: window.innerWidth < 768 ? 12 : 16}}>{months === 1 ? 'kuukausi' : 'kuukautta'}</span>
            </div> 
            <div id='countdown2' className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{months > 12 || days > 31 || hours > 23 || minutes > 60 ? '0' : days}</span>
                <span style={{fontSize: window.innerWidth < 768 ? 12 : 16}}>{days === 1 ? 'päivä' : 'päivää'}</span>
            </div> 
            <div id='countdown3' className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{months > 12 || days > 31 || hours > 23 || minutes > 60 ? '0' : hours}</span>
                <span style={{fontSize: window.innerWidth < 768 ? 12 : 16}}>{hours === 1 ? 'tunti' : 'tuntia'}</span>
            </div> 
            <div id='countdown4' className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{months > 12 || days > 31 || hours > 23 || minutes > 60 ? '0' : minutes}</span>
                <span style={{fontSize: window.innerWidth < 768 ? 12 : 16}}>{minutes === 1 ? 'minuutti' : 'minuuttia'}</span>
            </div>
        </div>
    )
}