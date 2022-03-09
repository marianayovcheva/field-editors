export default StickyToolbarWrapper;
declare function StickyToolbarWrapper({ isDisabled, children }: {
    isDisabled: any;
    children: any;
}): JSX.Element;
declare namespace StickyToolbarWrapper {
    export namespace propTypes {
        export const isDisabled: PropTypes.Requireable<boolean>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
