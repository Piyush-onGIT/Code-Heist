import React, { Component } from "react";
import ytCSS from './styles/ytCSS.module.css'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/codeheist-bcddd.appspot.com/o/INSTALL%20GIT%20BASH%20TERMINAL%20ON%20WINDOWS.png?alt=media&token=997d9a12-a87d-4b94-bbf2-1be331c102e8',
      caption: 'Slide 1',
      height: '600px',
      width: '1200px'
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/codeheist-bcddd.appspot.com/o/INSTALLATION%20%26%20SETUP.png?alt=media&token=b957833d-4251-4b5f-84e6-7e024aa2fb06',
      caption: 'Slide 2',
      height: '600px',
      width: '1200px'
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/codeheist-bcddd.appspot.com/o/Install%20CC%2B%2B%20compiler.png?alt=media&token=70188dad-6a4a-4735-9306-dfdf97ce2acf',
      caption: 'Slide 3',
      height: '600px',
      width: '1200px'
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/codeheist-bcddd.appspot.com/o/Install%20Setup.png?alt=media&token=7985b672-954e-404c-9c15-eb6d1d23f30c',
      caption: 'Slide 4',
      height: '600px',
      width: '1200px'
    }
  ];
  

export class Youtube extends Component{
    render(){
        return(
            <div>
                <div className="hello">
                    <center className={ytCSS.head}>My Youtube Channel</center>
                </div>
                <p></p>
                <div className="slide-container">
                    <Fade>
                    {fadeImages.map((fadeImage, index)=> (
                        <div className={ytCSS.eachSlide} key={index}>
                        <div style={{'backgroundImage': `url(${fadeImage.url})`, height:fadeImage.height, width: fadeImage.width}}>
                            <p></p><span>{fadeImage.caption}</span>
                        </div>
                        </div>
                    ))} 
                    </Fade>
                </div>
            </div>
        )
    }
}