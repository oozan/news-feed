import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { inputLabelStyles, inputStateStyles } from '@styles/common-styles';

export type InputTypes = 'text' | 'number' | 'datetime-local' | 'date' | 'tel';

interface InputProps {
  children: React.ReactNode;
  id: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  type?: InputTypes;
  min?: number;
  max?: number;
  placeholder?: string;
  step?: number;
  testId?: string;
  className?: string;
  isInline?: boolean;
  isReadonly?: boolean;
  isLabelHidden?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const Input = ({
  children,
  id,
  isRequired = false,
  isDisabled = false,
  type = 'text',
  min,
  max,
  step,
  testId,
  placeholder,
  className = '',
  isInline,
  isReadonly,
  isLabelHidden,
  onChange,
}: InputProps): JSX.Element => {
  const { t } = useTranslation();

  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  const hasError = Object.keys(errors).includes(id);

  return (
    <div
      data-testid={testId}
      className={clsx('', {
        [className]: true,
      })}
    >
      <div
        className={clsx('grid', {
          ['lg:grid-cols-[1fr,2fr] lg:items-start lg:gap-x-4']: isInline && !isReadonly,
        })}
      >
        {isReadonly && (
          <p className={clsx('grid', { ['lg:grid-cols-[1fr,2fr] lg:items-start lg:gap-x-4']: isInline })}>
            <span className={inputLabelStyles(isLabelHidden)}>{children}</span>
            <span
              className={clsx(
                'truncate rounded border border-port-gore/40 bg-alto px-4 py-2 leading-[1.5] text-port-gore/40'
              )}
            >
              {getValues(id) ?? '-'}
            </span>
          </p>
        )}
        {!isReadonly && (
          <>
            <label htmlFor={id} data-testid={`${testId}-label`} className={inputLabelStyles(isLabelHidden)}>
              {children}
            </label>
            <input
              className={clsx('px-4 py-2', inputStateStyles(hasError))}
              id={id}
              type={type}
              min={min}
              max={max}
              step={step}
              placeholder={placeholder}
              tabIndex={isReadonly ? -1 : undefined}
              disabled={isDisabled}
              aria-required={isRequired}
              data-testid={`${testId}-input`}
              {...register(id, {
                min,
                max,
                disabled: isDisabled,
                required: isRequired && t('common.errors.required'),
              })}
              onChange={onChange}
            />
          </>
        )}
      </div>
      {!isReadonly && <ErrorMessage errors={errors} name={id} as="p" className="col-start-2 text-carnation" />}
    </div>
  );
};
