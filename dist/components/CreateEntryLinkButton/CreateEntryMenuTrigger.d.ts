import React from 'react';
import { ContentType } from '../../types';
declare type CreateEntryMenuTriggerChildProps = {
    isOpen: boolean;
    isSelecting: boolean;
};
export declare type CreateEntryMenuTriggerChild = (props: CreateEntryMenuTriggerChildProps) => React.ReactElement;
export declare type CreateCustomEntryMenuItems = ({ closeMenu, }: {
    closeMenu: Function;
}) => React.ReactElement;
interface CreateEntryMenuTrigger {
    contentTypes: ContentType[];
    suggestedContentTypeId?: string;
    contentTypesLabel?: string;
    onSelect: (contentTypeId: string) => Promise<unknown>;
    testId?: string;
    dropdownSettings?: {
        isAutoalignmentEnabled?: boolean;
        position: 'bottom-left' | 'bottom-right';
    };
    customDropdownItems?: React.ReactNode;
    children: CreateEntryMenuTriggerChild;
}
export declare const CreateEntryMenuTrigger: {
    ({ contentTypes, suggestedContentTypeId, contentTypesLabel, onSelect, testId, dropdownSettings, customDropdownItems, children, }: CreateEntryMenuTrigger): JSX.Element;
    defaultProps: {
        testId: string;
        contentTypesLabel: string;
    };
};
export {};
