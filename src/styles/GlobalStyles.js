import { Button, createTheme } from '@mantine/core'

const myTheme = createTheme({
  primaryColor: 'teal',
  defaultRadius: 0,
  components: {
    Button: Button.extend({
      defaultProps: {
        variant: 'outline',
      },
      styles: {
        root: {
          borderRadius: 0,
        },
      },
    }),
  },
})

export default myTheme
