declare function Hyperlink(props: any): JSX.Element;
declare namespace Hyperlink {
    export namespace propTypes {
        export const attributes: PropTypes.Validator<object>;
        export const node: PropTypes.Validator<object>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const editor: PropTypes.Requireable<object>;
        export const richTextAPI: PropTypes.Validator<object>;
        export const onEdit: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export default Hyperlink;
import PropTypes from "prop-types";
