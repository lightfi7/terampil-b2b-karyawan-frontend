import { Flex, Input, Switch } from "@chakra-ui/react";
import { XFormItem, XFormItemSwitch } from "../interface";
import { XFormLabel } from "../XFormLabel";

interface XInputSwitchProps extends XFormItemSwitch {}

export function XInputSwitch(props: XInputSwitchProps) {
  return (
    <XFormLabel 
      prefix={props.prefix}
      label={props.label}
      required={props.required}>
      <Flex>
        <Switch 
          size={'lg'}
          border={'solid 1.8px #C7C9D9'}
          disabled={props.disabled} />
      </Flex>
    </XFormLabel>
  );
}
