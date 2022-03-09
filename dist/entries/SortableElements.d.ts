import React from 'react';
import { ContentType, ReferenceValue } from '../types';
import { ReferenceEditorProps } from '../common/ReferenceEditor';
export declare const SortableLinkList: React.ComponentClass<ReferenceEditorProps & {
    items: ReferenceValue[];
    setValue: (value: ReferenceValue[]) => void;
    isDisabled: boolean;
    allContentTypes: ContentType[];
    onMove: (oldIndex: number, newIndex: number) => void;
} & import("react-sortable-hoc").SortableContainerProps, any>;
