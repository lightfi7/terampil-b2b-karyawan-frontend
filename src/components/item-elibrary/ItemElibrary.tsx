import { Flex, Image, Text } from "@chakra-ui/react";
import { Library } from "data-design/src/entity/Library.entity";

interface ItemElibraryProps {
  data: Library
  onClick?(): void
}

export function ItemElibrary(props: ItemElibraryProps) {
  return (
    <Flex
      cursor={'pointer'}
      onClick={props.onClick}
      direction={'column'}
      gap={'8px'}
      flex={1}
      maxW={'calc(25% - 24px)'}>
      <Flex
        position={'relative'}
        borderRadius={12}
        overflow={'hidden'}>
        <Image
          src={props.data.foto_sampul}
          w={'100%'}
          h={'250px'}
          objectFit={'cover'} />
        <Flex
          left={0}
          top={'12px'}
          position={'absolute'}>
          <Text
            ml={'12px'}
            fontSize={'.75em'}
            bg={'#FFF'}
            color={'#141414'}
            fontWeight={600}
            boxShadow={'0px 1px 12px rgba(0, 0, 0, .05)'}
            p={'3px 9px'}
            borderRadius={4}>
            { props.data.jenis }
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction={'column'}
        gap={'2px'}>
        <Text
          color={'#707070'}
          fontSize={'.85em'}>
          { props.data.total_waktu } menit
        </Text>
        <Text
          fontWeight={600}>
          { props.data.judul }
        </Text>
        <Text
          color={'#707070'}
          fontSize={'.85em'}>
          { props.data.detail }
        </Text>
      </Flex>
    </Flex>
  );
}
