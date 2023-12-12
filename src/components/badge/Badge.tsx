import { Box, Image, Badge } from '@chakra-ui/react'
import style from './Badge.module.scss'
import classNames from "classnames";

interface Props {
    /** Цвет фона текста */
    color : "red" | "green" | "gray" | "blue" | "brown",

    /** Изображение */
    image?: string,

    /** Текст */
    text? : string

   
}

export type ActionProps = Props;

/** Компонент действия */
export const BadgeComp = (props: Props) => {
    const {color, image='https://i.ytimg.com/vi/8yiYboYs-wk/hqdefault.jpg', text='3.00 сек.' } = props;

    return (
        <Box borderRadius="base" margin="8px" height="32px" width="32px" backgroundColor="#2d3542" display="flex" flexDirection="column" alignItems="center">
            <Box padding="8px" paddingBottom="2px">
                <Image height="16px" width="16px" src={image}/>
            </Box>
            <Badge backgroundColor={color} borderRadius="base" fontSize="10px" overflow="visible" >{text}</Badge>
        </Box>
    );
};