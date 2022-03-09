export const blockTitles: {
    "heading-1": string;
    "heading-2": string;
    "heading-3": string;
    "heading-4": string;
    "heading-5": string;
    "heading-6": string;
    paragraph: string;
    "embedded-entry-block": string;
    "embedded-asset-block": string;
};
export default HeadingDropdown;
import { BLOCKS } from "@contentful/rich-text-types";
declare class HeadingDropdown extends React.Component<any, any, any> {
    static propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        isOpen: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        currentBlockType: PropTypes.Requireable<string>;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    getStyleNameForChange: () => any;
}
import React from "react";
import PropTypes from "prop-types";
