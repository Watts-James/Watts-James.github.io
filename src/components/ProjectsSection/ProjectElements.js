import styled from 'styled-components'

export const ProjectContainer = styled.div`
    background-image: url("https://i.imgur.com/yJUFvaS.png");
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: relative;
    z-index: 1;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`

export const ProjectContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    margin: 25px;
    flex-direction: column;
    border-radius:25px;
    background: rgba(204, 186, 219, 0.8);
    padding-top: 20px;
    padding-bottom: 20px;
    

    border-style: outset;
    border-color: #9c52a1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media screen and (max-width:768px) {
        width: 98%;
    }
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover{
        transition: all 0.5 ease-in-out;
       
        box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 25px;
    }
`

export const ProjectImg = styled.div`
    background: #b398c8;
    display:flex;
    z-index: 5;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const ProjectText = styled.div`
    padding: 20px;
    background: #FFF;
    overflow: hidden;
`

export const ProjectTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: #6752a2;
    column-span: all;
    font-weight: bold;
    color: #f0eef6;
    z-index: 1;

    border-bottom-style:solid;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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

export const ProjectTitle = styled.div`
    position: relative;
    left: 35%;

`







