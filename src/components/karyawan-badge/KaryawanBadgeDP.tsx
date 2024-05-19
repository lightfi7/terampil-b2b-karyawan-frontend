import { Flex, Image, Text } from "@chakra-ui/react";
import { AButton } from "../button/AButton";
import { ContainerGradient } from "../container-gradient/ContainerGradient";
import MonthPicker from "../date-picker/MonthPicker";
import TerampilPieChart from "../terampil-pie-chart/TerampilPieChart";

export function KaryawanBadgeDP() {
  return (
    <ContainerGradient 
      mt={'24px'}
      p={'36px 4%'}
      pb={'42px'}
      w={'100%'}
      gap={'8%'}>
      <Flex 
        direction={'column'}
        align={'center'}
        mt={'-56px'}
        gap={'12px'}>
        <Flex 
          bg={'#FFF'}
          borderRadius={9999}>
          <TerampilPieChart 
            d={'150px'}
            outerRadius={74}
            innerRadius={60}
            data={[{
              name: 'Selesai',
              color: '#29C56A',
              value: 200
            }, {
              name: 'Belum',
              color: '#C4C4C4',
              value: 100
            }]}
            centerValue={'85%'} />
        </Flex>
      </Flex>
      <Flex 
        flex={1}>
        <Flex 
          alignSelf={'center'}
          flex={1}
          gap={'12px'}
          direction={'column'}>
          <Text 
            fontSize={'1.5em'}
            fontWeight={600}>
            Progress Training Amalia
          </Text>
          <Text 
            fontSize={'.9em'}>
            Progress Amalia dalam mengikuti 4 training
          </Text>
          <Flex 
            direction={'column'}
            gap={'12px'}>
            <Flex>
              <AButton 
                variant={'outline'}
                borderColor={'#FFF'}
                color={'#FFF'}
                borderRadius={999}>
                2 training dalam proses
              </AButton>
            </Flex>
            <Flex>
              <AButton 
                variant={'outline'}
                borderColor={'#FFF'}
                color={'#FFF'}
                borderRadius={999}>
                2 training sudah selesai
              </AButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ContainerGradient>
  );
}
