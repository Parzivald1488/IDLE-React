import { Box, Image, Badge } from '@chakra-ui/react'
import style from './Badge.module.scss'
import classNames from "classnames";
import {ReactNode} from "react";

interface Props {
    /** Цвет фона текста */
    color : "red" | "green" | "gray" | "blue" | "brown",

    /** Изображение */
    image: ReactNode,

    /** Текст */
    text? : string
}

export type ActionProps = Props;

/** Компонент действия */
export const BadgeComp = (props: Props) => {
    const {color, image='', text='3.00 сек.' } = props;

    return (
        <Box display="flex" flexDirection="column" alignItems="center" >
            <Box padding="5px" paddingBottom="2px" height="32px" width="32px" borderWidth={'2px'} borderRadius="4px" fontSize={18} alignItems="center" justifyContent={'center'}>
                {image}
            </Box>
            {text ? (
                <Badge backgroundColor={color} borderRadius="base" fontSize="10px" >{text}</Badge>
            ) : null}
        </Box>
    );
};