import { Progress } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import style from './Progressbar.module.css'
import classNames from 'classnames';


interface Props {
    /**
     * Цвет прогресс бара
    */
    colorScheme?: "blue" | "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow",
    /**
     * Градиент прогресс бара
    */
    hasStripe?: boolean,
    /**
     * Анимированный прогресс бара
    */
    isAnimated?: boolean,
    /**
     * Максимальное значение прогресс бара
    */
    max?: number,
    /**
     * Минимальное значение прогресс бара
    */
    min?: number,
    /**
     * Размер прогресс бара
    */
    size?: 'xs' | 'sm' | 'md' | 'lg',
    /**
     * Значение прогресс бара
     */
    value?: number,
    /**
     * Выравнивание текста
    */
    alignText?: 'left' | 'right' | 'center',
    /**
     * Положение текста относительно прогресс бара
    */
    positionText?: 'top' | 'bottom';
    /**
     * Подпись прогресс бара
    */
    text?: string,
}

/**
 * Компонент прогресс-бара
*/
export const Progressbar = (props: Props) => {
    const { colorScheme = "blue", hasStripe=false, isAnimated=false, max=100, min=0, size='sm', value, alignText="center", text, positionText="top" } = props;
    let hidden = ''
    
    let progressClass = classNames(style.progressBar, {
        [style.reverse]: positionText === 'bottom'
    })

    
    return (
        <div className={progressClass}>  
            {text ? (
                <Text fontSize={size} className={hidden} align={alignText}>{text}</Text>
            ) : null}
            <Progress className={style.bar} size={size} colorScheme={colorScheme} hasStripe={hasStripe} isAnimated={isAnimated} max={max} min={min} value={value}/>
        </div>
    );
};