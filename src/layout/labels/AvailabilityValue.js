import { styled } from "@material-ui/styles"

const LabelWrapper = styled('div')({
  marginBottom: 8,
});

const NormalText = styled('span')(({theme}) => ({
  color: theme.palette.primary.main,
  fontStyle: 'normal',
}));

const AvailabilityText = styled('span')(({theme, isPositive}) => ({
  color: isPositive ? theme.palette.text.secondary : theme.palette.text.hint,
  fontStyle: 'normal',
}));

export const AvailabilityValue = ({label, unit = '%', value, treshold = 97}) => (
  <LabelWrapper>
    <NormalText>{label}: </NormalText>
    <AvailabilityText isPositive={value >= treshold}>{value} </AvailabilityText>
    <NormalText>{unit}</NormalText>
  </LabelWrapper>
)