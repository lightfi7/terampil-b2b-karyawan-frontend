import { ContainerGradient } from '@/components/container-gradient/ContainerGradient';
import { DashboardChartOKRCard } from '@/components/dashboard-chart-okr-card/DashboardChartOKRCard';
import { DashboardOKRCard } from '@/components/dashboard-okr-card/DashboardOKRCard';
import { DashboardProgressCard } from '@/components/dashboard-progress-card/DashboardProgressCard';
import YearPicker from '@/components/date-picker/YearPicker';
import { DetailNavigation } from '@/components/detail-navigation/DetailNavigation';
import { XInputSelect } from '@/components/form/input/XInputSelect';
import { GeneralContainer } from '@/components/general-container/GeneralContainer';
import { KaryawanBadge } from '@/components/karyawan-badge/KaryawanBadge';
import { Pagination } from '@/components/pagination/Pagination';
import { TableAction } from '@/components/table-action/TableAction';
import { XTable } from '@/components/table/XTable';
import TerampilBarChart from '@/components/terampil-bar-chart/TerampilBarChart';
import { TemplateAuth } from '@/template-auth';
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import axios from 'axios';
import { getServerSideProps, WithKaryawanPageProps } from 'cookies.util';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export { getServerSideProps };

interface Summary {
  okr: {
    total: number
    total_diatas_80_persen: number
    total_61_sampai_79_persen: number
    total_dibawah_60_persen: number
  }
  development_progress: {
    total: number
    total_diatas_80_persen: number
    total_61_sampai_79_persen: number
    total_dibawah_60_persen: number
  }
}

export default function(props: WithKaryawanPageProps) {
  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const total_page = Math.ceil(10 / limit);
  const [summary, setSummary] = useState<Summary>();
  const total_okr_selesai = 100 * (summary?.okr.total_diatas_80_persen ?? 0) / (summary?.okr.total ?? 0);

  async function init() {
    try {
      setSummary((await axios.get('/summary')).data);
    } catch (err: any) {
      alert(err.response.data.toString());
    } finally {
      // 
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
        p={'0 5%'}
        direction={'column'}
        gap={'48px'}>
        <Flex 
          direction={'column'}
          pt={'24px'}>
          <Text
            fontSize={'1.3em'}
            fontWeight={600}
            color={'brand'}>
            Selamat Pagi, { props.karyawan.nama }
          </Text>
          <KaryawanBadge
            data={props.karyawan} />
        </Flex>
        <Flex gap={'24px'}>
          <DashboardProgressCard
            onDetail={() => window.location.href = `/main/okr-detail`}
            title={'OKRs'}
            centerValue={`${ total_okr_selesai.toFixed(0) }%`}
            data={[{
              name: 'Selesai',
              color: '#29C56A',
              value: total_okr_selesai
            }, {
              name: 'Belum',
              color: '#E5E5E5',
              value: 100 - total_okr_selesai
            }]}
            progress={[{
              color: '#29C56A',
              label: 'Di atas 80%',
              progress: (summary?.okr.total_diatas_80_persen ?? 0) / (summary?.okr.total ?? 0),
              value: `${summary?.okr.total_diatas_80_persen ?? 0}`
            }, {
              color: '#F18F01',
              label: '61 - 79%',
              progress: (summary?.okr.total_61_sampai_79_persen ?? 0) / (summary?.okr.total ?? 0),
              value: `${summary?.okr.total_61_sampai_79_persen ?? 0}`
            }, {
              color: '#E84F52',
              label: 'Di bawah 60%',
              progress: (summary?.okr.total_dibawah_60_persen ?? 0) / (summary?.okr.total ?? 0),
              value: `${summary?.okr.total_dibawah_60_persen ?? 0}`
            }]}
            rightItem={
              <Flex 
                gap={'4px'}
                direction={'column'}
                alignSelf={'center'}
                color={'#626262'}>
                {/* <Text
                  fontSize={'.8em'}>
                  OKRs Tahun 2021
                </Text>
                <Text 
                  color={'brand'}
                  fontWeight={700}
                  fontSize={'1em'}>
                  Top Performer
                </Text> */}
                <Text
                  mt={'12px'}
                  fontSize={'.8em'}>
                  Total OKR
                </Text>
                <Text
                  color={'#373737'}
                  fontWeight={700}
                  fontSize={'1em'}>
                  { summary?.okr.total ?? 0 }
                </Text>
              </Flex>
            }
            centerItem={
              <Flex
                gap={'4px'}
                color={'#626262'}
                direction={'column'}
                fontSize={'.8em'}
                h={'5em'}>
                <Text
                  fontWeight={700}
                  color={'#373737'}>
                  Progress OKR
                </Text>
                <Text>
                  Progress OKR dalam tahun berjalan
                </Text>
                <Text>
                  &nbsp;
                </Text>
              </Flex>
            } />
          <DashboardProgressCard
            title={`${props.karyawan.nama.split(' ')[0]} Development Plan Progress`}
            onDetail={() => window.location.href = `/main/development-progress`}
            centerValue={'0%'}
            data={[{
              name: 'Selesai',
              color: '#29C56A',
              value: 0
            }, {
              name: 'Belum',
              color: '#F18F01',
              value: 0
            }]}
            progress={[{
              color: '#29C56A',
              label: 'Di atas 80%',
              progress: 0,
              value: '0'
            }, {
              color: '#F18F01',
              label: '61 - 79%',
              progress: 0,
              value: '0',
            }, {
              color: '#E84F52',
              label: 'Di bawah 60%',
              progress: 0,
              value: '0',
            }]}
            rightItem={
              <Flex 
                direction={'column'}
                alignSelf={'center'}
                color={'#373737'}
                gap={'12px'}>
                <Flex 
                  gap={'12px'}>
                  <Box 
                    bg={'#29C56A'}
                    w={'10px'}
                    h={'10px'}
                    mt={'5px'}
                    borderRadius={999} />
                  <Flex 
                    direction={'column'}>
                    <Text
                      fontSize={'.8em'}>
                      Selesai
                    </Text>
                    <Text
                      fontSize={'1.2em'}>
                      0 Dev
                    </Text>
                  </Flex>
                </Flex>
                <Flex 
                  gap={'12px'}>
                  <Box 
                    bg={'#F18F01'}
                    w={'10px'}
                    h={'10px'}
                    mt={'5px'}
                    borderRadius={999} />
                  <Flex 
                    direction={'column'}>
                    <Text
                      fontSize={'.8em'}>
                      On-Progress
                    </Text>
                    <Text
                      fontSize={'1.2em'}>
                      0 Dev
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            }
            centerItem={
              <Flex
                gap={'4px'}
                color={'#626262'}
                direction={'column'}
                fontSize={'.8em'}
                h={'5em'}>
                <Text
                  fontWeight={700}
                  color={'#373737'}>
                  Development
                </Text>
                <Text>
                  Total Development: <b>0</b>
                </Text>
              </Flex>
            } />
        </Flex>
        <br/>
      </Flex>
      <ContainerGradient 
        color={'#000'}
        borderRadius={0}
        p={'32px 5%'}
        direction={'column'}
        gap={'16px'}>
        <Text
          color={'#FFF'}
          fontSize={'1.3em'}
          fontWeight={600}>
          Individual Development Plan
        </Text>
        <Flex 
          direction={'column'}>
          <Text
            color={'#FFF'}
            fontSize={'1.1em'}
            fontWeight={600}>
            Training Rekomendasi
          </Text>
          <Text
            color={'#FFF'}
            fontSize={'.9em'}>
            Berikut adalah training yang direkomendasikan berdasarkan hasil OKRs kamu di periode sekarang. Silakan mengikuti training rekomendasi untuk meningkatkan nilai OKRs kamu di periode selanjutnya.
          </Text>
        </Flex>
        <GeneralContainer>
          <XTable data={{
            header: [{
              label: 'Kompetensi',
              key: 'kompetensi',
              type: 'string',
            }, {
              label: 'Judul Training',
              key: 'judul_training',
              type: 'string',
            }, {
              label: 'Kategori',
              key: 'kategori',
              type: 'string',
            }, {
              label: 'Status',
              key: 'status',
              type: 'string',
            }],
            data: [{
              kompetensi: 'Kemampuan Berkomunikasi',
              judul_training: 'Practical Lesson of Personal Branding',
              kategori: 'Modul Training',
              status: 'Belum Diikuti'
            }, {
              kompetensi: 'Kemampuan Berkomunikasi',
              judul_training: 'Practical Lesson of Personal Branding',
              kategori: 'Modul Training',
              status: 'Belum Diikuti'
            }, {
              kompetensi: 'Kemampuan Berkomunikasi',
              judul_training: 'Practical Lesson of Personal Branding',
              kategori: 'Modul Training',
              status: 'Belum Diikuti'
            }, {
              kompetensi: 'Kemampuan Berkomunikasi',
              judul_training: 'Practical Lesson of Personal Branding',
              kategori: 'Modul Training',
              status: 'Belum Diikuti'
            }, {
              kompetensi: 'Kemampuan Berkomunikasi',
              judul_training: 'Practical Lesson of Personal Branding',
              kategori: 'Modul Training',
              status: 'Belum Diikuti'
            }]
          }} />
        </GeneralContainer>
      </ContainerGradient>
    </TemplateAuth>
  );
}
