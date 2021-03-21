import { List as _List } from 'bumbag/List'
import { Link as _Link } from 'bumbag/Link'
import { Icon as _Icon } from 'bumbag/Icon'
import { styled, css } from 'bumbag/styled'
import { applyTheme } from 'bumbag/utils/applyTheme'
import { breakpoint } from 'bumbag/utils/theme'

export const List = applyTheme(_List, {
  styles: {
    base: css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      ${breakpoint(
        'min-tablet',
        css`
          grid-template-columns: repeat(2, 1fr);
        `
      )}
    `,
  },
})

export const Link = styled(_Link)`
  line-height: 2;
  font-size: 0.875rem;
  font-family: var(--serif-font);
  font-weight: 300;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 1.125rem;
    `
  )}
`

export const Icon = styled(_Icon)`
  margin-right: 8px;
`
