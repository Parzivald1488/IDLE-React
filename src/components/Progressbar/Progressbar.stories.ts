import type {Meta, StoryObj} from '@storybook/react';
import { Progressbar } from "./Progressbar";

// Подробнее о том, как создавать истории: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Progressbar> = {
    // Расположение и заголовок страницы в сайдбаре
    title: 'Example/Progressbar',
    // Описываемый компонент
    component: Progressbar,
    // Параметры страницы
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;


export const Small: Story = {
    args: {
        size: 'sm',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export default meta;