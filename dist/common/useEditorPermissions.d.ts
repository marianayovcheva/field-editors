import { ContentType, ContentEntityType, FieldExtensionSDK } from '../types';
import { ReferenceEditorProps } from './ReferenceEditor';
export declare type EditorPermissionsProps = {
    sdk: FieldExtensionSDK;
    entityType: ContentEntityType;
    parameters: ReferenceEditorProps['parameters'];
    allContentTypes: ContentType[];
};
export declare function useEditorPermissions(props: EditorPermissionsProps): {
    canCreateEntity: boolean;
    canLinkEntity: boolean;
    creatableContentTypes: ContentType[];
    readableContentTypes: ContentType[];
    availableContentTypes: ContentType[];
    validations: import("../utils/fromFieldValidations").ReferenceValidations;
};
export declare type EditorPermissions = ReturnType<typeof useEditorPermissions>;
