import { Box, Flex, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";

interface XFormLabelProps {
  label?: string
  prefix?: string
  required?: boolean
  style?: CSSProperties
  columnMode?: boolean
  children: any
}

export function XFormLabel(props: XFormLabelProps) {
  return (
    <Flex 
      direction={props.columnMode ? 'column' : 'row'} 
      style={props.style}
      gap={'4px'}
      p={props.columnMode ? 0 : '0 36px'}>
      { props.label && <Text 
        w={props.columnMode ? 'auto' : '15%'}
        mt={'9px'}
        fontWeight={500}
        color={'text'}
        fontSize={'.9em'}>
        { props.label }{ props.required && <span style={{ color: 'red' }}>*</span> }
      </Text> }
      <Flex 
        flex={1}
        align={'center'}
        gap={'12px'}>
        { props.prefix && <Text fontWeight={600}>
          { props.prefix }
        </Text> }
        <Flex 
          flex={1}
          position={'relative'}
          direction={'column'}>
          { props.children }
        </Flex>
      </Flex>
    </Flex>
  );
}
