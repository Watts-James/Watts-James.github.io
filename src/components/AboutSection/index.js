import React from 'react'
import {AboutContainer,AboutContent,AboutPersonal,AboutSkills,AboutImg, AboutText,Image,SkillIcon,SkillText,AboutLink,AboutTitleContainer,AboutTitleBox,AboutTitleWrapper} from './AboutElements'
import {DiJava,DiPython,DiAndroid,DiReact} from 'react-icons/di';
import {SiJavascript,SiCplusplus,SiCss3} from 'react-icons/si';
import {AiOutlineConsoleSql,AiFillGithub,AiFillHtml5} from 'react-icons/ai'

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutTitleContainer >
          <AboutTitleBox>
              <AboutTitleWrapper>
                  <h1>About Me</h1>
              </AboutTitleWrapper>
          </AboutTitleBox>
      </AboutTitleContainer>
        <AboutContent>
          <AboutPersonal>
            <AboutText>
              Front and back-end developer, with a particular interest in data and logic. Graduating 2022 with a Bachelors in Computer Science. Passionate about coding and solving problems through code. Excited to work and evolve alongside other talented programmers.
              <AboutLink>
                <a href="https://github.com/Watts-James">GitHub</a>
              </AboutLink>
            </AboutText>

            <AboutImg>
              <Image src={require('./Me.png')}/>
            </AboutImg>
          </AboutPersonal>

          <AboutSkills>
            <SkillIcon> 
              <SiJavascript/> 
              <SkillText> JavaScript</SkillText>
            </SkillIcon>
            <SkillIcon> 
              <DiPython/> 
              <SkillText> Python</SkillText>
            </SkillIcon>
            <SkillIcon> 
              <DiJava/> 
              <SkillText> Java</SkillText>
            </SkillIcon>
            <SkillIcon> 
              <SiCplusplus/> 
              <SkillText> C/C#/C++</SkillText>
            </SkillIcon>
            <SkillIcon> 
              <DiAndroid/> 
              <SkillText> Android Studio</SkillText>
            </SkillIcon>
            <SkillIcon> 
              <AiOutlineConsoleSql/> 
              <SkillText> SQL</SkillText>
            </SkillIcon>
            <SkillIcon> 
              <DiReact/> 
              <SkillText> React</SkillText>
            </SkillIcon>
            <SkillIcon> 
              <AiFillGithub/> 
              <SkillText> Git</SkillText>
            </SkillIcon>
            <SkillIcon> 
              <AiFillHtml5/> 
              <SkillText> HTML</SkillText>
            </SkillIcon>
            <SkillIcon> 
              <SiCss3/> 
              <SkillText> CSS</SkillText>
            </SkillIcon>
          </AboutSkills>
        </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection