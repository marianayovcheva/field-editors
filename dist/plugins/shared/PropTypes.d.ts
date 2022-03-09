export namespace MarkPropTypes {
    export const attributes: PropTypes.Validator<object>;
    export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    export const mark: PropTypes.Validator<string>;
}
export namespace NodePropTypes {
    const attributes_1: PropTypes.Validator<object>;
    export { attributes_1 as attributes };
    const children_1: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    export { children_1 as children };
    export const node: PropTypes.Validator<PropTypes.InferProps<{
        type: PropTypes.Validator<string>;
    }>>;
}
import PropTypes from "prop-types";
