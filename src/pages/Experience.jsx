import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { School } from '@material-ui/icons'
import { Work } from '@material-ui/icons'

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010 - 2014'
        iconStyle={{ background: "#3e497a", color: '#fff'}}
        icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>My Random High School, Random Place, Random State</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010 - 2014'
        iconStyle={{ background: "#3e497a", color: '#fff'}}
        icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>My Random High School, Random Place, Random State</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010 - 2014'
        iconStyle={{ background: "#e9d35b", color: '#fff'}}
        icon={<Work/>}
        >
          <h3 className='vertical-timeline-element-title'>My Random High School, Random Place, Random State</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience