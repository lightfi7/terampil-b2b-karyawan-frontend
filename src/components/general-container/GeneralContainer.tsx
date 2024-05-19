import { Flex, Text } from "@chakra-ui/react";

interface GeneralContainerProps {
  children?: any
  title?: string
  titleColor?: string
}

export function GeneralContainer(props: GeneralContainerProps) {
  return (
    <Flex 
      w={'100%'}
      direction={'column'}>
      <Flex 
        borderRadius={'12px'}
        bg={'#FFF'}
        p={'18px'}
        direction={'column'}
        boxShadow={'0px 1px 8px rgba(0, 0, 0, .1)'}
        gap={'12px'}>
        { props.title && <Text 
          fontSize={'1.15em'}
          color={props.titleColor}
          fontWeight={600}>
          { props.title }
        </Text> }
        { props.children }
      </Flex>
    </Flex>
  );
}
