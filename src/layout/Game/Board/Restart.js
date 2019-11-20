import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
                background: white
                color: #045FB4
                font-size: 1em;
                margin: 1em;
                margin-top:10%;
                margin-left:33%;
                padding: 0.25em 1em;
                border: 1px solid black;
                vorder-radius: 3px;`

function Restart({onClick}){

    return (
        <Button  onClick={onClick}>
            Jogar Novamente
        </Button>
    );
}

export default Restart;