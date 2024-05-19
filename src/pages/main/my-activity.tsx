import { AButton } from '@/components/button/AButton';
import YearPicker from '@/components/date-picker/YearPicker';
import { DetailNavigation } from '@/components/detail-navigation/DetailNavigation';
import { ObjectiveKeyResult } from '@/components/objective-key-result/ObjectiveKeyResult';
import { TemplateAuth } from '@/template-auth';
import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getServerSideProps, WithKaryawanPageProps } from '../../../cookies.util';
export { getServerSideProps };

export default function(props: WithKaryawanPageProps) {
  async function init() {
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <TemplateAuth
      karyawan={props.karyawan}
      title={'My Activity'}
      noSidebar>
      <Flex 
        p={'0 4%'}
        direction={'column'}
        gap={'24px'}>
        <Text>
          Something went wrong
        </Text>
        <br/>
      </Flex>
    </TemplateAuth>
  );
}
