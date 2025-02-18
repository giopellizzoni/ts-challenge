import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type CommonProps = {
  children: ReactNode;
  textOnly?: true;
};

type ButtonProps = CommonProps & Omit<ComponentPropsWithoutRef<"button">, "to">;

type LinkProps = CommonProps &
  ComponentPropsWithoutRef<typeof Link> & { to?: string };

const isLinkProps = (props: ButtonProps | LinkProps): props is LinkProps => {
  return "to" in props;
};

const Button = (props: ButtonProps | LinkProps) => {
  const buttonClass = `${props.textOnly ? "button--text-only" : "button"}`;

  if (isLinkProps(props)) {
    return <Link className={buttonClass} {...props}></Link>;
  }

  return <button className={buttonClass} {...props}></button>;
};

export default Button;
