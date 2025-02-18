import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type CommonProps = {
  children: ReactNode;
  textOnly: boolean;
};

type ButtonProps = CommonProps & Omit<ComponentPropsWithoutRef<"button">, "to">;

type LinkProps = CommonProps &
  ComponentPropsWithoutRef<typeof Link> & { to?: string };

const isLinkProps = (props: ButtonProps | LinkProps): props is LinkProps => {
  return "to" in props;
};

const Button = (props: ButtonProps | LinkProps) => {
  if (isLinkProps(props)) {
    const { children, textOnly, ...rest } = props;
    return (
      <Link
        className={`${textOnly ? "button--text-only" : "button"}`}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...rest } = props;
  return (
    <button
      className={`${textOnly ? "button--text-only" : "button"}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
