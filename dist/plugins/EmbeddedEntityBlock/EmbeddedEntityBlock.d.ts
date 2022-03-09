export default class LinkedEntityBlock extends React.Component<any, any, any> {
    static propTypes: {
        sdk: PropTypes.Validator<object>;
        isSelected: PropTypes.Validator<boolean>;
        attributes: PropTypes.Validator<object>;
        editor: PropTypes.Validator<object>;
        node: PropTypes.Validator<object>;
        onEntityFetchComplete: PropTypes.Validator<(...args: any[]) => any>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    getEntitySys(): {
        id: any;
        type: any;
    };
    handleEditClick: () => any;
    handleRemoveClick: () => void;
}
import React from "react";
import PropTypes from "prop-types";
