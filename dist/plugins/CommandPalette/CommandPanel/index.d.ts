export default CommandPalette;
declare class CommandPalette extends React.PureComponent<any, any, any> {
    static propTypes: {
        editor: PropTypes.Requireable<object>;
        command: PropTypes.Requireable<string>;
        richTextAPI: PropTypes.Requireable<object>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    paletteDimensions: {
        height: number;
        width: number;
    };
    isComponentMounted: boolean | undefined;
    bindEventListeners: () => void;
    removeEventListeners: () => void;
    handleOutsideClick: (event: any) => void;
    requestUpdate: import("lodash").DebouncedFunc<() => void>;
    createCommand: (label: any, contentType: any, entry: any, type: any, description: any, thumbnail: any) => {
        label: string;
        thumbnail: any;
        contentType: any;
        callback: () => void;
    };
    onCreateAndEmbedEntity: (contentTypeId: any, nodeType: any) => Promise<any>;
    createContentTypeActions: (actionBuilder: any, contentType: any) => Promise<any[]>;
    createAssetActions: (actionBuilder: any) => Promise<any[]>;
    handleScroll: (e: any) => void;
    clearCommand: () => void;
    createCommands: (contentType: any, type: any, command: any) => Promise<void>;
    createInitialCommands: () => Promise<void>;
    handleKeyboard: (e: any) => void;
    palette: HTMLDivElement | null | undefined;
    updatePanelPosition(): void;
}
import React from "react";
import PropTypes from "prop-types";
