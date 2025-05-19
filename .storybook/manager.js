import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Afolabi Oluwatosin Abioye Components',
    brandUrl: 'https://folabi-portfolio.pages.dev',
  },
});
