import { AButton } from '@/components/button/AButton';
import YearPicker from '@/components/date-picker/YearPicker';
import { DetailNavigation } from '@/components/detail-navigation/DetailNavigation';
import { ObjectiveKeyResult } from '@/components/objective-key-result/ObjectiveKeyResult';
import { EditPassword } from '@/components/profile-menu/EditPassword';
import { EditProfile, UpdateProfileData } from '@/components/profile-menu/EditProfile';
import { ProfileMenu } from '@/components/profile-menu/ProfileMenu';
import { TemplateAuth } from '@/template-auth';
import { Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getServerSideProps, WithKaryawanPageProps } from '../../../cookies.util';
export { getServerSideProps };

export default function(props: WithKaryawanPageProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [menu, setMenu] = useState<'profil' | 'password'>('profil');
  const [update_profile_data, setUpdateProfileData] = useState<UpdateProfileData>({
    foto: props.karyawan.foto,
    nik: props.karyawan.nik,
    nama: props.karyawan.nama,
    email: props.karyawan.email,
    nomor_hp: props.karyawan.nomor_hp ?? '',
    alamat: props.karyawan.alamat ?? '',
  });

  async function updateProfle() {
    setLoading(true);
    try {
      await axios.put('/profile', update_profile_data);
      router.reload();
    } catch (err: any) {
      alert(err.response.data.toString());
    } finally {
      setLoading(false);
    }
  }

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
        gap={'24px'}>
        <Flex
          flex={1}
          align={'flex-start'}>
          <Flex
            position={'sticky'}
            top={0}
            w={'100%'}>
            <ProfileMenu
              active={menu}
              options={[{
                label: 'Ubah Profil',
                key: 'profil'
              }, {
                label: 'Atur Kata Sandi',
                key: 'password'
              }]}
              onChange={setMenu} />
          </Flex>
        </Flex>
        <Flex
          flex={4}>
          { menu === 'profil' && <EditProfile 
            karyawan={props.karyawan}
            data={update_profile_data}
            onChange={setUpdateProfileData}
            onSubmit={updateProfle} /> }
          { menu === 'password' && <EditPassword /> }
        </Flex>
        <br/>
      </Flex>
    </TemplateAuth>
  );
}
