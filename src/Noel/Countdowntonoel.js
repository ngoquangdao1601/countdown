import logo from './img/logo_vnvc_trong_suot.png';
import './style.css';
import './snowEffect.css';
import { useState } from 'react';
import * as React from 'react';

export default function Countdowntonoel() {
    var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    var holiday = ['NOEL', '2023', 'LUNAR NEW YEAR']

    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days_temp = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours_temp = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes_temp = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds_temp = Math.floor((distance % (1000 * 60)) / 1000);

        //If the number has 1 character, insert a "0" before it
        days_temp < 10 ? setDays(`0${days_temp}`) : setDays(days_temp);
        hours_temp < 10 ? setHours(`0${hours_temp}`) : setHours(hours_temp);
        minutes_temp < 10 ? setMinutes(`0${minutes_temp}`) : setMinutes(minutes_temp);
        seconds_temp < 10 ? setSeconds(`0${seconds_temp}`) : setSeconds(seconds_temp);

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);

    return (
        <div id="div_body">

            {/* Snow Effect */}
            <div class="snowflakes" aria-hidden="true">
                <div class="snowflake">❅</div>
                <div class="snowflake">❆</div>
                <div class="snowflake">❅</div>
                <div class="snowflake">❆</div>
                <div class="snowflake">❅</div>
                <div class="snowflake">❆</div>
                <div class="snowflake">❅</div>
                <div class="snowflake">❆</div>
                <div class="snowflake">❅</div>
                <div class="snowflake">❆</div>
                <div class="snowflake">❅</div>
                <div class="snowflake">❆</div>
            </div>

            <div id="div_top">
                <img id="img_logo" src={logo} alt="logo_vnvc" />
            </div>
            <div id="div_center">
                <h3>COUNTDOWN TO</h3><h3 id='h3_holiday'>{holiday[0]}</h3>
            </div>
            <div id="div_bottom">
                <div className="div_item">
                    <h1 id="h1_day">{days}</h1>
                    <h2>DAY</h2>
                </div>
                <div className="div_item">
                    <h1 id="h1_hour">{hours}</h1>
                    <h2>HOUR</h2>
                </div>
                <div className="div_item">
                    <h1 id="h1_minute">{minutes}</h1>
                    <h2>MINUTE</h2>
                </div>
                <div className="div_item">
                    <h1 id="h1_second">{seconds}</h1>
                    <h2>SECOND</h2>
                </div>
            </div>
        </div>
    )
};