import * as React from 'react';
import { ContentType, ContentEntityType, ReferenceValue } from '../types';
import { ReferenceEditorProps } from './ReferenceEditor';
declare type ChildProps = {
    entityId: string;
    entityType: ContentEntityType;
    isDisabled: boolean;
    setValue: (value: ReferenceValue | null | undefined) => void;
    allContentTypes: ContentType[];
    renderCustomCard?: ReferenceEditorProps['renderCustomCard'];
    hasCardEditActions: boolean;
};
export declare function SingleReferenceEditor(props: ReferenceEditorProps & {
    entityType: ContentEntityType;
    children: (props: ChildProps) => React.ReactElement;
}): JSX.Element;
export declare namespace SingleReferenceEditor {
    var defaultProps: {
        hasCardEditActions: boolean;
    };
}
export {};
