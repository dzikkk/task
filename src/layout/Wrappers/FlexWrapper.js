import { styled } from '@material-ui/styles';

export const FlexWrapper = styled('div')(({theme}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));