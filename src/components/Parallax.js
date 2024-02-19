import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import layerfrontimg from '../assets/img/layer-front.png';
import layermidimg from '../assets/img/layer-middle.png';
import layerbaseimg from '../assets/img/layer-base.png';
import groundimg from '../assets/img/ground.png';

export const Parallax = () => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let scrollY = window.scrollY;
            document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`)
        })
    }, [])

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Artist", "Programmer", "Game Designer", "Data Analyst", "UI/UX Designer", "Illustrator" ];
    const period = 800;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(150);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    }

  return (
    <>
    <div className='wrapper' id='home'>
        <div className='content'>
            <header className='header-main'>
                <div className='layers'>
                    <div className='layer-head'>
                        <div className='caption'>Hi! I'm Rán Ægisdóttir</div>
                        <div className='title'><span className="txt-rotate" dataPeriod="1000"><span className="wrap">{text}</span></span></div>
                    </div>
                    <div className='img-layer layer-base' style={{backgroundImage: `url(${layerbaseimg})`}}></div>
                    <div className='img-layer layer-mid' style={{backgroundImage: `url(${layermidimg})`}}></div>
                    <div className='img-layer layer-front' style={{backgroundImage: `url(${layerfrontimg})`}}></div>
                </div>

            </header>

        </div>

    </div>
    </>
  )
}