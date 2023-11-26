import type {Meta, StoryObj} from '@storybook/react';
import {Paragraph} from "./Paragraph";

// Подробнее о том, как создавать истории: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Paragraph> = {
    // Расположение и заголовок страницы в сайдбаре
    title: 'Example/Paragraph',
    // Описываемый компонент
    component: Paragraph,
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
    args: {
        children: 'Primary paragraph'
    },
};

export const Small: Story = {
    args: {
        size: 'S',
        children: 'Small paragraph'
    },
};

export const Large: Story = {
    args: {
        size: 'S',
        children: 'Large paragraph'
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Large paragraph'
    },
};

export default meta;