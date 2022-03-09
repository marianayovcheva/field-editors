import React from 'react';
import { ScheduledAction } from '@contentful/app-sdk';
export declare const getScheduleTooltipContent: ({ job, jobsCount, }: {
    job: ScheduledAction;
    jobsCount: number;
}) => string;
export declare const ScheduleTooltip: ({ job, jobsCount, children, }: {
    job: ScheduledAction;
    jobsCount: number;
    children: React.ReactElement;
}) => JSX.Element;
