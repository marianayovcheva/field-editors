export default CommandPalette;
declare class CommandPalette extends React.PureComponent<any, any, any> {
    static propTypes: {
        editor: PropTypes.Requireable<object>;
        richTextAPI: PropTypes.Requireable<object>;
    };
    constructor(props: any);
}
import React from "react";
import PropTypes from "prop-types";
