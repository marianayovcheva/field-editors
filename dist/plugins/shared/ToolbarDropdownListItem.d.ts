export default class ToolbarDropdownListItem extends React.Component<any, any, any> {
    static propTypes: {
        isActive: PropTypes.Validator<boolean>;
        onToggle: PropTypes.Validator<(...args: any[]) => any>;
        title: PropTypes.Validator<string>;
        type: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    handleClick: (event: any) => void;
}
import React from "react";
import PropTypes from "prop-types";
