import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { OKR } from "data-design/src/entity/OKR.entity";
import { PencapaianOKRKaryawan, StatusPencapaianOKR } from "data-design/src/entity/PencapaianOKRKaryawan.entity";
import moment from "moment";
import { useState } from "react";
import { ModalContentFeedbackProgressOKR } from "../modal/ModalContentFeedbackProgressOKR";
import { ModalInfo, OnModalReady } from "../modal/ModalInfo";

interface KRProgressMonthlyDetailProps {
  okr: OKR
  date: Date
  data: PencapaianOKRKaryawan[]
}

export function KRProgressMonthlyDetail(props: KRProgressMonthlyDetailProps) {
  const [modal_control, setModalControl] = useState<OnModalReady>();

  return (
    <Flex
      boxShadow={'0px 1px 14px rgba(0, 0, 0, .1)'}
      borderRadius={4}
      w={'100%'}
      bg={'#FFF'}
      direction={'column'}
      fontSize={'.8em'}>
      <Flex
        p={'12px 16px'}
        direction={'column'}>
        <Text 
          fontWeight={600}
          color={'#373737'}>
          Detail Update Pencapain Anda pada bulan { moment(props.date).format('MMMM YYYY') }
        </Text>
      </Flex>
      <Flex 
        color={'#999999'}
        mb={'4px'}>
        <Text 
          flex={3}
          pl={'16px'}>
          Tanggal Upload
        </Text>
        <Text 
          flex={1}>
          Pencapaian
        </Text>
        <Text 
          flex={1}>
          Evidence
        </Text>
        <Text 
          flex={1}>
          Status
        </Text>
      </Flex>
      {
        props.data.map((pencapaian: PencapaianOKRKaryawan) => (
          <Flex 
            key={pencapaian.id}
            direction={'column'}>
            <Box 
              w={'100%'}
              h={'1px'}
              bg={'#E5E5E5'} />
            <Flex 
              color={'#202020'}
              pt={'10px'}
              pb={'10px'}
              align={'center'}>
              <Text 
                flex={3}
                pl={'16px'}>
                { moment(pencapaian.tanggal).format('DD MMMM YYYY') }
              </Text>
              <Text 
                flex={1}>
                { pencapaian.pencapaian } { props.okr.satuan }
              </Text>
              <Text 
                flex={1}>
                <Link 
                  color={'blue'}
                  href={ pencapaian.bukti }>
                  Evidence
                </Link>
              </Text>
              <Flex
                flex={1}>
                <Text flex={1}>
                  { pencapaian.status }
                </Text>
                <Flex flex={1}>
                  { pencapaian.status !== StatusPencapaianOKR.Pending && 
                    <ModalInfo
                      mdWidth={600}
                      title={props.okr.judul}
                      setOnModalReady={setModalControl}
                      trigger={<Link
                        color={'brand'}
                        fontWeight={600}>
                        Feedback
                      </Link>
                    }>
                      <ModalContentFeedbackProgressOKR
                        atasan={props.okr?.karyawan?.induk?.nama}
                        tanggal={pencapaian.updated_at ?? new Date()}
                        feedback={pencapaian.feedback ?? ''} />
                    </ModalInfo> }
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))
      }
    </Flex>
  );
}
