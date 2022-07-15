import React from 'react'
import {AboutContainer,AboutContent,AboutPersonal,AboutSkills,AboutImg, AboutText,Image,SkillIcon,SkillText} from './AboutElements'
import {DiJava,DiPython,DiAndroid,DiReact} from 'react-icons/di';
import {SiJavascript,SiCplusplus,SiCss3} from 'react-icons/si';
import {AiOutlineConsoleSql,AiFillGithub,AiFillHtml5} from 'react-icons/ai'

const AboutSection = () => {
  return (
    <AboutContainer>
        <AboutContent>
          <AboutPersonal>
            <AboutText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </AboutText>

            <AboutImg>
              <Image src={require('./test.jpg')}/>
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