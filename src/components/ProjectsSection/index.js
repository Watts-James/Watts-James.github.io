import React from 'react'
import { ProjectContainer, ProjectContent,Project,ProjectText, ProjectImg, ProjectTitleWrapper,ProjectInfo, ProjectTitle,ProjectHeader, ProjectHeaderWrapper} from './ProjectElements'


const ProjectSection = () => {
  return (
    <ProjectContainer>
        <ProjectContent>
            <Project> 
                <ProjectTitleWrapper>
                    <ProjectTitle>
                        Title
                    </ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectInfo>
                    <ProjectImg>
                        <img src={require('./test.jpg')} width="200" height = "200"/>
                    </ProjectImg>
                    <ProjectText> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </ProjectText>
                </ProjectInfo>
            </Project>

            <Project> 
                <ProjectTitleWrapper>
                    <ProjectTitle>
                        Title
                    </ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectInfo>
                    <ProjectImg>
                        <img src={require('./test.jpg')} width="200" height = "200"/>
                    </ProjectImg>
                    <ProjectText> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </ProjectText>
                </ProjectInfo>
            </Project>

            <Project> 
                <ProjectTitleWrapper>
                    <ProjectTitle>
                        Title
                    </ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectInfo>
                    <ProjectImg>
                        <img src={require('./test.jpg')} width="200" height = "200"/>
                    </ProjectImg>
                    <ProjectText> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </ProjectText>
                </ProjectInfo>
            </Project>

            <Project> 
                <ProjectTitleWrapper>
                    <ProjectTitle>
                        Title
                    </ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectInfo>
                    <ProjectImg>
                        <img src={require('./test.jpg')} width="200" height = "200"/>
                    </ProjectImg>
                    <ProjectText> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </ProjectText>
                </ProjectInfo>
            </Project>
        </ProjectContent>
       
    </ProjectContainer>
  )
}

export default ProjectSection