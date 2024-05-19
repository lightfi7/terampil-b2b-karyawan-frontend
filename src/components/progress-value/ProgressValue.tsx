import { Box, Flex, Text } from "@chakra-ui/react";

interface ProgressValueProps {
  w?: string | number
  progress?: number
  color?: string
}

export function ProgressValue(props: ProgressValueProps) {
  return (
    <Flex 
      position={'relative'}
      bg={'#C4C4C4'}
      h={'4px'}
      w={props.w ?? '100%'}
      borderRadius={999}
      overflow={'hidden'}>
      <Box
        position={'absolute'}
        w={`${(+(props.progress ?? .5) * 100).toFixed(2)}%`}
        bg={props.color ?? 'brand'}
        borderRadius={999}
        h={'100%'} />
    </Flex>
  );
}

export interface ProgressValueDashboardProps extends ProgressValueProps {
  label?: string
  value?: string
}

export function ProgressValueDashboard(props: ProgressValueDashboardProps) {
  return (
    <Flex direction={'column'}>
      <Text 
        color={'#626262'}
        fontSize={'.8em'}>
        { props.label }
      </Text>
      <Flex 
        mt={'-5px'}
        align={'center'}
        gap={'18px'}>
        <Flex flex={1}>
          <ProgressValue {...props} />
        </Flex>
        <Text
          w={'10%'}
          color={'#626262'}
          fontSize={'.88em'}
          fontWeight={700}>
          { props.value }
        </Text>
      </Flex>
    </Flex>
  );
}
