import React from 'react'
import { ProjectContainer, ProjectContent,Project,ProjectText, ProjectImg, ProjectTitleWrapper,ProjectInfo, ProjectTitle, ProjectTitleContainer, ProjectTitleBox, ProjectTitleBarWrapper} from './ProjectElements'


const ProjectSection = () => {
  return (
    <ProjectContainer id="projects" >

    <ProjectTitleContainer>
            <ProjectTitleBox>
                <ProjectTitleBarWrapper>
                    <h1>Projects</h1>
                </ProjectTitleBarWrapper>
            </ProjectTitleBox>
        </ProjectTitleContainer>

        <ProjectContent>
            <Project> 
                <ProjectTitleWrapper>
                    <ProjectTitle>
                        Dungeons & Deadlifts
                    </ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectInfo>
                    <ProjectImg>
                        <img src={require('./Dungeons&Deadlifts.png')} width="200" height = "200"/>
                    </ProjectImg>
                    <ProjectText> 
                        Served as a key member of a development team that created a workout tracker with classic RPG elements. Dungeons & Deadlifts was crafted using Android Studio. Complete with persistent back-end and fully animated custom characters. 
                    </ProjectText>
                </ProjectInfo>
            </Project>

            <Project> 
                <ProjectTitleWrapper>
                    <ProjectTitle>
                        Portfolio Website
                    </ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectInfo>
                    <ProjectImg>
                        <img src={require('./Website.png')} width="200" height = "200"/>
                    </ProjectImg>
                    <ProjectText> 
                        Built from the ground up using React. Mobile friendly and very purple.
                    </ProjectText>
                </ProjectInfo>
            </Project>

            <Project> 
                <ProjectTitleWrapper>
                    <ProjectTitle>
                        JamesBot
                    </ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectInfo>
                    <ProjectImg>
                        <img src={require('./discord.png')} width="200" height = "200"/>
                    </ProjectImg>
                    <ProjectText> 
                        A Notification Bot for discord, notifies the server when the first person enters a voice chat, a feature Discord was desperately lacking. Utilizes the Discord API through DiscordJs.
                    </ProjectText>
                </ProjectInfo>
            </Project>

            <Project> 
                <ProjectTitleWrapper>
                    <ProjectTitle>
                        Bored Games
                    </ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectInfo>
                    <ProjectImg>
                        <img src={require('./BoredGames.png')} width="200" height = "200"/>
                    </ProjectImg>
                    <ProjectText> 
                        A prototype app developed to provide personally relevant reviews for board and card games. Built using React and the Board Game Atlas API. The development team constructed and applied real world experiments to craft the best user experience.
                    </ProjectText>
                </ProjectInfo>
            </Project>

            <Project> 
                <ProjectTitleWrapper>
                    <ProjectTitle>
                        Understanding Criminal Justice
                    </ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectInfo>
                    <ProjectImg>
                        <img src={require('./DataMining.png')} width="200" height = "200"/>
                    </ProjectImg>
                    <ProjectText> 
                        Data mined large data sets of incarceration rates throughout Canada using the FP-Growth algorithm. Implemented using Python and SQL.
                    </ProjectText>
                </ProjectInfo>
            </Project>
        </ProjectContent>
       
    </ProjectContainer>
  )
}

export default ProjectSection