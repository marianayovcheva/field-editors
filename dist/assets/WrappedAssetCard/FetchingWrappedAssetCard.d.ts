/// <reference types="react" />
import { Action, FieldExtensionSDK, ViewType, RenderDragFn } from '../../types';
import { CustomCardRenderer, RenderCustomMissingEntityCard } from '../../common/customCardTypes';
declare type FetchingWrappedAssetCardProps = {
    assetId: string;
    isDisabled: boolean;
    sdk: FieldExtensionSDK;
    viewType: ViewType | 'big_card';
    onRemove: () => void;
    getEntityUrl?: (id: string) => string;
    onAction?: (action: Action) => void;
    renderDragHandle?: RenderDragFn;
    renderCustomCard?: CustomCardRenderer;
    renderCustomMissingEntityCard?: RenderCustomMissingEntityCard;
};
export declare function FetchingWrappedAssetCard(props: FetchingWrappedAssetCardProps): JSX.Element;
export {};
