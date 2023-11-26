import {ReactNode} from "react";

interface Props {
    /**
     * Дочерний компонент
     */
    children: ReactNode;
    /**
     * Размер
     */
    size?: 'S' | 'M' | 'L';
    /**
     * Заблочено
     */
    disabled?: boolean;
}

/**
 * Компонент параграфа
 */
export const Paragraph = (props: Props) => {
    const { children, size = "M", disabled = false } = props;
    const style: any = {};
    switch (size) {
        case 'S':
            style.fontSize = '12px';
            break;
        case 'M':
            style.fontSize = '16px';
            break;
        case 'L':
            style.fontSize = '20px';
            break;
    }
    if (disabled) {
        style.color = 'gray';
    }

    return (
        <p style={style}>{children}</p>
    );
};