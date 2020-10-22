import styled from 'styled-components'

const OperatorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: fixed;
  height:90%;
  margin: 10px;
  right:0;
  direction: rtl;
  width:200px;
  
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  /* Ponemos un color de fondo y redondeamos las esquinas del thumb */
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
    
  }
  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
  /* Cambiamos el fondo cuando esté en active */
  &::-webkit-scrollbar-thumb:active {
      background-color: #999999;
  }
  /* Ponemos un color de fondo y redondeamos las esquinas del track */
  &::-webkit-scrollbar-track {
      
     
  }
  /* Cambiamos el fondo cuando esté en active o hover */
  &::-webkit-scrollbar-track:hover,
  .container::-webkit-scrollbar-track:active {
    background: #d4d4d4;
    
  }

`
export default OperatorsContainer