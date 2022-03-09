import type { AccessAPI, ArchiveableAction, CrudAction, PublishableAction } from '@contentful/app-sdk';
declare type EntryAction = CrudAction | PublishableAction | ArchiveableAction;
declare type ExtendedAccessAPI = {
    canPerformActionOnEntryOfType: (action: EntryAction, contentTypeId: string) => Promise<boolean>;
};
export declare function useAccessApi(accessApi: AccessAPI & Partial<ExtendedAccessAPI>): {
    canPerformAction: {
        (action: "read" | "update", entity: "EditorInterface" | import("@contentful/app-sdk").EditorInterface): Promise<boolean>;
        <T = Object>(action: CrudAction, entity: T | "ContentType" | import("@contentful/app-sdk").ContentType | "Asset" | "Entry"): Promise<boolean>;
        <T_1 = Object>(action: PublishableAction, entity: T_1 | "ContentType" | import("@contentful/app-sdk").ContentType | "Asset" | "Entry"): Promise<boolean>;
        <T_2 = Object>(action: ArchiveableAction, entity: T_2 | "Asset" | "Entry"): Promise<boolean>;
        (action: "update", entity: import("@contentful/app-sdk").Entry<Record<string, any>> | import("@contentful/app-sdk").Task | import("@contentful/app-sdk").Asset, patch: import("@contentful/app-sdk").JSONPatchItem[]): Promise<boolean>;
    };
    canPerformActionOnEntryOfType: (action: EntryAction, contentTypeId: string) => Promise<boolean>;
};
export {};
