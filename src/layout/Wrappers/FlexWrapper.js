import { styled } from '@material-ui/styles';

export const FlexWrapper = styled('div')(({theme, direction='row'}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: direction,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));