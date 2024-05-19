import { AButton } from '@/components/button/AButton';
import YearPicker from '@/components/date-picker/YearPicker';
import { DetailNavigation } from '@/components/detail-navigation/DetailNavigation';
import { GroupTrainingGrid } from '@/components/group-training-grid/GroupTrainingGrid';
import { ItemElibrary } from '@/components/item-elibrary/ItemElibrary';
import { ObjectiveKeyResult } from '@/components/objective-key-result/ObjectiveKeyResult';
import { TableAction } from '@/components/table-action/TableAction';
import { TemplateAuth } from '@/template-auth';
import { IPagination } from '@/util';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Library } from 'data-design/src/entity/Library.entity';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { getServerSideProps, WithKaryawanPageProps } from '../../../../cookies.util';
export { getServerSideProps };

export default function(props: WithKaryawanPageProps) {
  return (
    <TemplateAuth
      karyawan={props.karyawan}
      title={'E-Library'}
      noSidebar>
      <Flex 
        p={'0 4%'}
        direction={'column'}
        gap={'24px'}>
        <Text
          fontSize={'20px'}
          fontWeight={600}>
          Something went wrong
        </Text>
        <br/>
      </Flex>
    </TemplateAuth>
  );
}
