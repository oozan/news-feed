import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { inputLabelStyles, inputStateStyles } from '@styles/common-styles';

interface TextareaProps {
  children: React.ReactNode;
  id: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  min?: number;
  max?: number;
  placeholder?: string;
  step?: number;
  testId?: string;
  className?: string;
  isInline?: boolean;
  isReadonly?: boolean;
  isLabelHidden?: boolean;
}

export const Textarea = ({
  children,
  id,
  isRequired = false,
  isDisabled = false,
  min,
  max,
  testId,
  placeholder,
  className = '',
  isInline,
  isReadonly,
  isLabelHidden,
}: TextareaProps): JSX.Element => {
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
      className={clsx('grid', {
        [className]: true,
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
          <textarea
            className={clsx('px-4 py-2', inputStateStyles(hasError))}
            id={id}
            min={min}
            max={max}
            placeholder={placeholder}
            tabIndex={isReadonly ? -1 : undefined}
            disabled={isDisabled}
            rows={6}
            aria-required={isRequired}
            data-testid={`${testId}-textarea`}
            {...register(id, {
              min,
              max,
              disabled: isDisabled,
              required: isRequired && t('common.errors.required'),
            })}
          />
          <ErrorMessage errors={errors} name={id} as="p" className="col-start-2 text-carnation" />
        </>
      )}
    </div>
  );
};
