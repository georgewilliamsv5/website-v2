/**
 * @copyright 2025 George Lloyd Williams V
 * @license Apache-2.0
 */

import React from "react";

type ButtonProps = {
  label: string;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  icon?: string;
  classes?: string;
  download?: string;
};

const ButtonPrimary: React.FC<ButtonProps> = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
}) => {
  const content = (
    <>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  return href ? (
    <a href={href} target={target} className={`btn btn-primary ${classes}`}>
      {content}
    </a>
  ) : (
    <button className={`btn btn-primary ${classes}`}>{content}</button>
  );
};

const ButtonOutline: React.FC<ButtonProps> = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
}) => {
  const content = (
    <>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  return href ? (
    <a href={href} target={target} className={`btn btn-outline ${classes}`}>
      {content}
    </a>
  ) : (
    <button className={`btn btn-outline ${classes}`}>{content}</button>
  );
};

export { ButtonOutline, ButtonPrimary };
