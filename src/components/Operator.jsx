import React from 'react'
import styled from 'styled-components'


const Name = styled.span`
    color: ${({ theme }) => theme.red};
    font-size: 1rem;
    margin: 0;
    padding: 5px;
    background-color: ${({ theme }) => theme.gray};
    grid-row: 1/3;
`
const Photo = styled.img` 
    width: 65px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.red};
    margin: 5px; 
    background-color: ${({ theme }) => theme.red};
    &:hover{
        border: 2px dashed ${({ theme }) => theme.green1};
    }
    
`
const OperatorContainer = styled.div`
    margin: auto;
`
const NameAndTimeContainer =styled.div`
    display: grid;
    grid-template-columns: auto auto;
    direction: ltr;
    align-items: center;
    justify-content: center;
    

`
const Time = styled.span`
    color: ${({ theme }) => theme.gray};
    width:10px;
    height: 10px;
    font-size: 0.6rem; 
    padding: 2px;
    background-color: ${({ theme }) => theme.red};
    text-align: center; 
`


const Operator = ({operator,elements}) => {
    return (
        <OperatorContainer>
            {elements.img && <Photo src={operator.src}/>}
            <NameAndTimeContainer>
            {elements.name && <Name>{operator.name}</Name>}
            {elements.time &&
            <> 
            <Time>{operator.entryTime}</Time> 
            <Time>{operator.departurTime}</Time>
            </>}
            </NameAndTimeContainer>
        </OperatorContainer>
    )
}

export default Operator
