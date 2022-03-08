import tokens from '@contentful/f36-tokens';
import { Badge, Flex, Text } from '@contentful/f36-components';
import { nanoid } from 'nanoid';
import React from 'react';

interface CardFooterProps {
  audiences: Array<string>;
}

export function CardFooter(props: CardFooterProps) {
  const { audiences } = props;

  const styles = {
    audienceContainer: {
      borderTopColor: tokens.gray200,
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      paddingTop: tokens.spacingXs,
      width: `calc(100% + ${tokens.spacingM} * 2)`,
      marginLeft: `-${tokens.spacingM}`,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingM,
      marginBottom: `-${tokens.spacingS}`,
    } as React.CSSProperties,
    badge: {
      textTransform: 'none',
      marginLeft: tokens.spacingS,
      letterSpacing: 0,
    } as React.CSSProperties,
  };

  return audiences && audiences.length ? (
    <Flex style={styles.audienceContainer}>
      <Flex flexGrow={1}>
        <Text fontColor="gray600">Country audience</Text>
      </Flex>
      {audiences.map((audience: string) => (
        <Badge key={nanoid()} style={styles.badge}>
          {audience}
        </Badge>
      ))}
    </Flex>
  ) : null;
}
