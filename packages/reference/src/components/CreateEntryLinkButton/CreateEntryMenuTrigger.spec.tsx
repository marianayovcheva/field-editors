import * as React from 'react';

import { Button } from '@contentful/f36-components';
import '@testing-library/jest-dom/extend-expect';
import { act, configure, fireEvent, render } from '@testing-library/react';
import noop from 'lodash/noop';

// eslint-disable-next-line -- TODO: describe this disable  you-dont-need-lodash-underscore/fill
import fill from 'lodash/fill';

import { ContentType } from '../../types';
import { CreateEntryMenuTrigger, CreateEntryMenuTriggerChild } from './CreateEntryMenuTrigger';

configure({
  testIdAttribute: 'data-test-id',
});

const CONTENT_TYPE_1 = { name: 'name-1', sys: { id: 'ID_1' } };
const CONTENT_TYPE_2 = { name: 'name-2', sys: { id: 'ID_2' } };
const CONTENT_TYPE_3 = { name: 'name-3', sys: { id: 'ID_3' } };
const EXPERIENCE_TYPE = {
  name: 'experience-type',
  sys: { id: 'ID_4' },
  metadata: {
    annotations: {
      ContentType: [
        {
          sys: {
            id: 'Contentful:ExperienceType',
            type: 'Link',
            linkType: 'Annotation',
          },
        },
      ],
    },
  },
};

describe('CreateEntryMenuTrigger general', () => {
  const props = {
    contentTypes: [CONTENT_TYPE_1, CONTENT_TYPE_2, CONTENT_TYPE_3] as ContentType[],
    onSelect: () => {
      return Promise.resolve();
    },
  };

  let stub = jest.fn();
  beforeEach(() => {
    stub = jest.fn().mockImplementation(() => <Button testId="menu-trigger" />);
  });

  it('shares the state and functions for the menu', () => {
    const stub: CreateEntryMenuTriggerChild = (api) => {
      expect(api.isOpen).toBe(false);
      expect(api.isSelecting).toBe(false);
      return <span />;
    };

    render(<CreateEntryMenuTrigger {...props}>{stub}</CreateEntryMenuTrigger>);
  });

  it('should set isSelecting to true in case onSelect returns a promise', async () => {
    const selectStub = jest.fn(() => new Promise((resolve) => setTimeout(resolve, 1000)));

    const { getAllByTestId, getByTestId } = render(
      <CreateEntryMenuTrigger {...props} onSelect={selectStub}>
        {stub}
      </CreateEntryMenuTrigger>
    );

    act(() => {
      fireEvent.click(getByTestId('menu-trigger'));
    });
    act(() => {
      fireEvent.click(getAllByTestId('contentType')[0]);
    });
    expect(selectStub).toHaveBeenCalled();
  });

  it('should not set isSelecting to true in case onSelect is sync', async () => {
    const selectStub = jest.fn();

    const { getAllByTestId, getByTestId } = render(
      <CreateEntryMenuTrigger {...props} onSelect={selectStub}>
        {stub}
      </CreateEntryMenuTrigger>
    );

    act(() => {
      fireEvent.click(getByTestId('menu-trigger'));
    });
    act(() => {
      fireEvent.click(getAllByTestId('contentType')[0]);
    });
    expect(stub).toHaveBeenLastCalledWith({ isOpen: false, isSelecting: false });
    expect(selectStub).toHaveBeenCalled();
  });

  it('renders text input if contentTypes.length > 20', () => {
    const { getByTestId } = render(
      <CreateEntryMenuTrigger
        {...props}
        contentTypes={fill(Array(21), CONTENT_TYPE_3) as ContentType[]}
      >
        {stub}
      </CreateEntryMenuTrigger>
    );

    act(() => {
      fireEvent.click(getByTestId('menu-trigger'));
    });
    expect(getByTestId('add-entry-menu-search')).toBeDefined();
  });

  it('shows the search results if typed in input', () => {
    const contentTypes = fill(
      fill(fill(Array(21), CONTENT_TYPE_1, 0, 10), CONTENT_TYPE_2, 10, 20),
      CONTENT_TYPE_3,
      20
    );

    const { getByTestId, getAllByTestId } = render(
      <CreateEntryMenuTrigger {...props} contentTypes={contentTypes}>
        {stub}
      </CreateEntryMenuTrigger>
    );

    act(() => {
      fireEvent.click(getByTestId('menu-trigger'));
    });

    const input = getByTestId('add-entry-menu-search');
    fireEvent.change(input, { target: { value: '1' }, preventDefault: noop });
    expect(getAllByTestId('contentType')).toHaveLength(10);
    expect(getByTestId('add-entru-menu-search-results').textContent).toBe('10 results');

    fireEvent.change(input, { target: { value: '3' }, preventDefault: noop });
    expect(getAllByTestId('contentType')).toHaveLength(1);
    expect(getByTestId('add-entru-menu-search-results').textContent).toBe('1 result');

    fireEvent.change(input, { target: { value: '4' }, preventDefault: noop });
    expect(getByTestId('add-entru-menu-search-results').textContent).toBe('No results found');
  });

  it('shows suggestedContentType in the list', () => {
    const { getByTestId } = render(
      <CreateEntryMenuTrigger {...props} suggestedContentTypeId={props.contentTypes[0].sys.id}>
        {stub}
      </CreateEntryMenuTrigger>
    );

    act(() => {
      fireEvent.click(getByTestId('menu-trigger'));
    });

    const suggestedContentType = getByTestId('suggested');
    expect(suggestedContentType).toBeDefined();
    expect(suggestedContentType.textContent).toBe(props.contentTypes[0].name);
  });

  it('filters out content types with Contentful:ExperienceType annotation', () => {
    const contentTypesWithExperience = [
      CONTENT_TYPE_1,
      CONTENT_TYPE_2,
      CONTENT_TYPE_3,
      EXPERIENCE_TYPE,
    ] as ContentType[];

    const { getByTestId, getAllByTestId } = render(
      <CreateEntryMenuTrigger {...props} contentTypes={contentTypesWithExperience}>
        {stub}
      </CreateEntryMenuTrigger>
    );

    act(() => {
      fireEvent.click(getByTestId('menu-trigger'));
    });

    const contentTypeItems = getAllByTestId('contentType');
    expect(contentTypeItems).toHaveLength(3); // Only 3 content types should be rendered
    expect(contentTypeItems[0].textContent).toBe('name-1');
    expect(contentTypeItems[1].textContent).toBe('name-2');
    expect(contentTypeItems[2].textContent).toBe('name-3');

    // Ensure the experience type is not rendered
    const experienceTypeItem = contentTypeItems.find(
      (item) => item.textContent === 'experience-type'
    );
    expect(experienceTypeItem).toBeUndefined();
  });
});
