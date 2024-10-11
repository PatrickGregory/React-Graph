import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.4,
                },
            }}
        >
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    32 min
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='success' />
                    <TimelineConnector className='bg-primary-subtle' />
                </TimelineSeparator>
                <TimelineContent>
                    Quia quae rerum <span className='fw-bolder'>explicabo officiis</span> beatae
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    56 min
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='error' />
                    <TimelineConnector className='bg-primary-subtle' />
                </TimelineSeparator>
                <TimelineContent>Voluptatem blanditiis blanditiis eveniet</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    2 hrs
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='bg-primary' />
                    <TimelineConnector className='bg-primary-subtle' />
                </TimelineSeparator>
                <TimelineContent>Voluptates corrupti molestias voluptatem</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    1 day
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='bg-primary-subtle' />
                    <TimelineConnector className='bg-primary-subtle' />
                </TimelineSeparator>
                <TimelineContent>Tempore autem saepe <span className='fw-bolder'>occaecati voluptatem</span> tempore</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    2 days
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='bg-warning' />
                    <TimelineConnector className='bg-primary-subtle' />
                </TimelineSeparator>
                <TimelineContent>Est sit eum reiciendis exercitationem</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    4 weeks
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='bg-secondary' />
                    <TimelineConnector className='bg-primary-subtle' />
                </TimelineSeparator>
                <TimelineContent>Dicta dolorem harum nulla eius. Ut quidem quidem sit quas</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
