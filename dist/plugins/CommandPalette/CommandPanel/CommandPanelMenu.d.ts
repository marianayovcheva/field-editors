export class CommandPanel extends React.Component<any, any, any> {
    static propTypes: {
        items: PropTypes.Requireable<(PropTypes.InferProps<{
            label: PropTypes.Requireable<string>;
            icon: PropTypes.Requireable<string>;
            thumbnail: PropTypes.Requireable<string>;
            callback: PropTypes.Requireable<(...args: any[]) => any>;
        }> | null | undefined)[]>;
        searchString: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        testId: PropTypes.Requireable<string>;
        isLoading: PropTypes.Requireable<boolean>;
        isUpdating: PropTypes.Requireable<boolean>;
        breadcrumb: PropTypes.Requireable<string>;
        richTextAPI: PropTypes.Requireable<object>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        className: undefined;
        searchString: string;
        items: never[];
        testId: string;
        isLoading: boolean;
        isUpdating: boolean;
    };
    static getDerivedStateFromProps(props: any, state: any): {
        originalItems: any;
        originalSearchString: any;
        items: any;
        selectedKey: any;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    handleKeyboard: (e: any) => void;
    renderGroups(): JSX.Element | JSX.Element[];
    renderItems(groupName: any): JSX.Element[];
    renderNavigationBar: () => JSX.Element;
    renderStatusBar: () => JSX.Element;
    renderSkeleton: () => JSX.Element;
}
export default CommandPanel;
import React from "react";
import PropTypes from "prop-types";
