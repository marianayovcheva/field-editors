/// <reference types="react" />
import { ReferenceEditorProps } from '../common/ReferenceEditor';
declare type EditorProps = Omit<ReferenceEditorProps, 'hasCardEditActions'>;
export declare function MultipleMediaEditor(props: EditorProps): JSX.Element;
export declare namespace MultipleMediaEditor {
    var defaultProps: {
        isInitiallyDisabled: boolean;
    };
}
export {};
