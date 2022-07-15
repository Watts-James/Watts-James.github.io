import React from 'react'
import {AboutContainer,AboutContent,AboutPersonal,AboutSkills,AboutImg, AboutText,Image,SkillIcon} from './AboutElements'
import {DiJavascript1} from 'react-icons/di';

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
            <SkillIcon> <DiJavascript1/> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
            <SkillIcon> </SkillIcon>
          </AboutSkills>
        </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection