import React, { Component } from "react";
import ytCSS from './styles/ytCSS.module.css'

export class Youtube extends Component{
    render(){
        return(
            <div className={ytCSS.main}>
                <a target="_new" href="https://www.youtube.com/channel/UC8YcSQGaN7ouMZ1tYGDstKw">
                    Visit my channel
                </a>
                <p/>
                <span className={ytCSS.name}>My Videos</span>
                <span className={ytCSS.arrow}>&nbsp;&#8595;</span>
                <p></p>
                <div className={ytCSS.videos}>
                    <iframe className={ytCSS.vid1} id="vid1" width="560" height="315"src="https://www.youtube.com/embed/MqcVJKoovq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className={ytCSS.vid2} id="vid2" width="560" height="315"src="https://www.youtube.com/embed/787wxISsniw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p/>
                    <iframe className={ytCSS.vid3} id="vid2" width="560" height="315"src="https://www.youtube.com/embed/QwctWaT45AM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className={ytCSS.vid4} id="vid2" width="560" height="315"src="https://www.youtube.com/embed/fJWMYL39BbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}