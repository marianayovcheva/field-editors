export class InViewport extends React.Component<any, any, any> {
    static defaultProps: {
        testId: string;
        offset: number;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    tGetDomPosition: any;
    nodeRef: any;
    lastOverflowAt: any;
    tOnOverflowTop: (...args: any[]) => any;
    tOnOverflowBottom: (...args: any[]) => any;
    tOnOverflowRight: (...args: any[]) => any;
    tOnOverflowLeft: (...args: any[]) => any;
    getDomPosition: () => void;
    bindEventListeners: () => void;
    handleOverflow: ({ top, left, bottom, right }: {
        top: any;
        left: any;
        bottom: any;
        right: any;
    }, windowWidth: any, windowHeight: any) => void;
}
export namespace InViewport {
    export namespace propTypes {
        export const offset: PropTypes.Requireable<number>;
        export const onOverflowTop: PropTypes.Requireable<(...args: any[]) => any>;
        export const onOverflowRight: PropTypes.Requireable<(...args: any[]) => any>;
        export const onOverflowBottom: PropTypes.Requireable<(...args: any[]) => any>;
        export const onOverflowLeft: PropTypes.Requireable<(...args: any[]) => any>;
        export const className: PropTypes.Requireable<string>;
        export const children: PropTypes.Requireable<any>;
        export const testId: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
