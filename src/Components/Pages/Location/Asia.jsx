import React from 'react'
import Box from './Box'

function Asia() {
    return (
        <div className='grid grid-cols-3 mt-8 gap-5'>
            <Box img="/images/pages/flag_lg_2.webp" title={'Singapore'} />
            <Box img="/images/pages/flag_lg_3.webp" title={'Lagos'} />
            <Box img="/images/pages/flag_lg_1.webp" title={'US Dallas'} />
            <Box img="/images/pages/flag_lg_1.webp" title={'US Washington, D.C.'} />
            <Box img="/images/pages/flag_lg_1.webp" title={'US Bay Area'} />
            <Box img="/images/pages/flag_lg_4.webp" title={'São Paulo'} />
        </div>
    )
}

export default Asia
