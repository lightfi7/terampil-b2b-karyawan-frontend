import { Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { InputNumber } from "../../input-number";
import { XFormItem, XFormItemNumber } from "../interface";
import { XFormLabel } from "../XFormLabel";

interface XInputNumberProps extends XFormItemNumber {}

export function XInputNumber(props: XInputNumberProps) {
  return (
    <XFormLabel 
      prefix={props.prefix}
      label={props.label}
      required={props.required}
      columnMode={props.columnMode}>
      <InputNumber 
        disabled={props.disabled}
        value={props.value}
        currency={props.currency}
        formatter={props.formatter}
        min={props.min}
        onChange={(value: any) => props.onChange && props.onChange(value)}
        placeholder={props.placeholder}
        onKeyDown={props.onKeyDown} />
    </XFormLabel>
  );
}
