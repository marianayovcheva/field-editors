export default EntryEmbedDropdown;
declare class EntryEmbedDropdown extends React.Component<any, any, any> {
    static propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        isOpen: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
import React from "react";
import PropTypes from "prop-types";
