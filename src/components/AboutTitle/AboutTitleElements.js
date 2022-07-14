import styled from 'styled-components'

export const AboutTitleContainer = styled.div`
    background: #5b2379;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
`
export const AboutTitleWrapper = styled.div`
    border-radius: 50px;
    background: #000;
    color: #d4c85b;
    padding: 10px;
    outline-style: solid;
    outline-color: #d4c85b;
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