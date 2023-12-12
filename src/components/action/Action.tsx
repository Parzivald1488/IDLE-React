import { Progress, Text, Box, Image, Badge } from '@chakra-ui/react'
import style from './Action.module.scss'
import classNames from "classnames";
import { Progressbar } from '../Progressbar/Progressbar';
import { BadgeComp } from '../badge/Badge';

interface Props {
    /** Цвет верхней границы действия */
    color : "red" | "green" | "gray" | "yellow" | "brown",

    /** Радиус границ действия */
    borderRadius : "none" | "sm" | "base" | "md" | "lg" | "2xl" | "3xl" | "full",

    /** Назваение действия */
    badgeColor : "red" | "green" | "gray" | "yellow" | "brown",

    /** Назваение действия */
    actionName : string,

    /** Название результата действия */
    resultName : string,

    /** Название типа результата действия */
    typeResult : string,

    /** Список расходников */
    cosumableList : string,

    /** Список результатов */
    resultList : string,

    /** Шкалу прогресса действия */
    actionProgress : string,

    /** Шкалу мастерства действия */
    masteryProgress : string,

    /** Изображение */
    image?: string,

   
}

export type ActionProps = Props;

/** Компонент действия */
export const Action = (props: Props) => {
    const {color, borderRadius, badgeColor, actionName='Добыть :', resultName='Рунная эссенция', typeResult='Эссенция', cosumableList, resultList, actionProgress, masteryProgress, image='https://i.ytimg.com/vi/8yiYboYs-wk/hqdefault.jpg' } = props;


    return (
        <Box width={'sm'} height={'sm'} backgroundColor="#232a35" display="flex"  alignItems="center" flexDirection={"column"} borderTop={'4px'} borderTopColor={color} borderRadius={borderRadius}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} paddingTop='20px' fontSize='12px' fontWeight='600'>
                <Text>{actionName}</Text>
                <Text>{resultName}</Text>
                <Badge colorScheme={badgeColor} borderRadius='base' fontSize='12px'>{typeResult}</Badge>
            </Box>

            <Box display='flex' flexDirection='row'>
                <BadgeComp
                    color="gray"
                    image="https://i.ytimg.com/vi/8yiYboYs-wk/hqdefault.jpg"
                    text="5"
                />
                <BadgeComp
                    color="gray"
                    image="https://i.ytimg.com/vi/8yiYboYs-wk/hqdefault.jpg"
                    text="1"
                />
                <BadgeComp
                    color="gray"
                    image="https://i.ytimg.com/vi/8yiYboYs-wk/hqdefault.jpg"
                    text="0"
                />
                <BadgeComp
                    color="blue"
                    image="https://i.ytimg.com/vi/8yiYboYs-wk/hqdefault.jpg"
                    text="3.00 сек."
                />
            </Box>

            <Box margin='8px'>
                <Image height={'64px'} width={'64px'} src={image}/>
            </Box>
            <Box width='100%' height='100%' display='flex' flexDirection='column' justifyContent='space-between' padding='20px' paddingTop='0px'>

                <Box borderRadius='base'>
                    <Progressbar
                        alignText="center"
                        positionText="top"
                        colorScheme="blue"
                        size="lg"
                        text="6/6"
                        value={100}
                    />
                </Box>
            
                <Box display='flex' flexDirection='row'>
                    <Box display='flex' flexDirection='row' margin='4px'>
                        <Image height='20px' width='20px' src={image} marginRight='8px'/>
                        <Text marginRight='4px'>5</Text>
                    </Box>
                    <Box width='100%' borderRadius='base'>
                        <Progressbar
                            alignText="center"
                            positionText="top"
                            colorScheme="blue"
                            size="sm"
                            text="1/86"
                            value={100}
                        />
                    </Box>
                </Box>
            </Box>
            
        </Box>
    );
};