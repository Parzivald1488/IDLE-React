import { Progress } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import style from './Progressbar.module.css'


interface Props {
    /**
     * Цвет прогресс бара
    */
    colorScheme?: string,
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
    size?: 'sm' | 'md' | 'lg';
    /**
     * Значение прогресс бара
     */
    value?: number,
    /**
     * Выравнивание текста
    */
    alignText?: 'left' | 'right' | 'center';
    /**
     * Положение текста относительно прогресс бара
    */
    positionText?: 'top' | 'bottom' | 'hidden';
    /**
     * Подпись прогресс бара
    */
    text?: string;
}

/**
 * Компонент параграфа
 */
export const Progressbar = (props: Props) => {
    const { colorScheme = "blue", hasStripe=false, isAnimated=false, max=100, min=0, size='sm', value=50, alignText="center", text="text", positionText="hidden"} = props;
    let progressClass = ''
    let hidden = ''
    
    switch(positionText){
        case 'top':
            progressClass = style.progressBar;
            break;
        case 'bottom':
            progressClass = style.progressBar + " " + style.reverse;
            break;
        case 'hidden' :
            hidden = style.hidden;
            break;
    }

    return (
        <div className={progressClass}>  
            <Text className={hidden} align={alignText}>{text}</Text>
            <Progress className={style.bar} size={size} colorScheme={colorScheme} hasStripe={hasStripe}  isAnimated={isAnimated} max={max} min={min} value={value}/>
        </div>
    );
};