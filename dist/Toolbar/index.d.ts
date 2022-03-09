export default class Toolbar extends React.Component<any, any, any> {
    static propTypes: {
        richTextAPI: PropTypes.Validator<object>;
        isDisabled: PropTypes.Validator<boolean>;
        editor: PropTypes.Validator<object>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    hasMounted: boolean;
    isReadyToSetFocusProgrammatically: boolean;
    onChange: (...args: any[]) => void;
    handleEmbedDropdownOpen: () => void;
    handleEmbedDropdownClose: () => void;
    renderEmbeds: (props: any) => JSX.Element;
    openHeadingMenu: () => void;
    closeHeadingMenu: () => void;
}
import React from "react";
import PropTypes from "prop-types";
