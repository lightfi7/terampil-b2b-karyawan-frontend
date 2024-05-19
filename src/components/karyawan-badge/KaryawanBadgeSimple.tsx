import { Flex, Image, Text } from "@chakra-ui/react";
import { AButton } from "../button/AButton";
import { ContainerGradient } from "../container-gradient/ContainerGradient";
import MonthPicker from "../date-picker/MonthPicker";

export function KaryawanBadgeSimple() {
  return (
    <ContainerGradient 
      mt={'24px'}
      p={'36px 4%'}
      pb={'42px'}
      w={'100%'}
      gap={'3%'}>
      <Flex 
        direction={'column'}
        align={'center'}
        mt={'-56px'}
        gap={'12px'}>
        <Image
          bg={'#EEE'}
          w={'150px'}
          h={'150px'}
          borderRadius={9999}
          border={'solid 2px #FFF'}
          borderColor={'brand'}
          objectFit={'cover'} />
        <AButton 
          variant={'outline'}
          color={'#FFF'}
          padding={'3px 12px'}
          fontSize={'.85em'}
          borderColor={'#FFF'}>
          Ubah Profil
        </AButton>
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
            Amalia Salimah Putri
          </Text>
          <Flex 
            direction={'column'}
            gap={'4px'}>
            <Text 
              fontSize={'.8em'}>
              Penempatan
            </Text>
            <Text
              fontSize={'.95em'}
              fontWeight={600}>
              Kantor Pusat, Jakarta Selatan, DKI Jakarta
            </Text>
          </Flex>
          <Flex 
            direction={'column'}
            gap={'4px'}>
            <Text
              fontSize={'.8em'}>
              Divisi &amp; Posisi
            </Text>
            <Text
              fontSize={'.95em'}
              fontWeight={600}>
              Client Service; Corporate Finance; Staff 
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </ContainerGradient>
  );
}
