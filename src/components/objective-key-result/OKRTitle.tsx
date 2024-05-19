import { Flex, Image, Text } from "@chakra-ui/react";
import { ProgressValue } from "../progress-value/ProgressValue";

interface OKRTitleProps {
  title?: string
  subtitle?: string
  bobot?: number
  open?: boolean
  pencapaian: number
  onClick?(): void
}

export function OKRTitle(props: OKRTitleProps) {
  return (
    <Flex 
      onClick={props.onClick}
      cursor={'pointer'}
      w={'100%'}
      bg={'#FFF'}
      p={'12px 24px'}
      borderRadius={8}
      align={'center'}
      gap={'18px'}
      boxShadow={'0px 1px 8px rgba(0, 0, 0, .1)'}>
      <Image 
        w={'.85em'}
        h={'.85em'}
        transition={'250ms'}
        objectFit={'contain'}
        transform={`rotate(${props.open ? '0deg' : '180deg'})`}
        src={'/icons/light/icon-arrow-up.png'} />
      <Flex 
        flex={1}
        direction={'column'}>
        <Text
          fontSize={'1.2em'}>
          { props.title } (Bobot { +(props.bobot ?? 0).toFixed(2) }%)
        </Text>
        <Text
          fontSize={'.9em'}>
          { props.subtitle }
        </Text>
      </Flex>
      <Flex
        direction={'row'}
        align={'center'}
        w={'20%'}
        gap={'12px'}>
        <ProgressValue progress={props.pencapaian / 100} />
        <Text
          fontSize={'1.1em'}
          fontWeight={600}>
          { props.pencapaian.toFixed(2) }%
        </Text>
      </Flex>
    </Flex>
  );
}
