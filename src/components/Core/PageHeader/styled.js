import { List as _List } from 'bumbag/List'
import { styled, css } from 'bumbag/styled'
import { applyTheme } from 'bumbag/utils/applyTheme'
import { space, palette } from 'bumbag/utils/theme'

export const Wrapper = styled.div`
  padding-top: ${({ mini }) => (mini ? 1 : 3)}rem;
  padding-bottom: ${({ mini }) => (mini ? 1 : 3)}rem;
  padding-left: ${space('major-2')}rem;
  padding-right: ${space('major-2')}rem;
  background: ${(props) => props.background || 'transparent'};
  border-bottom: 1px solid ${palette('primaryBorder')};
`

export const Heading = styled.h2`
  line-height: 1;
  color: ${palette('primaryDark')};
  font-weight: ${(props) => (props.mini ? 600 : 900)};
  letter-spacing: -1px;
  margin: 0;
  font-size: ${(props) => (props.mini ? 1.5 : 3)}rem;
`

export const Navigation = styled.nav`
  align-items: center;
  margin-top: ${space(1, 'major')}rem;
`

export const List = applyTheme(_List, {
  styles: {
    base: (props) => css`
      margin-bottom: 0px;
      align-content: center;

      && a {
        text-decoration: none;
        color: ${palette('miniHeaderLink')(props)};
        font-size: 0.875rem;

        &:hover {
          color: ${palette('miniHeaderHover')(props)};
          text-decoration: underline;
        }
      }
    `,
  },
})
