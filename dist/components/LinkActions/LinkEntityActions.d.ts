import * as React from 'react';
import { Action, ActionLabels, ContentEntityType, FieldExtensionSDK } from '../../types';
import { LinkActionsProps } from './LinkActions';
import { EditorPermissions } from '../../common/useEditorPermissions';
declare type LinkEntityActionsProps = {
    entityType: ContentEntityType;
    canLinkMultiple: boolean;
    sdk: FieldExtensionSDK;
    isDisabled: boolean;
    editorPermissions: EditorPermissions;
    onCreate: (id: string, index?: number) => void;
    onLink: (ids: string[], index?: number) => void;
    onAction?: (action: Action) => void;
    actionLabels?: Partial<ActionLabels>;
    itemsLength?: number;
};
export declare function useLinkActionsProps(props: LinkEntityActionsProps): LinkActionsProps;
export declare function LinkEntityActions({ renderCustomActions, ...props }: LinkActionsProps & {
    renderCustomActions?: (props: LinkActionsProps) => React.ReactElement;
}): JSX.Element;
export {};
