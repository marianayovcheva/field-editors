/// <reference types="react" />
import { ContentType, RenderDragFn } from '../../types';
import { ReferenceEditorProps } from '../../common/ReferenceEditor';
import { RenderCustomMissingEntityCard } from '../../common/customCardTypes';
export declare type EntryCardReferenceEditorProps = ReferenceEditorProps & {
    entryId: string;
    index?: number;
    allContentTypes: ContentType[];
    isDisabled: boolean;
    onRemove: () => void;
    renderDragHandle?: RenderDragFn;
    hasCardEditActions: boolean;
    onMoveTop?: () => void;
    onMoveBottom?: () => void;
    renderCustomMissingEntityCard?: RenderCustomMissingEntityCard;
};
export declare function FetchingWrappedEntryCard(props: EntryCardReferenceEditorProps): JSX.Element;
