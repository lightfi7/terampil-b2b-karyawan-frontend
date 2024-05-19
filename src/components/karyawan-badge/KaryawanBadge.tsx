import { Flex, Image, Text } from "@chakra-ui/react";
import { Karyawan } from "data-design/src/entity/Karyawan.entity";
import { AButton } from "../button/AButton";
import { ContainerGradient } from "../container-gradient/ContainerGradient";
import MonthPicker from "../date-picker/MonthPicker";

interface KaryawanBadgeProps {
  data: Karyawan
}

export function KaryawanBadge(props: KaryawanBadgeProps) {
  return (
    <ContainerGradient 
      mt={'48px'}
      p={'36px 4%'}
      pb={'42px'}
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
          src={props.data.foto}
          borderRadius={9999}
          border={'solid 2px #FFF'}
          borderColor={'brand'}
          objectFit={'cover'} />
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
            { props.data.nama }
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
              { props.data.organisasi_vertikal }
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
              { props.data.organisasi_horizontal }; { props.data.posisi }
            </Text>
          </Flex>
        </Flex>
        <Flex 
          flex={1}
          direction={'column'}
          alignSelf={'center'}
          gap={'24px'}>
          <Flex
            direction={'row'}
            align={'center'}
            gap={'12px'}>
            <Flex>
              <MonthPicker 
                setValue={() => {}} />
            </Flex>
            <AButton 
              bg={'#FFF !important'}
              color={'brand'}
              borderRadius={9999}
              onClick={() => window.location.href = '/main/profile'}>
              Ubah Profil
            </AButton>
          </Flex>
        </Flex>
      </Flex>
    </ContainerGradient>
  );
}
