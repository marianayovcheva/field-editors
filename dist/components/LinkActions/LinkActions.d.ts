import * as React from 'react';
import { ContentEntityType, ContentType, ActionLabels, Entry, Asset, NavigatorSlideInfo } from '../../types';
export interface LinkActionsProps {
    entityType: ContentEntityType;
    contentTypes: ContentType[];
    canCreateEntity: boolean;
    canLinkEntity: boolean;
    canLinkMultiple: boolean;
    isDisabled: boolean;
    isFull: boolean;
    isEmpty: boolean;
    onCreate: (contentType?: string, index?: number) => Promise<unknown>;
    onCreated: (entity: Entry | Asset, index?: number, slide?: NavigatorSlideInfo) => void;
    onLinkExisting: (index?: number) => void;
    onLinkedExisting: (entities: Array<Entry | Asset>, index?: number) => void;
    actionLabels?: Partial<ActionLabels>;
    combinedActionsLabel?: string | React.ReactElement;
    itemsLength?: number;
}
export declare const testIds: {
    dropdown: string;
    createAndLink: string;
    createAndLinkWrapper: string;
    linkExisting: string;
};
export declare function LinkActions(props: LinkActionsProps): JSX.Element | null;
