import type {Meta, StoryObj} from '@storybook/react';
import { Action } from "./Action";
import {Badge, Flex} from "@chakra-ui/react";
import {GiTrophyCup, GiTrowel, GiUnlitBomb} from "react-icons/gi";
import {BadgeComp} from "../badge/Badge";

// Подробнее о том, как создавать истории: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Action> = {
    // Расположение и заголовок страницы в сайдбаре
    title: 'Components/Action',
    // Описываемый компонент
    component: Action,
    // Этот компонент будет иметь автоматически созданную документацию: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;


/** Варианты размеров прогресс-бара */
export const Sizes: Story = {
    name: 'Размеры',
    decorators: [
        (Story) => {
            return (
                <Flex gap={6} width={'100%'}>
                    <Story />
                </Flex>
        )
        },
    ],
    render: (args) => {
        return (
            <>
                <Action
                    title={'Добыть'}
                    description={"Рунная эссенция"}
                    badge={
                        <Badge colorScheme={'blue'} borderRadius='base' fontSize='12px'>Эссенция</Badge>
                    }
                    image={<GiUnlitBomb size={64} />}
                    resources={[
                        <BadgeComp color={'gray'} text={'3.00 сек.'} image={<GiTrophyCup />} />,
                        <BadgeComp color={'gray'} text={'6.00 сек.'} image={<GiTrowel />} />,
                    ]}
                    actionValue={40}
                    masteryValue={10}
                    masteryLevel={3}
                    masteryMax={50}
                />
                <Action
                    title={'Нарыть'}
                    description={"Медь"}
                    image={<GiUnlitBomb size={64} />}
                />
            </>
        );
    }
};

export const Primary: Story = {

};

export const Small: Story = {

};

export const Large: Story = {

};

export const Disabled: Story = {

};

export default meta;