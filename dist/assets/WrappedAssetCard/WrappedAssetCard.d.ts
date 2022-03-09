/// <reference types="react" />
import { SpaceAPI } from '@contentful/app-sdk';
import { Asset, RenderDragFn } from '../../types';
export interface WrappedAssetCardProps {
    getEntityScheduledActions: SpaceAPI['getEntityScheduledActions'];
    asset: Asset;
    localeCode: string;
    defaultLocaleCode: string;
    getAssetUrl?: (assetId: string) => string;
    className?: string;
    isSelected?: boolean;
    isDisabled: boolean;
    onEdit?: () => void;
    onRemove?: () => void;
    size: 'default' | 'small';
    renderDragHandle?: RenderDragFn;
    isClickable: boolean;
}
export declare const WrappedAssetCard: {
    (props: WrappedAssetCardProps): JSX.Element;
    defaultProps: {
        isClickable: boolean;
    };
};
