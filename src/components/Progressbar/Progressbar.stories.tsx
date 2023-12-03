import type {Meta, StoryObj} from '@storybook/react';
import {Progressbar, ProgressbarProps} from "./Progressbar";
import {Flex, Grid} from "@chakra-ui/react";

type ColorType = ProgressbarProps['colorScheme'];
type SizeType = ProgressbarProps['size'];

const COLORS: ColorType[] = ['blue', 'whiteAlpha', 'blackAlpha', 'gray', 'red', 'orange', 'yellow'];
const SIZES: SizeType[] = ['xs', 'sm', 'md', 'lg'];

// Подробнее о том, как создавать истории: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Progressbar> = {
    // Расположение и заголовок страницы в сайдбаре
    title: 'Components/Progressbar',
    // Описываемый компонент
    component: Progressbar,
    // Аргументы, передаваемые компоненту в каждой сторе
    args: {
        value: 80,
        text: 'Загрузка 80%'
    },
    tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

/** Вариант компонента по-умолчанию */
export const Default: Story = {
    name: 'По-умолчанию',
};

/** Варианты размеров прогресс-бара */
export const Sizes: Story = {
    name: 'Размеры',
    decorators: [
        (Story) => {
            return (
                <Flex direction="column" gap={6}>
                    <Story />
                </Flex>
            )
        },
    ],
    render: (args) => {
        return (
            <>
                {SIZES.map((size) => (
                    <Progressbar {...args} size={size} key={size} />
                ))}
            </>
        );
    }
};

/** Варианты цветов прогресс-бара */
export const Colors: Story = {
    name: 'Цвета',
    decorators: [
        (Story) => {
            return (
                <Flex direction="column" gap={6}>
                    <Story />
                </Flex>
            )
        },
    ],
    render: (args) => {
        return (
            <>
                {COLORS.map((color) => (
                    <Progressbar {...args} colorScheme={color} key={color} />
                ))}
            </>
        )
    },
};

/** Варианты расположения текста */
export const TextPosition: Story = {
    name: 'Расположение текста',
    decorators: [
        (Story) => {
            return (
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                    <Story />
                </Grid>
            )
        },
    ],
    render: (args) => {
        return (
            <>
                <Progressbar {...args} alignText='left' positionText='bottom' />
                <Progressbar {...args} alignText='center' positionText='bottom' />
                <Progressbar {...args} alignText='right' positionText='bottom' />
                <Progressbar {...args} alignText='left' positionText='top' />
                <Progressbar {...args} alignText='center' positionText='top' />
                <Progressbar {...args} alignText='right' positionText='top' />
            </>
        );
    },
};

export default meta;