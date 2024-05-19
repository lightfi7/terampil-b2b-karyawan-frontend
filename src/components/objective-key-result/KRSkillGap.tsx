import { Box, Flex, Text } from "@chakra-ui/react";

interface KRSkillGapProps {}

export function KRSkillGap(props: KRSkillGapProps) {
  return (
    <Flex
      border={'solid 1px #373737'}
      borderRadius={4}
      w={'100%'}
      bg={'#FFF'}
      direction={'column'}
      fontSize={'.8em'}>
      <Flex
        p={'12px 16px'}
        direction={'column'}>
        <Text 
          color={'#999999'}>
          Skill Gap
        </Text>
        <Text 
          fontWeight={600}
          color={'#F18F01'}>
          Kemampuan Berkomunikasi
        </Text>
      </Flex>
      <Flex 
        color={'#999999'}
        mb={'4px'}>
        <Text 
          flex={3}
          pl={'16px'}>
          Rekomendasi:
        </Text>
        <Text 
          flex={1}>
          Jenis Plan
        </Text>
        <Text 
          flex={1}>
          Availability
        </Text>
        <Text 
          flex={1}>
          Status HR
        </Text>
        <Text 
          flex={1}>
          Status Progres
        </Text>
        <Text 
          flex={1}>
          Approved Training
        </Text>
      </Flex>
      {
        Array(5).fill(1).map((_, i: number) => (
          <Flex 
            direction={'column'}>
            <Box 
              w={'100%'}
              h={'1px'}
              bg={'#666'} />
            <Flex 
              color={'#202020'}
              pt={'4px'}
              pb={'4px'}
              align={'center'}>
              <Text 
                flex={3}
                pl={'16px'}>
                How Your Body Language Will Determine Your Public Speaking Outcome
              </Text>
              <Text 
                flex={1}>
                Modul Training
              </Text>
              <Text 
                flex={1}>
                Tersedia
              </Text>
              <Text 
                flex={1}>
                Status HR
              </Text>
              <Text 
                flex={1}>
                Status Progres
              </Text>
              <Text 
                flex={1}>
                Approved Training
              </Text>
            </Flex>
          </Flex>
        ))
      }
    </Flex>
  );
}
