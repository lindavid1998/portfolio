import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineEvents from './timelineEvents';
import { ReactComponent as CodeIcon } from './code-solid.svg';
import { ReactComponent as WorkIcon } from './briefcase-solid.svg';
import { ReactComponent as SchoolIcon } from './graduation-cap-solid.svg';

const Timeline = () => {
	return (
		<VerticalTimeline>
			{timelineEvents.map((event) => {
				return (
					<VerticalTimelineElement
						key={event.key}
						date={event.date}
						icon={
							event.icon === 'code' ? (
								<CodeIcon fill='white' />
							) : event.icon === 'work' ? (
								<WorkIcon fill='white' />
							) : (
								<SchoolIcon fill='white' />
							)
						}
						iconStyle={{ background: 'var(--accent-color)' }}
						contentStyle={{
							background: 'transparent',
							border: '1px solid var(--accent-color)',
							color: '#fff',
						}}
						contentArrowStyle={{
							borderRight: '7px solid  var(--accent-color)',
						}}
					>
						<h3 className='vertical-timeline-element-title'>{event.title}</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							{event.location}
						</h4>
						<p id='description'>{event.description}</p>
					</VerticalTimelineElement>
				);
			})}
		</VerticalTimeline>
	);
};

export default Timeline;
