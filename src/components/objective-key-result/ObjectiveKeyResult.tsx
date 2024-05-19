import { Flex, Text } from "@chakra-ui/react";
import { Objective } from "data-design/src/entity/Objective.entity";
import { OKR } from "data-design/src/entity/OKR.entity";
import { PencapaianOKRKaryawan, StatusPencapaianOKR } from "data-design/src/entity/PencapaianOKRKaryawan.entity";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { OKRKeyResult } from "./OKRKeyResult";
import { OKRTitle } from "./OKRTitle";

interface ObjectiveKeyResultProps {
  title?: string
  data: OKR[]
  objektif?: Objective
}

export function ObjectiveKeyResult(props: ObjectiveKeyResultProps) {
  const [is_open, setIsOpen] = useState<boolean>(false);
  const list_pencapaian = props.data.map((okr: OKR) => {
    return okr.target == 0 ? 0 : Math.min(
      okr.list_pencapaian.filter(a => a.status === StatusPencapaianOKR.Disetujui).reduce((acc: number, p: PencapaianOKRKaryawan) => acc + +p.pencapaian, 0) / okr.target,
      1
    ) * okr.bobot / 100;
  });
  const pencapaian = 100 * list_pencapaian.reduce((acc: number, curr: number) => acc + curr, 0);

  return (
    <Flex
      flex={1}
      direction={'column'}
      gap={'8px'}>
      <OKRTitle 
        pencapaian={pencapaian ?? 0}
        title={props.objektif?.judul}
        subtitle={props.objektif?.deskripsi}
        bobot={props.objektif?.bobot}
        onClick={() => setIsOpen(!is_open)}
        open={is_open} />
      <AnimateHeight
        duration={300}
        height={is_open ? 'auto' : 0}>
        <Flex 
          pl={'5%'}
          direction={'column'}
          gap={'12px'}
          mb={'12px'}>

          {/* HEADER */}
          <Flex 
            w={'100%'}
            bg={'#FFF'}
            boxShadow={'0px 1px 8px rgba(0, 0, 0, .1)'}>
            <Text 
              p={'8px 18px'}
              flex={4}
              fontWeight={600}
              fontSize={'.8em'}>
              Key Result
            </Text>
            <Text 
              p={'8px 12px'}
              flex={1}
              fontWeight={600}
              fontSize={'.8em'}>
              Target
            </Text>
            <Text 
              p={'8px 12px'}
              flex={1}
              fontWeight={600}
              fontSize={'.8em'}>
              Periode
            </Text>
            <Text 
              p={'8px 12px'}
              flex={1}
              fontWeight={600}
              fontSize={'.8em'}>
              Bobot (100%)
            </Text>
            <Text 
              p={'8px 12px'}
              flex={1}
              fontWeight={600}
              fontSize={'.8em'}>
              Pencapaian
            </Text>
            <Text 
              p={'8px 12px'}
              flex={2}
              fontWeight={600}
              fontSize={'.8em'}>
              Hasil
            </Text>
          </Flex>
          {
            props.data.map((okr: OKR) => (
              <OKRKeyResult
                key={okr.id}
                data={okr} />
            ))
          }
        </Flex>
      </AnimateHeight>
    </Flex>
  );
}
