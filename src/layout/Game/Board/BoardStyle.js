import styled from 'styled-components';

export const StatusGame = styled.div`
    margin-bottom: 30px;
    text-align:center;
    font-size: 30px;
    color: ${props => props.WinLoseorDraw === 'Winner: X' && `blue` }
    color: ${props => props.WinLoseorDraw === 'Winner: O' && `blue`}
    color: ${props => props.WinLoseorDraw === 'Draw' && 'red'}
`