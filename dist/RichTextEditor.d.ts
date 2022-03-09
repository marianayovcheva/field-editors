declare function RichTextEditor(props: any): JSX.Element;
declare namespace RichTextEditor {
    export namespace defaultProps {
        export const isInitiallyDisabled: boolean;
    }
}
export default RichTextEditor;
export class ConnectedRichTextEditor extends React.Component<any, any, any> {
    static propTypes: {
        minHeight: PropTypes.Requireable<string | number>;
        sdk: PropTypes.Validator<PropTypes.InferProps<{
            field: PropTypes.Validator<PropTypes.InferProps<{
                id: PropTypes.Validator<string>;
                locale: PropTypes.Validator<string>;
            }>>;
            access: PropTypes.Validator<PropTypes.InferProps<{
                can: PropTypes.Validator<(...args: any[]) => any>;
            }>>;
            parameters: PropTypes.Requireable<PropTypes.InferProps<{
                instance: PropTypes.Validator<PropTypes.InferProps<{
                    getEntryUrl: PropTypes.Requireable<(...args: any[]) => any>;
                    getAssetUrl: PropTypes.Requireable<(...args: any[]) => any>;
                }>>;
            }>>;
        }>>;
        value: PropTypes.Requireable<object>;
        isDisabled: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onAction: PropTypes.Requireable<(...args: any[]) => any>;
        isToolbarHidden: PropTypes.Requireable<boolean>;
        actionsDisabled: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        value: import("@contentful/rich-text-types").Document;
        onChange: (...args: any[]) => void;
        onAction: (...args: any[]) => void;
        isDisabled: boolean;
        isToolbarHidden: boolean;
        actionsDisabled: boolean;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    editor: React.RefObject<any>;
    richTextAPI: {
        sdk: {
            object: any;
        };
        logViewportAction: {
            function: any;
        };
        createActionLogger: {
            function: any;
        };
    };
    slatePlugins: any[];
    onChange: (editor: any) => void;
    callOnChange: import("lodash").DebouncedFunc<() => void>;
    handleKeyDown: (event: any, editor: any, next: any) => any;
}
import React from "react";
import PropTypes from "prop-types";
