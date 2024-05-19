import { Flex, Text } from "@chakra-ui/react";
import { OKR } from "data-design/src/entity/OKR.entity";
import { PencapaianOKRKaryawan, StatusPencapaianOKR } from "data-design/src/entity/PencapaianOKRKaryawan.entity";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { AButton } from "../button/AButton";
import { ProgressValue } from "../progress-value/ProgressValue";
import { ThreeDotsImage } from "../three-dots-image/ThreeDotsImage";
import { KRSkillGap } from "./KRSkillGap";

interface OKRKeyResultProps {
  data: OKR
}

export function OKRKeyResult(props: OKRKeyResultProps) {
  const [is_open, setIsOpen] = useState<boolean>(false);
  const total_pencapaian = props.data.list_pencapaian.filter(a => a.status === StatusPencapaianOKR.Disetujui).reduce((acc: number, curr: PencapaianOKRKaryawan) => acc + curr.pencapaian, 0);
  const persen_pencapaian = props.data.target == 0 ? 0 : (100 * total_pencapaian / (props.data.target ?? 0)).toFixed(0);

  return (
    <Flex 
      w={'100%'}
      direction={'column'}
      gap={'12px'}>

      {/* DATA */}
      <Flex 
        w={'100%'}
        border={'solid 1px #FFF'}
        borderColor={'brand'}
        borderRadius={4}
        bg={'#FFF'}
        pt={'7px'}
        pb={'7px'}
        align={'center'}
        position={'relative'}>
        <Flex 
          p={'8px 18px'}
          flex={4}>
          <Text
            fontSize={'.8em'}>
            { props.data.judul }
          </Text>
        </Flex>
        <Flex 
          p={'8px 12px'}
          flex={1}>
          <Text
            fontSize={'.8em'}>
            { props.data.target } { props.data.satuan }
          </Text>
        </Flex>
        <Flex 
          p={'8px 12px'}
          flex={1}>
          <Text
            fontSize={'.8em'}>
            { props.data.periode }
          </Text>
        </Flex>
        <Flex 
          p={'8px 12px'}
          flex={1}>
          <Text
            fontSize={'.8em'}>
            { props.data.bobot }%
          </Text>
        </Flex>
        <Flex 
          p={'8px 12px'}
          flex={1}>
          <Text
            fontSize={'.8em'}>
            { total_pencapaian } { props.data.satuan }
          </Text>
        </Flex>
        <Flex 
          p={'8px 12px'}
          flex={2}
          align={'center'}
          gap={'24px'}>
          <Flex
            direction={'column'}
            w={'55%'}>
            <Flex
              justify={'space-between'}>
              <Text
                fontSize={'.75em'}>
                { persen_pencapaian }%
              </Text>
              <Text
                fontSize={'.75em'}>
                {/* Needs Work */}
              </Text>
            </Flex>
            <ProgressValue progress={+persen_pencapaian / 100} />
          </Flex>
          <AButton
            onClick={() => window.location.href = `okr-detail/${props.data.id}`}
            p={'4px 12px'}
            fontSize={'.7em'}
            h={'20px'}
            borderRadius={999}>
            Update
          </AButton>
        </Flex>
        <Flex
          position={'absolute'}
          left={0}
          top={'100%'}
          mt={is_open ? '8px' : '-12px'}
          ml={'18px'}>
          {/* <AButton
            bg={'brand'}
            _hover={{
              bg: 'brand'
            }}
            onClick={() => setIsOpen(!is_open)}
            p={0}
            pr={'16px'}
            pl={'16px'}
            h={'24px'}
            fontSize={'.7em'}
            borderRadius={999}
            color={'#C4C4C4'}>
            { is_open ? '-' : '+' } Skill Gap &amp; Rekomendasi
          </AButton> */}
        </Flex>
      </Flex>

      {/* SKILL GAP */}
      {/* <AnimateHeight
        duration={is_open ? 300 : 30}
        height={is_open ? 'auto' : 0}>
        <Flex 
          pl={'3%'}
          mt={is_open ? '26px' : 0}
          direction={'column'}
          gap={'12px'}>
          <KRSkillGap />
          <KRSkillGap />
        </Flex>
      </AnimateHeight> */}
    </Flex>
  );
}
