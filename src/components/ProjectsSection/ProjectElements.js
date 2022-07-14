import styled from 'styled-components'

export const ProjectContainer = styled.div`
    background: #34044c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    height: auto;
    position: relative;
    z-index: 1;
`



export const ProjectContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    border-radius:25px;
    
`
export const Project = styled.div`
    background: #8053a4;
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 20px;
    width: 90%;
    flex-direction: column;
    border-radius: 15px 50px 30px;
    overflow: hidden;
    perspective: 1px;
    
    
`

export const ProjectImg = styled.div`
    padding: 20px;
    background: #662c7c;
    
`

export const ProjectText = styled.div`
    padding: 20px;
    background: #8053a4;
    
`

export const ProjectTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: #662c7c;
    column-span: all;
    
    
`
export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: row;
`