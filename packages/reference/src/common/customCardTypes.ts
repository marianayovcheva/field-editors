import * as React from 'react';

import {
  LocalePublishStatusMap,
  type ReleaseAction,
  type ReleaseLocalesStatusMap,
  type ReleaseV2Props,
} from '@contentful/field-editor-shared';
import { LocaleProps } from 'contentful-management';

import { WrappedAssetCardProps } from '../assets/WrappedAssetCard/WrappedAssetCard';
import { Asset, ContentType, Entry, RenderDragFn } from '../types';
import { CustomActionProps } from './ReferenceEditor';

export type MissingEntityCardProps = {
  defaultCard: React.ReactElement;
  entity: {
    id: string;
    type: 'Asset' | 'Entry';
  };
};

export type RenderCustomMissingEntityCard = ({
  defaultCard,
}: MissingEntityCardProps) => React.ReactElement;

export type DefaultCardRenderer = (props?: Partial<CustomEntityCardProps>) => React.ReactElement;

export type CustomCardRenderer = (
  props: CustomEntityCardProps,
  linkActionsProps: CustomActionProps,
  renderDefaultCard?: DefaultCardRenderer,
) => React.ReactElement | false;

export type CustomEntityCardProps = {
  entity: Entry | Asset;
  entityUrl?: string;
  contentType?: ContentType;

  index?: number;
  localeCode: string;
  defaultLocaleCode: string;
  isDisabled: boolean;
  size: 'default' | 'small';
  renderDragHandle?: RenderDragFn;
  onEdit?: () => void;
  onRemove?: () => void;
  onMoveTop?: () => void;
  onMoveBottom?: () => void;
  isBeingDragged?: boolean;

  useLocalizedEntityStatus?: boolean;
  localesStatusMap?: LocalePublishStatusMap;
  activeLocales?: Pick<LocaleProps, 'code'>[];
  releaseLocalesStatusMap?: ReleaseLocalesStatusMap;
  isReleasesLoading?: boolean;
  releaseAction?: ReleaseAction;
  activeRelease?: ReleaseV2Props;
} & Partial<WrappedAssetCardProps>;
