import { Flex, Image, Text } from "@chakra-ui/react";
import { OptionData, XFormItem, XFormItemDropdown, XFormItemRadioTick } from "../interface";
import { XFormLabel } from "../XFormLabel";

interface XInputRadioTickProps extends XFormItemRadioTick {}

export function XInputRadioTick(props: XInputRadioTickProps) {
  const list_option = props.options ?? [];
  return (
    <XFormLabel 
      prefix={props.prefix}
      label={props.label}
      required={props.required}
      style={{
        marginTop: props.continue ? '-12px' : ''
      }}>
      <Flex gap={'12px'}>
        {
          list_option.map((option: OptionData, i: number) => (
            <RadioTickItem 
              key={i}
              active={props.value === option.value}
              label={option.label}
              iconLabel={(option.adds ?? {})['icon']}
              onTick={() => props.onChange && props.onChange(option.value)} />
          ))
        }
      </Flex>
    </XFormLabel>
  );
}

interface RadioTickItemProps {
  active?: boolean
  onTick?(): void
  iconLabel?: string
  label?: string
}

function RadioTickItem(props: RadioTickItemProps) {
  return (
    <Flex 
      border={'solid 1px'}
      flex={1}
      borderRadius={'12px'}
      p={'13px 18px'}
      borderColor={props.active ? '#005BD4' : '#D9DBE9'}
      bg={props.active ? '#EDFEFE' : 'transparent'}
      align={'center'}
      gap={'12px'}
      cursor={'pointer'}
      onClick={props.onTick}>
      { props.iconLabel && <Image src={props.iconLabel} /> }
      <Text 
        fontSize={'15px'}
        fontWeight={props.iconLabel ? 700 : 500}
        textAlign={props.iconLabel ? 'left' : 'center'}
        w={props.iconLabel ? '' : '100%'}>
        { props.label }
      </Text>
    </Flex>
  );
}
