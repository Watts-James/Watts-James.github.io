import styled from 'styled-components'

export const AboutContainer = styled.div`
    background-image: url("https://i.imgur.com/yJUFvaS.png");
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
export const AboutContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    margin: 25px;
    flex-direction: column;
    border-radius:25px;
    background: #ccbadb;
    padding-top: 20px;
    padding-bottom: 20px;

    border-style: outset;
    border-color: #9c52a1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media screen and (max-width:768px) {
        width: 98%;
    }
`
export const AboutPersonal = styled.div`
    display:flex;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    width: 95%;
    @media screen and (max-width:768px) {
        flex-direction: column-reverse;
    }
`

export const AboutSkills = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    width: 95%;
    justify-content: center;
    margin: 20px;
    background: #FFF;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    
`
export const AboutImg = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
    
    
`
export const Image = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
    
`

export const SkillIcon = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100px;
    background: #e6e3e8;
    margin: 10px;
    justify-content: center;
    align-items: center;
    font-size: 300%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover{
        transition: all 0.5 ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 25px;
    }
`

export const SkillText = styled.div`
    font-size: 12px;
    display:flex;
    flex-direction: column;
    margin-top: 10px;
`

export const AboutLink = styled.div`
    padding-top: 30px;
    font-weight: bold;
    text-decoration: none;
`
export const AboutTitleContainer = styled.div`
    background: #5b2379;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    
`
export const AboutTitleWrapper = styled.div`
    border-radius: 50px;
    background: #6752a2;
    color: #f0eef6;
    padding: 10px;
    outline-style: solid;
    outline-color: #f0eef6;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    cursor: default;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 24px 38px, rgba(0, 0, 0, 0.22) 0px 20px 20px;
    }
    
`

export const AboutTitleBox = styled.div`
    background: #5b2379;
    display: flex;
    justify-content: left;
    align-items: center;
    width: 1000px;
`