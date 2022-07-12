import React, {useState} from 'react'
import Video from '../../videos/file.mp4'
import {Button} from '../ButtonElement';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
  const [hover,setHover] = useState(false)
  const onHover = () => {
    setHover(!hover);
  }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='Video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1> James Watts</HeroH1>
          <HeroP>
            Full Stack developer, all around cool guy.
          </HeroP>
          <HeroBtnWrapper>
            <Button to='/Link' onMouseEnter={onHover} 
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