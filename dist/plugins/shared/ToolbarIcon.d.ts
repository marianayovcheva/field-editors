export default class ToolbarIcon extends React.Component<any, any, any> {
    static propTypes: {
        isActive: PropTypes.Validator<boolean>;
        disabled: PropTypes.Validator<boolean>;
        onToggle: PropTypes.Validator<(...args: any[]) => any>;
        children: PropTypes.Validator<any>;
        title: PropTypes.Validator<string>;
        type: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    handleClick: (event: any) => void;
}
import React from "react";
import PropTypes from "prop-types";
