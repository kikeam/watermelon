import React from 'react'
import styled from 'styled-components'
import Operators from './Operators'

const Title = styled.h2`
    color: black;
    height: 30px;
    background-color: ${({ theme }) => theme.green2};
    margin: 0;
    padding: 5px;
`
const OperatorsContainer = styled.div`
    min-height: 200px;
    min-width: 100px;
    text-align: center;
    background-color: ${({ theme }) => theme.gray};

`


const Task = ({name}) => {
    
    return (
        <div>
            <Title>{name}</Title>
            <OperatorsContainer>
                <Operators filtro={name} elements={{img:true,name:false,time:false}}/>
            </OperatorsContainer>
        </div>
    )
}

export default Task
