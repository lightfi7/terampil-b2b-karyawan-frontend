import { Select, SingleValue } from "chakra-react-select";
import { CSSProperties } from "react";
import { OptionData, XFormItem, XFormItemDropdown } from "../interface";
import { XFormLabel } from "../XFormLabel";

interface XInputSelectProps extends XFormItemDropdown {
  unstyled?: boolean
}

export function XInputSelect(props: XInputSelectProps) {
  const list_option = props.options ?? [];
  return (
    <XFormLabel 
      prefix={props.prefix}
      label={props.label}
      required={props.required}
      style={props.containerStyle}>
      <Select
        name="colors"
        options={list_option}
        useBasicStyles
        variant={props.unstyled ? 'unstyled' : undefined}
        placeholder={props.placeholder}
        chakraStyles={{
          control: (provided, state) => ({
            ...provided,
            fontSize: '.85em'
          })
        }}
      />
    </XFormLabel>
  );
}
