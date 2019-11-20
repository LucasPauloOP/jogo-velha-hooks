import styled from 'styled-components';

export const Box = styled.button`
    background: white;
    border: 1px solid #FF0040;
    float: left;
    font-size: 600%;
    font-weight: bold;
    line-height: 80%;
    height: 140px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 140px;
    color: ${props =>  props.value === 'X' ? `blue` : `green`  }`;