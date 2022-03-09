export default function _default(Tag: any, tagProps?: {}): {
    ({ attributes, children, node }: {
        attributes: any;
        children: any;
        node: any;
    }): JSX.Element;
    displayName: string;
    propTypes: {
        attributes: import("prop-types").Validator<object>;
        children: import("prop-types").Validator<string | number | boolean | {} | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
        node: import("prop-types").Validator<import("prop-types").InferProps<{
            type: import("prop-types").Validator<string>;
        }>>;
    };
};
