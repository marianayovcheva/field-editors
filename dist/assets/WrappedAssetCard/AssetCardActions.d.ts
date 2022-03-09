/// <reference types="react" />
import { File } from '../../types';
export declare function renderAssetInfo(props: {
    entityFile: File;
}): ("" | JSX.Element)[];
export declare function renderActions(props: {
    onEdit?: () => void;
    onRemove?: () => void;
    isDisabled: boolean;
    entityFile?: File;
}): (JSX.Element | null)[];
