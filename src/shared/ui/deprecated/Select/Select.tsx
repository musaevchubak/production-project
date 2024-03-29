import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}
interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 *@deprecated
 */

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;

    const optionList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange?.(e.target.value as T);
        }
    };
    return (
        <div className={classNames(cls.Select, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
};
