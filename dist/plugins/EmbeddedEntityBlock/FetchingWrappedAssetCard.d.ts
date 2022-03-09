export function FetchingWrappedAssetCard(props: any): JSX.Element;
export namespace FetchingWrappedAssetCard {
    export namespace propTypes {
        export const sdk: PropTypes.Validator<object>;
        export const locale: PropTypes.Validator<string>;
        export const assetId: PropTypes.Validator<string>;
        export const isDisabled: PropTypes.Validator<boolean>;
        export const isSelected: PropTypes.Validator<boolean>;
        export const onRemove: PropTypes.Requireable<(...args: any[]) => any>;
        export const onEdit: PropTypes.Requireable<(...args: any[]) => any>;
        export const getAssetUrl: PropTypes.Requireable<(...args: any[]) => any>;
        export const onEntityFetchComplete: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
