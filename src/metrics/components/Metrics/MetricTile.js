import { styled } from "@material-ui/styles"
import { AvailabilityValue } from "../../../layout/labels/AvailabilityValue";
import { HighlightedValue } from "../../../layout/labels/highlightedLabel";

const TileWrapper = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  paddingTop: 8,
  borderRadius: 8,
  backgroundColor: theme.palette.background.paper,
  margin: '0 24px 24px 0',
}))

const MonthLabel = styled('h4')(({theme}) => ({
  textAlign: 'center',
  fontWeight: 'normal',
  marginBottom: 20,
}))

export const MetricTile = ({ month, produced, lost, availability, worst }) => (
  <TileWrapper>
    <MonthLabel>{month}</MonthLabel>
    <HighlightedValue label={'Energy produced'} unit={'Mwh'} value={produced} />
    <HighlightedValue label={'Energy lost'} unit={'Mwh'} value={lost} />
    <AvailabilityValue label={'Availability'} value={Number(availability * 100).toFixed(2)} />
    <HighlightedValue label={'Worst turbine'} unit={''} value={worst.name} />
  </TileWrapper>
);