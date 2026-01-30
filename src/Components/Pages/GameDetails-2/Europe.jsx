import React from 'react'
import LocationBox from './LocationBox'

function Europe() {
  return (
    <div className='mt-4'>
            <div className="grid grid-cols-[750px] gap-4">
                <div className='grid grid-cols-4 gap-4'>
                     <LocationBox text={'Montreal, CAN'}/>
                     <LocationBox text={'Chicago, IL'}/>
                     <LocationBox text={'Los Angeles, CA'}/>
                     <LocationBox text={'New York, NY'}/>
                     <LocationBox text={'Montreal, CAN'}/>
                     <LocationBox text={'Los Angeles, CA'}/>
                     <LocationBox text={'Chicago, IL'}/>
                </div>
            </div>
        </div>
  )
}

export default Europe
