import {
  Navigation as _Navigation,
  List as _List,
  Heading as _Heading,
  styled,
  palette,
  space,
} from 'bumbag'

export const Wrapper = styled.div`
  padding-top: ${({ mini }) => (mini ? space('major-2') : space('major-4'))}rem;
  padding-bottom: ${({ mini }) => (mini ? space('major-2') : 0)}rem;
  padding-left: ${space('major-2')}rem;
  padding-right: ${space('major-2')}rem;
  background: ${(props) => props.background || 'transparent'};
  border-bottom: ${({ mini }) => (mini ? '1px solid' : 'none')};
  border-bottom-color: ${palette('primaryBorder')};
`

export const Heading = styled(_Heading)`
  line-height: 1;
  color: ${palette('primaryDark')};
  font-weight: ${(props) => (props.mini ? 600 : 900)};
  letter-spacing: -1px;
  margin: 0;
  font-size: ${(props) => (props.mini ? 1.5 : 3)}rem;
`

export const Navigation = styled(_Navigation)`
  align-items: center;
  margin-top: ${space(1, 'major')}rem;
`

export const List = styled(_List)`
  margin-bottom: 0px;
  align-content: center;

  li {
    display: inline-block;
    margin-bottom: 0;
    margin-right: ${space(2, 'major')}rem;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      color: ${palette('miniHeaderLink')};
      font-size: 0.875rem;

      &:hover {
        color: ${palette('miniHeaderHover')};
        text-decoration: underline;
      }
    }
  }
`
