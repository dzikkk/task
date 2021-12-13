import { styled } from '@material-ui/styles';
import * as React from 'react';
import { FlexWrapper } from '../../layout/Wrappers/FlexWrapper';
import { MetricTile } from './MetricTile';

export const Metrics = ({
  metrics,
}) => {
  const metricsList = metrics.map(metric => {
    return (<MetricTile {...metric} />);
  });

  return <FlexWrapper>{
    metricsList
    }</FlexWrapper>
}