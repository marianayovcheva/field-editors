import { ContentType, ContentEntityType, FieldExtensionSDK } from '../types';
import { ReferenceEditorProps } from './ReferenceEditor';
import { ReferenceValidations } from '../utils/fromFieldValidations';
declare type ContentTypePermissionsProps = {
    sdk: FieldExtensionSDK;
    entityType: ContentEntityType;
    parameters: ReferenceEditorProps['parameters'];
    allContentTypes: ContentType[];
    validations: ReferenceValidations;
};
declare type ContentTypePermissions = {
    creatableContentTypes: ContentType[];
    readableContentTypes: ContentType[];
    availableContentTypes: ContentType[];
};
export declare function useContentTypePermissions(props: ContentTypePermissionsProps): ContentTypePermissions;
export {};
