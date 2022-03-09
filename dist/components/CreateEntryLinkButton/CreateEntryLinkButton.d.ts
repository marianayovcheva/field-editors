import React from 'react';
import { ContentType } from '../../types';
interface CreateEntryLinkButtonProps {
    contentTypes: ContentType[];
    suggestedContentTypeId?: string;
    onSelect: (contentTypeId: string) => Promise<unknown>;
    customDropdownItems?: React.ReactNode;
    disabled?: boolean;
    hasPlusIcon?: boolean;
    useExperimentalStyles?: boolean;
    text?: string | React.ReactElement;
    testId?: string;
    dropdownSettings?: {
        isAutoalignmentEnabled?: boolean;
        position: 'bottom-left' | 'bottom-right';
    };
}
export declare const CreateEntryLinkButton: ({ contentTypes, onSelect, customDropdownItems, text, testId, hasPlusIcon, useExperimentalStyles, suggestedContentTypeId, dropdownSettings, disabled, }: CreateEntryLinkButtonProps) => JSX.Element;
export {};
