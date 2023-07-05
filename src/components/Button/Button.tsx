import clsx from 'clsx';
import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'light' | 'dark';

type ButtonProps = {
  isLoading?: boolean;
  isBlock?: boolean;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isBlock = false,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    const getButtonClasses = () => {
      switch (variant) {
        case 'primary':
          return clsx(
            'bg-primary-500 text-white',
            'border border-primary-600',
            'hover:bg-primary-600 hover:text-white',
            'active:bg-primary-500',
            'disabled:bg-primary-400 disabled:hover:bg-primary-400'
          );
        case 'outline':
          return clsx(
            'text-primary-500',
            'border border-primary-500',
            'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100'
          );
        case 'ghost':
          return clsx(
            'text-primary-500',
            'shadow-none',
            'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100'
          );
        case 'light':
          return clsx(
            'bg-white text-dark',
            'border border-gray-300',
            'hover:text-dark',
            'active:bg-white/80 disabled:bg-gray-200'
          );
        case 'dark':
          return clsx(
            'bg-gray-900 text-white',
            'border border-gray-600',
            'active:bg-gray-700 disabled:bg-gray-700'
          );
        default:
          return '';
      }
    };

    const getSpinnerClasses = () => {
      if (variant === 'primary' || variant === 'dark') {
        return 'text-white';
      } else if (variant === 'light') {
        return 'text-black';
      } else if (variant === 'outline' || variant === 'ghost') {
        return 'text-primary-500';
      } else {
        return '';
      }
    };

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsx(
          'flex items-center justify-center rounded px-4 py-2 font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition duration-200 ease-in',
          'hover:scale-[102%]',
          isBlock && 'w-full justify-center',
          disabled && 'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent hover:text-transparent disabled:cursor-wait',
          getButtonClasses(),
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsx(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              getSpinnerClasses()
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;
