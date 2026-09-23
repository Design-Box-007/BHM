import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  fluid = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'w-full mx-auto px-4 sm:px-6 lg:px-8',
          fluid ? 'max-w-full' : 'max-w-[1330px]',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
