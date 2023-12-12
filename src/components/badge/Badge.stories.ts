import type {Meta, StoryObj} from '@storybook/react';
import { BadgeComp } from "./Badge";

// Подробнее о том, как создавать истории: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof BadgeComp> = {
    // Расположение и заголовок страницы в сайдбаре
    title: 'Components/Badge',
    // Описываемый компонент
    component: BadgeComp,
    // Параметры страницы
    parameters: {
        // Необязательный параметр для центрирования компонента на странице. Подробнее: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // Этот компонент будет иметь автоматически созданную документацию: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;


export const Primary: Story = {

};

export const Small: Story = {

};

export const Large: Story = {

};

export const Disabled: Story = {

};

export default meta;