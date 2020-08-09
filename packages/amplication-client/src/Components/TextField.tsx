import React from "react";
import { useField } from "formik";
import classNames from "classnames";
import "./TextField.scss";

export type Props = (
  | ({
      textarea: true;
      inputRef?: React.Ref<HTMLTextAreaElement>;
    } & React.HTMLProps<HTMLTextAreaElement>)
  | ({
      textarea?: false;
      inputRef?: React.Ref<HTMLInputElement>;
    } & React.HTMLProps<HTMLInputElement>)
) & {
  name: string;
  helpText?: string;
};

export const TextField = (props: Props) => {
  const [field, meta] = useField(props);
  const { label, helpText } = props;
  return (
    <div className={classNames("text-field", props.className)}>
      <label>
        <span>{label}</span>
        {props.textarea ? (
          <textarea ref={props.inputRef} {...field} {...props} />
        ) : (
          <input ref={props.inputRef} {...field} {...props} />
        )}
      </label>
      {meta.error && helpText}
    </div>
  );
};