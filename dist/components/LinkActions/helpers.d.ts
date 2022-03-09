import { Asset, ContentEntityType, Entry, FieldExtensionSDK } from '../../types';
import { EditorPermissions } from '../../common/useEditorPermissions';
export declare function createEntity(props: {
    sdk: FieldExtensionSDK;
    entityType: ContentEntityType;
    contentTypeId?: string;
}): Promise<{
    entity?: undefined;
    slide?: undefined;
} | {
    entity: Entry<Entry<Record<string, any>>> | undefined;
    slide: import("@contentful/app-sdk/dist/types/navigator.types").NavigatorSlideInfo | undefined;
} | {
    entity: Asset | undefined;
    slide: import("@contentful/app-sdk/dist/types/navigator.types").NavigatorSlideInfo | undefined;
}>;
export declare function selectSingleEntity(props: {
    sdk: FieldExtensionSDK;
    entityType: ContentEntityType;
    editorPermissions: EditorPermissions;
}): Promise<Entry<Record<string, any>> | null>;
export declare function selectMultipleEntities(props: {
    sdk: FieldExtensionSDK;
    entityType: ContentEntityType;
    editorPermissions: EditorPermissions;
}): Promise<Entry<Record<string, any>>[] | null>;
