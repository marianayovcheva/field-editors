import { FieldAPI, Link } from '@contentful/app-sdk';
export declare function newReferenceEditorFakeSdk(): (import("mitt").Emitter | {
    field: FieldAPI;
    locales: import("@contentful/app-sdk").LocalesAPI;
    space: {
        getAsset: (id: string) => Promise<{
            sys: {
                space: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
                id: string;
                type: string;
                createdAt: string;
                updatedAt: string;
                environment: {
                    sys: {
                        id: string;
                        type: string;
                        linkType: string;
                    };
                };
                createdBy: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
                updatedBy: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
                publishedCounter: number;
                version: number;
            };
            fields: {};
        }>;
        getEntry: (id: string) => Promise<{
            sys: {
                space: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
                id: string;
                type: string;
                createdAt: string;
                updatedAt: string;
                environment: {
                    sys: {
                        id: string;
                        type: string;
                        linkType: string;
                    };
                };
                createdBy: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
                updatedBy: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
                publishedCounter: number;
                version: number;
                contentType: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
            };
            fields: {};
        } | {
            sys: {
                space: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
                id: string;
                type: string;
                createdAt: string;
                updatedAt: string;
                environment: {
                    sys: {
                        id: string;
                        type: string;
                        linkType: string;
                    };
                };
                firstPublishedAt: string;
                createdBy: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
                updatedBy: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
                publishedVersion: number;
                version: number;
                contentType: {
                    sys: {
                        type: string;
                        linkType: string;
                        id: string;
                    };
                };
            };
            fields: {
                exField: {
                    en: string;
                };
                exDesc: {
                    en: string;
                };
            };
        }>;
        getEntityScheduledActions(): Promise<never[]>;
        getCachedContentTypes: () => import("@contentful/app-sdk").ContentType[];
        getContentType: (id: string) => Promise<import("@contentful/app-sdk").ContentType>;
        getContentTypes: <Query extends import("@contentful/app-sdk").SearchQuery = import("@contentful/app-sdk").SearchQuery>(query?: Query | undefined) => Promise<import("@contentful/app-sdk").CollectionResponse<import("@contentful/app-sdk").ContentType>>;
        createContentType: (data: import("@contentful/app-sdk").WithOptionalId<import("@contentful/app-sdk").ContentType>) => Promise<import("@contentful/app-sdk").ContentType>;
        updateContentType: (data: import("@contentful/app-sdk").ContentType) => Promise<import("@contentful/app-sdk").ContentType>;
        deleteContentType: (contentTypeId: string) => Promise<void>;
        getEntrySnapshots: <Fields extends Record<string, any> = Record<string, any>>(id: string) => Promise<import("@contentful/app-sdk").CollectionResponse<{
            sys: {
                space?: Link<string, string> | undefined;
                status?: Link<string, string> | undefined;
                publishedVersion?: number | undefined;
                archivedVersion?: number | undefined;
                archivedBy?: Link<string, string> | undefined;
                archivedAt?: string | undefined;
                deletedVersion?: number | undefined;
                deletedBy?: Link<string, string> | undefined;
                deletedAt?: string | undefined;
                snapshotType: string;
                snapshotEntityType: string;
            };
            snapshot: import("@contentful/app-sdk").Entry<Fields>;
        }>>;
        getEntries: <Fields_1, Query_1 extends import("@contentful/app-sdk").SearchQuery = import("@contentful/app-sdk").SearchQuery>(query?: Query_1 | undefined) => Promise<import("@contentful/app-sdk").CollectionResponse<import("@contentful/app-sdk").Entry<Fields_1>>>;
        createEntry: <Fields_2>(contentTypeId: string, data: import("@contentful/app-sdk").WithOptionalId<import("@contentful/app-sdk").Entry<Fields_2>>) => Promise<import("@contentful/app-sdk").Entry<Fields_2>>;
        updateEntry: <Fields_3 extends Record<string, any> = Record<string, any>>(data: import("@contentful/app-sdk").Entry<Fields_3>) => Promise<import("@contentful/app-sdk").Entry<Fields_3>>;
        publishEntry: <Fields_4 extends Record<string, any> = Record<string, any>>(data: import("@contentful/app-sdk").Entry<Fields_4>) => Promise<import("@contentful/app-sdk").Entry<Fields_4>>;
        unpublishEntry: <Fields_5 extends Record<string, any> = Record<string, any>>(data: import("@contentful/app-sdk").Entry<Fields_5>) => Promise<import("@contentful/app-sdk").Entry<Fields_5>>;
        archiveEntry: <Fields_6 extends Record<string, any> = Record<string, any>>(data: import("@contentful/app-sdk").Entry<Fields_6>) => Promise<import("@contentful/app-sdk").Entry<Fields_6>>;
        unarchiveEntry: <Fields_7 extends Record<string, any> = Record<string, any>>(data: import("@contentful/app-sdk").Entry<Fields_7>) => Promise<import("@contentful/app-sdk").Entry<Fields_7>>;
        deleteEntry: <Fields_8 extends Record<string, any> = Record<string, any>>(data: import("@contentful/app-sdk").Entry<Fields_8>) => Promise<void>;
        getPublishedEntries: <Fields_9, Query_2 extends import("@contentful/app-sdk").SearchQuery = import("@contentful/app-sdk").SearchQuery>(query?: Query_2 | undefined) => Promise<import("@contentful/app-sdk").CollectionResponse<import("@contentful/app-sdk").Entry<Fields_9>>>;
        getAssets: <Query_3 extends import("@contentful/app-sdk").SearchQuery = import("@contentful/app-sdk").SearchQuery>(query?: Query_3 | undefined) => Promise<import("@contentful/app-sdk").CollectionResponse<import("@contentful/app-sdk").Asset>>;
        createAsset: (data: import("@contentful/app-sdk").WithOptionalId<import("@contentful/app-sdk").Asset>) => Promise<import("@contentful/app-sdk").Asset>;
        updateAsset: (data: import("@contentful/app-sdk").Asset) => Promise<import("@contentful/app-sdk").Asset>;
        deleteAsset: (data: import("@contentful/app-sdk").Asset) => Promise<void>;
        publishAsset: (data: import("@contentful/app-sdk").Asset) => Promise<import("@contentful/app-sdk").Asset>;
        unpublishAsset: (data: import("@contentful/app-sdk").Asset) => Promise<import("@contentful/app-sdk").Asset>;
        archiveAsset: (data: import("@contentful/app-sdk").Asset) => Promise<import("@contentful/app-sdk").Asset>;
        processAsset: (data: import("@contentful/app-sdk").Asset, locale: string) => Promise<import("@contentful/app-sdk").Asset>;
        unarchiveAsset: (data: import("@contentful/app-sdk").Asset) => Promise<import("@contentful/app-sdk").Asset>;
        getPublishedAssets: <Query_4 extends import("@contentful/app-sdk").SearchQuery = import("@contentful/app-sdk").SearchQuery>(query?: Query_4 | undefined) => Promise<import("@contentful/app-sdk").CollectionResponse<import("@contentful/app-sdk").Asset>>;
        createUpload: (base64data: string) => Promise<import("contentful-management/types").UploadProps>;
        waitUntilAssetProcessed: (assetId: string, locale: string) => Promise<import("@contentful/app-sdk").Asset>;
        getUsers: () => Promise<import("@contentful/app-sdk").CollectionResponse<import("@contentful/app-sdk").User>>;
        getEditorInterface: (contentTypeId: string) => Promise<import("@contentful/app-sdk").EditorInterface>;
        getEditorInterfaces: () => Promise<import("@contentful/app-sdk").CollectionResponse<import("@contentful/app-sdk").EditorInterface>>;
        getAllScheduledActions: () => Promise<import("@contentful/app-sdk").ScheduledAction[]>;
        signRequest: (request: import("@contentful/app-sdk").CanonicalRequest) => Promise<Record<string, string>>;
        createTag: (id: string, name: string, visibility?: "private" | "public" | undefined) => Promise<import("@contentful/app-sdk").Tag>;
        readTags: (skip: number, limit: number) => Promise<import("@contentful/app-sdk").CollectionResponse<import("@contentful/app-sdk").Tag>>;
        updateTag: (id: string, name: string, version: number) => Promise<import("@contentful/app-sdk").Tag>;
        deleteTag: (id: string, version: number) => Promise<boolean>;
        getTeams: (query: import("contentful-management/types").QueryOptions) => Promise<import("@contentful/app-sdk").CollectionResponse<import("contentful-management/types").TeamProps>>;
    };
    dialogs: {
        selectSingleAsset: () => Promise<Link<string, string>>;
        selectMultipleAssets: () => Promise<Link<string, string>[]>;
        selectSingleEntry: () => Promise<Link<string, string>>;
        selectMultipleEntries: () => Promise<Link<string, string>[]>;
    };
    navigator: {
        openNewAsset: () => Promise<{
            entity: Link<string, string>;
        }>;
        openAsset: () => Promise<{}>;
        openNewEntry: () => Promise<{
            entity: Link<string, string>;
        }>;
        openEntry: () => Promise<{}>;
        onSlideInNavigation: () => () => {};
    };
    access: {
        can: () => Promise<boolean>;
    };
})[];
