import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import * as React from 'react';
import { FlexWrapper } from '../../layout/Wrappers/FlexWrapper';
import { MetricTile } from './MetricTile';

export const MetricsWrapper = styled('div')(({theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: 24,
}));


const TitleHeader = styled('h3')(({theme}) => ({
  marginBottom: 40,
}));

export const Metrics = ({
  metrics,
}) => {
  const metricsList = metrics.map(metric => {
    return (<MetricTile key={`${metric.month}-data-tile`} {...metric} />);
  });

  return (
    <MetricsWrapper>
      <TitleHeader>Monthly Metrics</TitleHeader>
      <FlexWrapper>
        {metricsList}
      </FlexWrapper>
    </MetricsWrapper>
  )
}