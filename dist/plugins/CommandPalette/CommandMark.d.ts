export default CommandMark;
declare class CommandMark extends React.PureComponent<any, any, any> {
    static propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        editor: PropTypes.Requireable<object>;
        attributes: PropTypes.Requireable<object>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
}
import React from "react";
import PropTypes from "prop-types";
