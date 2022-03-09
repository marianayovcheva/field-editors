import * as React from 'react';
import { SpaceAPI } from '@contentful/app-sdk';
import { ContentType, Entry, RenderDragFn } from '../../types';
export interface WrappedEntryCardProps {
    getEntityScheduledActions: SpaceAPI['getEntityScheduledActions'];
    getAsset: (assetId: string) => Promise<unknown>;
    entryUrl?: string;
    size: 'small' | 'default' | 'auto';
    isDisabled: boolean;
    isSelected?: boolean;
    onRemove?: () => void;
    onEdit?: () => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    localeCode: string;
    defaultLocaleCode: string;
    contentType?: ContentType;
    entry: Entry;
    renderDragHandle?: RenderDragFn;
    isClickable?: boolean;
    hasCardEditActions: boolean;
    onMoveTop?: () => void;
    onMoveBottom?: () => void;
    hasMoveOptions?: boolean;
}
export declare function WrappedEntryCard(props: WrappedEntryCardProps): JSX.Element;
export declare namespace WrappedEntryCard {
    var defaultProps: {
        isClickable: boolean;
        hasCardEditActions: boolean;
        hasMoveOptions: boolean;
    };
}
