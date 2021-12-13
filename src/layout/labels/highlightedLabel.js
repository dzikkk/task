import { styled } from "@material-ui/styles"

const LabelWrapper = styled('div')({
  marginBottom: 8,
});

const NormalText = styled('span')(({theme}) => ({
  color: theme.palette.primary.main,
  fontStyle: 'normal',
}));

const HighlightedText = styled('span')(({theme}) => ({
  color: theme.palette.text.primary,
  fontStyle: 'normal',
}));

export const HighlightedValue = ({label, unit, value}) => (
  <LabelWrapper>
    <NormalText>{label}: </NormalText>
    <HighlightedText>{value} </HighlightedText>
    <NormalText>{unit}</NormalText>
  </LabelWrapper>
)