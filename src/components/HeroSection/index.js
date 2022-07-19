import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Video from '../../videos/file.mp4'
import {Button} from '../ButtonElement';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import resume from '../../resume/Resume.pdf'

const HeroSection = () => {
  const [hover,setHover] = useState(false)
  const onHover = () => {
    setHover(!hover);
  }

  
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay={true} loop={true} muted={true} playsinline={true} src={Video} type='Video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1> James Watts</HeroH1>
          <HeroP>
            Full Stack developer.
          </HeroP>
          <HeroP>
            Passionate about Web, Application and Software Development.
          </HeroP>
          <HeroBtnWrapper>
            <Button onClick={()=>window.open(resume,'_blank')}  onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary = "true"
            dark = "true"
            >
              
              Résumé {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection