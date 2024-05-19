import { Flex, Text } from "@chakra-ui/react";

interface DashboardOKRCardProps {}

export function DashboardOKRCard(props: DashboardOKRCardProps) {
  return (
    <Flex
      boxShadow={'0px 1px 12px rgba(0, 0, 0, .1)'}
      direction={'column'}
      borderRadius={7}
      p={'4px 0'}
      color={'#626262'}
      bg={'#FFF'}
      flex={1}>
      <Flex 
        gap={'5px'}
        p={'18px 18px'}
        direction={'column'}>
        <Text
          fontSize={'.8em'}>
          Total Nasabah Individu Baru
        </Text>
        <Text
          color={'brand'}
          fontWeight={600}
          fontSize={'1.1em'}>
          50.000
        </Text>
      </Flex>
      <Flex
        w={'100%'}
        h={'1px'}
        bg={'#E5E5E5'} />
      <Flex 
        gap={'5px'}
        p={'18px 18px'}
        direction={'column'}>
        <Text
          fontSize={'.8em'}>
          Target
        </Text>
        <Text
          fontSize={'.8em'}>
          <b>50.000</b> <span style={{ color: '#29C56A' }}>(100% dari target)</span>
        </Text>
      </Flex>
    </Flex>
  );
}
