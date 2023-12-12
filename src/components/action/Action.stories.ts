import type {Meta, StoryObj} from '@storybook/react';
import { Action } from "./Action";

// Подробнее о том, как создавать истории: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Action> = {
    // Расположение и заголовок страницы в сайдбаре
    title: 'Components/Action',
    // Описываемый компонент
    component: Action,
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