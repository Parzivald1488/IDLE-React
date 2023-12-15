import { Text, Box, Image, Badge } from '@chakra-ui/react'
import { Progressbar } from '../Progressbar/Progressbar';
import { BadgeComp } from '../badge/Badge';
import {GiTrophyCup} from "react-icons/gi";
import {ReactNode} from "react";


type Resources = {
    color: "red" | "green" | "gray" | "blue" | "brown"
    image?: ReactNode
    text: string
}

interface Props {
    title: string;
    description: string;
    badge?: ReactNode;
    image: ReactNode;
    resources?: ReactNode[]
    actionValue?: number;
    masteryValue?: number;
    masteryLevel?: number;
    masteryMax?: number;
}

export type ActionProps = Props;

/** Компонент действия */
export const Action = (props: Props) => {
    const {
        title,
        description,
        badge,
        image,
        resources = [],
        actionValue = 0,
        masteryValue = 0,
        masteryLevel = 1,
        masteryMax = 0,
    } = props;


    return (
        <Box flexGrow={1} display="flex" alignItems="center" flexDirection={"column"} borderRadius={'4px'} borderWidth={'4px'} padding='20px' gap={'15px'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} fontSize='12px' fontWeight='600'>
                <Text>{title}:</Text>
                <Text>{description}</Text>
                {badge}
            </Box>

            <Box display='flex' flexDirection='row' gap={'5px'}>
                {resources}
            </Box>

            <Box margin='8px'>
                {image}
            </Box>

            <Box width={'100%'} borderRadius='base'>
                <Progressbar
                    alignText="center"
                    positionText="top"
                    colorScheme="blue"
                    size="lg"
                    value={actionValue}
                />
            </Box>

            <Box width={'100%'} display='flex' flexDirection='row'>
                <Box display='flex' flexDirection='row' margin='4px'>
                    <GiTrophyCup size={20} />
                    <Text marginRight='4px'>{masteryLevel}</Text>
                </Box>
                <Box width='100%' borderRadius='base'>
                    <Progressbar
                        alignText="center"
                        positionText="top"
                        colorScheme="blue"
                        size="sm"
                        text={`${masteryValue}/${masteryMax}`}
                        value={masteryValue}
                    />
                </Box>
            </Box>
            
        </Box>
    );
};