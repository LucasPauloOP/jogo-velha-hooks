import React from 'react'

import {Box} from './styleSquare';

function Square ({mark, onClick}) {
    console.log(mark);

    return(
        <Box value={mark} onClick={onClick}>
            {mark}
        </Box>
    );

}

export default Square;