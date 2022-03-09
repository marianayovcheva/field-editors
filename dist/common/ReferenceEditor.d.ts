import * as React from 'react';
import { FieldConnector } from '@contentful/field-editor-shared';
import { Action, ActionLabels, FieldExtensionSDK, ViewType } from '../types';
import type { LinkActionsProps } from '../components';
import { CustomCardRenderer, RenderCustomMissingEntityCard } from './customCardTypes';
export interface ReferenceEditorProps {
    /**
     * Whether or not the field should be disabled initially.
     */
    isInitiallyDisabled: boolean;
    hasCardEditActions: boolean;
    sdk: FieldExtensionSDK;
    viewType: ViewType;
    renderCustomCard?: CustomCardRenderer;
    renderCustomActions?: (props: CustomActionProps) => React.ReactElement;
    renderCustomMissingEntityCard?: RenderCustomMissingEntityCard;
    getEntityUrl?: (entryId: string) => string;
    onAction?: (action: Action) => void;
    actionLabels?: Partial<ActionLabels>;
    parameters: {
        instance: {
            showCreateEntityAction?: boolean;
            showLinkEntityAction?: boolean;
            bulkEditing?: boolean;
        };
    };
}
export declare type CustomActionProps = LinkActionsProps;
export declare function ReferenceEditor<T>(props: ReferenceEditorProps & {
    children: FieldConnector<T>['props']['children'];
}): JSX.Element;
export declare namespace ReferenceEditor {
    var defaultProps: {
        isInitiallyDisabled: boolean;
        hasCardEditActions: boolean;
    };
}
