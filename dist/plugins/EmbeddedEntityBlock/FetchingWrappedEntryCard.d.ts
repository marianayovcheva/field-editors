export function FetchingWrappedEntryCard(props: any): JSX.Element;
export namespace FetchingWrappedEntryCard {
    export namespace propTypes {
        export const sdk: PropTypes.Validator<object>;
        export const entryId: PropTypes.Validator<string>;
        export const locale: PropTypes.Validator<string>;
        export const isDisabled: PropTypes.Validator<boolean>;
        export const isSelected: PropTypes.Validator<boolean>;
        export const onRemove: PropTypes.Requireable<(...args: any[]) => any>;
        export const onEdit: PropTypes.Requireable<(...args: any[]) => any>;
        export const getEntryUrl: PropTypes.Requireable<(...args: any[]) => any>;
        export const onEntityFetchComplete: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
