import styled from 'styled-components'

export const ProjectContainer = styled.div`
    background: #5b2379;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: relative;
    z-index: 1;
`

export const ProjectContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    margin: 25px;
    flex-direction: column;
    border-radius:25px;
    background: #69328a;
    padding-top: 20px;
    padding-bottom: 20px;

    border-style: outset;
    border-color: #9c52a1;
    
`
export const Project = styled.div`
    background: #000;
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
    background: #b398c8;
    display:flex;
`

export const ProjectText = styled.div`
    padding: 20px;
    background: #ccbadb;
    overflow: hidden;
    
`

export const ProjectTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: #000;
    column-span: all;
    font-weight: bold;
    color: #d4c85b;
`
export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: row;
    background: #ccbadb;

    @media screen and (max-width:768px) {
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
`

export const ProjectTitle = styled.div`
    position: relative;
    left: 35%;

    @media and screen (max-width:768px){
        left:30%;
    }
`





