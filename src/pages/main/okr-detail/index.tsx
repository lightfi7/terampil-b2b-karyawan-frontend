import { AButton } from '@/components/button/AButton';
import YearPicker from '@/components/date-picker/YearPicker';
import { DetailNavigation } from '@/components/detail-navigation/DetailNavigation';
import { ObjectiveKeyResult } from '@/components/objective-key-result/ObjectiveKeyResult';
import { TemplateAuth } from '@/template-auth';
import { Flex, list, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Objective } from 'data-design/src/entity/Objective.entity';
import { OKR } from 'data-design/src/entity/OKR.entity';
import { PencapaianOKRKaryawan, StatusPencapaianOKR } from 'data-design/src/entity/PencapaianOKRKaryawan.entity';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { getServerSideProps, WithKaryawanPageProps } from '../../../../cookies.util';
export { getServerSideProps };

export default function(props: WithKaryawanPageProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [list_objektif, setListObjektif] = useState<Objective[]>([]);
  const pencapaian_okr = list_objektif.map((objektif: Objective) => {
    const list_okr: OKR[] = objektif.list_okr;
    const list_pencapaian = list_okr.map((okr: OKR) => {
      return okr.target == 0 ? 0 : Math.min(
        okr.list_pencapaian.filter(a => a.status === StatusPencapaianOKR.Disetujui).reduce((acc: number, p: PencapaianOKRKaryawan) => acc + +p.pencapaian, 0) / okr.target,
        1
      ) * okr.bobot / 100;
    });
    const total_pencapaian = list_pencapaian.reduce((acc: number, curr: number) => acc + curr, 0);
    return total_pencapaian * objektif.bobot / 100;
  });
  const pencapaian_global = pencapaian_okr.reduce((acc: number, curr: number) => acc + curr, 0) * 100;

  async function init() {
    setLoading(true);
    try {
      setListObjektif((await axios.get('/okr')).data);
    } catch (err: any) {
      alert(err.response.data.toString());
    } finally {
      setLoading(false);
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
          title={'Detail OKRs'} />
        <Flex 
          justify={'space-between'}
          align={'center'}>
          <Flex
            align={'center'}
            gap={'12px'}>
            <YearPicker
              value={new Date()}
              setValue={() => {}} />
          </Flex>
          <Flex
            bg={'brand'}
            color={'#FFF'}
            padding={'8px 40px'}
            borderRadius={'5px'}
            fontWeight={600}
            gap={'48px'}
            align={'center'}>
            <Text>
              Hasil OKRs
            </Text>
            <Text 
              fontSize={'1.5em'}>
              { pencapaian_global.toFixed(2) }%
            </Text>
          </Flex>
        </Flex>
        <Flex 
          direction={'column'}
          gap={'12px'}>
          {
            list_objektif.map((objektif: Objective) => (
              <ObjectiveKeyResult 
                data={objektif.list_okr}
                title={objektif.judul}
                objektif={objektif}
                key={objektif.id} />
            ))
          }
        </Flex>
        <br/>
      </Flex>
    </TemplateAuth>
  );
}
