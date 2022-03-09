import React from 'react';
import { ReferenceValue } from '../types';
import { ReferenceEditorProps } from '../common/ReferenceEditor';
export declare const SortableLinkList: React.ComponentClass<ReferenceEditorProps & {
    items: ReferenceValue[];
    setValue: (value: ReferenceValue[]) => void;
    isDisabled: boolean;
} & import("react-sortable-hoc").SortableContainerProps, any>;
