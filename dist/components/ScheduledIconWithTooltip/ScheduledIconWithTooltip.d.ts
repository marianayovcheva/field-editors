import React from 'react';
import { SpaceAPI } from '@contentful/app-sdk';
declare type ScheduledIconWithTooltipProps = {
    getEntityScheduledActions: SpaceAPI['getEntityScheduledActions'];
    entityType: 'Entry' | 'Asset';
    entityId: string;
    children: React.ReactElement;
};
export declare const ScheduledIconWithTooltip: ({ entityType, entityId, getEntityScheduledActions, children, }: ScheduledIconWithTooltipProps) => JSX.Element | null;
export {};
