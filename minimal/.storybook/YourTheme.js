import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: './logo_h.svg',  // 로컬 SVG 파일 경로로 업데이트
  brandTarget: '_self',
});
