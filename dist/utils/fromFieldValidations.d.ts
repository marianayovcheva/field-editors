import { FieldAPI } from '@contentful/app-sdk';
declare type NumberOfLinksValidation = {
    type: 'min-max';
    min: number;
    max: number;
} | {
    type: 'min';
    min: number;
    max: undefined;
} | {
    type: 'max';
    max: number;
    min: undefined;
};
export declare type ReferenceValidations = {
    contentTypes?: string[];
    mimetypeGroups?: string[];
    numberOfLinks?: NumberOfLinksValidation;
};
export declare function fromFieldValidations(field: FieldAPI): ReferenceValidations;
export {};
