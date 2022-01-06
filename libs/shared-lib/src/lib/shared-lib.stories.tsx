import { Story, Meta } from '@storybook/react';
import { SharedLib, SharedLibProps } from './shared-lib';

export default {
  component: SharedLib,
  title: 'SharedLib',
} as Meta;

const Template: Story<SharedLibProps> = (args) => <SharedLib {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
