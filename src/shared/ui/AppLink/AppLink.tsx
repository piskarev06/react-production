import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
  children,
  className,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
