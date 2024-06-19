import clsx from 'clsx';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

interface FormProps<FormValues extends FieldValues> {
  children: React.ReactNode;
  testId?: string;
  methods: UseFormReturn<FormValues>;
  onSubmit: (values: FormValues) => void;
  className?: string;
  isHidden?: boolean;
  id?: string;
}

export const Form = <T extends FieldValues>({
  children,
  testId,
  methods,
  onSubmit,
  className = '',
  isHidden,
  id,
}: FormProps<T>): JSX.Element => {
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)} // Pass handleSubmit directly to onSubmit
        className={clsx({ [className]: true })}
        data-testid={testId}
        aria-hidden={isHidden}
        id={id}
      >
        {children}
      </form>
    </FormProvider>
  );
};
