import { Asset, ContentType, Entry, RenderDragFn } from '../types';
import * as React from 'react';
import { CustomActionProps } from './ReferenceEditor';
export declare type MissingEntityCardProps = {
    defaultCard: React.ReactElement;
    entity: {
        id: string;
        type: 'Asset' | 'Entry';
    };
};
export declare type RenderCustomMissingEntityCard = ({ defaultCard, }: MissingEntityCardProps) => React.ReactElement;
export declare type DefaultCardRenderer = (props?: CustomEntityCardProps) => React.ReactElement;
export declare type CustomCardRenderer = (props: CustomEntityCardProps, linkActionsProps: CustomActionProps, renderDefaultCard: DefaultCardRenderer) => React.ReactElement | false;
export declare type CustomEntityCardProps = {
    entity: Entry | Asset;
    entityUrl?: string;
    contentType?: ContentType;
    index?: number;
    localeCode: string;
    defaultLocaleCode: string;
    isDisabled: boolean;
    size: 'default' | 'small';
    renderDragHandle?: RenderDragFn;
    onEdit?: () => void;
    onRemove?: () => void;
    onMoveTop?: () => void;
    onMoveBottom?: () => void;
};
