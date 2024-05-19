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

interface LibrarySummary {
  kategori: string
  total: string
}

export default function(props: WithKaryawanPageProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [summary, setSummary] = useState<LibrarySummary[]>([]);
  const [list_data, setListData] = useState<IPagination<Library>>({
    total: 0,
    data: []
  });
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const total_page = Math.ceil(list_data.total / limit);
  const group_library = _.chunk(list_data.data, 4);

  async function getListData() {
    setLoading(true);
    try {
      setListData((await axios.get('/library', {
        params: {
          limit,
          offset: page * limit
        }
      })).data);
      setSummary((await axios.get('/summary-library')).data);
    } catch (err: any) {
      alert(err.response.data.toString());
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getListData();
  }, [page, limit]);

  return (
    <TemplateAuth
      karyawan={props.karyawan}
      title={'E-Library'}
      noSidebar>
      <Flex 
        p={'0 4%'}
        direction={'column'}
        gap={'24px'}>
        <Flex
          w={'100%'}
          h={'350px'}
          borderRadius={24}
          align={'center'}
          position={'relative'}>
          <Image 
            zIndex={1}
            borderRadius={24}
            src={'/bg-library.png'}
            w={'100%'}
            h={'100%'}
            objectFit={'cover'}
            position={'absolute'}
            top={0}
            left={0} />
          <Box 
            zIndex={1}
            w={'100%'}
            h={'100%'}
            borderRadius={24}
            objectFit={'cover'}
            position={'absolute'}
            bg={'#000A'}
            top={0}
            left={0} />
          <Image
            zIndex={2}
            src={'https://www.terampil.com/static/media/logo-terampil.0d80083e.png'}
            w={'300px'}
            h={'150px'}
            m={'24px 7%'}
            objectFit={'contain'} />
          <Flex
            zIndex={2}
            direction={'column'}
            color={'#FFF'}>
            <Text
              fontSize={'48px'}
              fontWeight={700}>
              E-Library
            </Text>
            <Text
              fontSize={'14px'}
              fontWeight={400}>
              Kumpulan materi untuk mu.
            </Text>
            <Flex
              mt={'70px'}
              gap={'24px'}>
              <Flex
                gap={'8px'}
                align={'flex-end'}>
                <Text
                  fontSize={'14px'}
                  fontWeight={400}>
                  Modul Training
                </Text>
                <Text
                  mb={'-3px'}
                  fontSize={'20px'}
                  fontWeight={700}>
                  0
                </Text>
              </Flex>
              <Flex
                gap={'8px'}
                align={'flex-end'}>
                <Text
                  fontSize={'14px'}
                  fontWeight={400}>
                  Modul Training
                </Text>
                <Text
                  mb={'-3px'}
                  fontSize={'20px'}
                  fontWeight={700}>
                  0
                </Text>
              </Flex>
              <Flex
                gap={'8px'}
                align={'flex-end'}>
                <Text
                  fontSize={'14px'}
                  fontWeight={400}>
                  Modul Training
                </Text>
                <Text
                  mb={'-3px'}
                  fontSize={'20px'}
                  fontWeight={700}>
                  0
                </Text>
              </Flex>
              <Flex
                gap={'8px'}
                align={'flex-end'}>
                <Text
                  fontSize={'14px'}
                  fontWeight={400}>
                  Modul Training
                </Text>
                <Text
                  mb={'-3px'}
                  fontSize={'20px'}
                  fontWeight={700}>
                  0
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Text
          fontSize={'20px'}
          fontWeight={600}>
          Kategori
        </Text>
        <GroupTrainingGrid data={summary.map((libsum: LibrarySummary) => ({
          label: libsum.kategori,
          count: parseInt(libsum.total),
          image: 'https://ekrutassets.s3.ap-southeast-1.amazonaws.com/blogs/images/000/001/440/original/brand-marketing-adalah_1-EKRUT.jpg'
        }))} />
        <Text
          fontSize={'20px'}
          fontWeight={600}>
          E-Library
        </Text>
        <TableAction />
        <Flex
          direction={'column'}>
          {
            group_library.map((list_lib: Library[], i: number) => (
              <Flex
                key={i}
                gap={'24px'}>
                {
                  list_lib.map((lib: Library, j: number) => (
                    <ItemElibrary
                      onClick={() => {
                        window.location.href = `/main/e-library/${lib.id}`
                      }}
                      data={lib} 
                      key={`${i}-${j}`} />
                  ))
                }
              </Flex>
            ))
          }
        </Flex>
        <br/>
      </Flex>
    </TemplateAuth>
  );
}
