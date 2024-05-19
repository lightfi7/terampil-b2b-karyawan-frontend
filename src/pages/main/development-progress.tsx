import { AButton } from '@/components/button/AButton';
import YearPicker from '@/components/date-picker/YearPicker';
import { DetailNavigation } from '@/components/detail-navigation/DetailNavigation';
import { KaryawanBadgeDP } from '@/components/karyawan-badge/KaryawanBadgeDP';
import { KaryawanBadgeSimple } from '@/components/karyawan-badge/KaryawanBadgeSimple';
import { ObjectiveKeyResult } from '@/components/objective-key-result/ObjectiveKeyResult';
import { TemplateAuth } from '@/template-auth';
import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getServerSideProps, WithKaryawanPageProps } from 'cookies.util';
export { getServerSideProps };

export default function(props: WithKaryawanPageProps) {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const total_page = Math.ceil(10 / limit);

  async function init() {
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
          title={'Detail Progress Development Plan'} />
        <Flex 
          gap={'24px'}
          w={'100%'}>
          <KaryawanBadgeSimple />
          <KaryawanBadgeDP />
        </Flex>
        <br/>
      </Flex>
    </TemplateAuth>
  );
}
