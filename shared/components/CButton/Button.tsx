import { BaseAPI$, CloudServerAPI$ } from '@/shared/utils/http/api';
import React, { useEffect, useState } from 'react';
import { lastValueFrom } from 'rxjs';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  const [data, setData] = useState<any>();

  const getData = async () => {
    const res = await lastValueFrom(
      BaseAPI$.get$<{ test: string }>('/healthy'),
      {
        defaultValue: {
          test: '123',
        },
      },
    );
    setData(JSON.stringify(res));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      {data}
    </button>
  );
};
