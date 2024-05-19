import { AButton } from '@/components/button/AButton';
import YearPicker from '@/components/date-picker/YearPicker';
import { DetailNavigation } from '@/components/detail-navigation/DetailNavigation';
import { ModalContentUpdateOKR } from '@/components/modal/ModalContentUpdateOKR';
import { ModalInfo, OnModalReady } from '@/components/modal/ModalInfo';
import { ObjectiveKeyResult } from '@/components/objective-key-result/ObjectiveKeyResult';
import { OKRKeyResultProgressMonthly } from '@/components/objective-key-result/OKRKeyResultProgressMonthly';
import { TemplateAuth } from '@/template-auth';
import { getMonthsToNowFrom } from '@/util';
import { Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { OKR } from 'data-design/src/entity/OKR.entity';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getServerSideProps, WithKaryawanPageProps } from '../../../../cookies.util';
export { getServerSideProps };

export default function(props: WithKaryawanPageProps) {
  const router = useRouter();
  const { id } = router.query;
  const [okr, setOKR] = useState<OKR>();
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const total_page = Math.ceil(10 / limit);
  const [loading, setLoading] = useState<boolean>(false);
  const [loading_submit, setLoadingSubmit] = useState<boolean>(false);
  const list_month = getMonthsToNowFrom(okr?.jadwal_mulai ?? new Date());
  const [modal_control, setModalControl] = useState<OnModalReady>();

  async function init() {
    setLoading(true);
    try {
      setOKR((await axios.get(`/okr/${id}`)).data);
    } catch (err: any) {
      alert(err.response.data.toString());
    } finally {
      setLoading(false);
    }
  }

  async function updatePencapaian(pencapaian: number, evidence: string) {
    setLoadingSubmit(true);
    try {
      await axios.post(`/okr/${id}/update-pencapaian`, {
        pencapaian, evidence
      });
      modal_control?.close();
      init();
    } catch (err: any) {
      alert(err.response.data.toString());
    } finally {
      setLoadingSubmit(false);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <TemplateAuth
      karyawan={props.karyawan}
      title={'Dashboard'}
      noSidebar>
      <Flex 
        p={'0 4%'}
        direction={'column'}
        gap={'24px'}>
        <DetailNavigation
          onBack={() => window.history.back()}
          title={'Review Progress OKRs Karyawan'} />
        <Flex
          justify={'space-between'}>
          <Flex direction={'column'}>
            <Text 
              color={'#626262'}
              fontSize={'.8em'}>
              Objective
            </Text>
            <Text
              fontWeight={600}
              color={'#373737'}>
              {/* { okr?.objektif } */}
            </Text>
            <Text 
              mt={'12px'}
              color={'#626262'}
              fontSize={'.8em'}>
              Key Result
            </Text>
            <Text
              fontWeight={600}
              color={'#373737'}>
              { okr?.judul }
            </Text>
          </Flex>
          <ModalInfo
            mdWidth={600}
            title={'Update OKRs'}
            setOnModalReady={setModalControl}
            trigger={
              <AButton>
                Tambah Pencapaian
              </AButton>
            }>
            <ModalContentUpdateOKR
              loading={loading_submit}
              onSubmit={updatePencapaian} />
          </ModalInfo>
        </Flex>
        <Flex
          bg={'#E5E5E5'}>
          <Text 
            flex={1}
            p={'12px 16px'}
            fontSize={'.8em'}
            fontWeight={700}>
            Periode Update
          </Text>
          <Text 
            flex={1}
            p={'12px 16px'}
            fontSize={'.8em'}
            fontWeight={700}>
            Jumlah Update
          </Text>
          <Text 
            flex={1}
            p={'12px 16px'}
            fontSize={'.8em'}
            fontWeight={700}>
            Target per Periode
          </Text>
          <Text 
            flex={1}
            p={'12px 16px'}
            fontSize={'.8em'}
            fontWeight={700}>
            Pencapaian
          </Text>
          <Text 
            flex={1}
            p={'12px 16px'}
            fontSize={'.8em'}
            fontWeight={700}>
            Hasil
          </Text>
          <Text 
            flex={1}
            p={'12px 16px'}
            fontSize={'.8em'}
            fontWeight={700}>
            Status
          </Text>
        </Flex>
        {
          list_month.reverse().map((date: Date, i: number) => (
            <OKRKeyResultProgressMonthly
              date={date}
              okr={okr!}
              key={i} />
          ))
        }
        <br/>
      </Flex>
    </TemplateAuth>
  );
}
