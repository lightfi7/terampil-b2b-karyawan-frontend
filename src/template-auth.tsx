import { Flex } from '@chakra-ui/react';
import { initAuthorizationToken, useTokenCookie } from 'cookies.util';
import { Karyawan } from 'data-design/src/entity/Karyawan.entity';
import { NavbarAuth } from './components/navbar/NavbarAuth';
import { Sidebar } from './components/sidebar/Sidebar';

interface TemplateAuthProps {
  children?: any
  karyawan: Karyawan
  title?: string
  noSidebar?: boolean
}

export function TemplateAuth(props: TemplateAuthProps) {
  const cookie = useTokenCookie();
  initAuthorizationToken(cookie.getToken());

  return (
    <Flex 
      direction={'row'}
      h={'100vh'}
      bg={'#FFF'}
      flex={1}
      gap={'12px'}>
      <Flex 
        flex={1}
        direction={'column'}
        bg={'#FFF'}
        w={0}>
        <NavbarAuth 
          karyawan={props.karyawan} />
        <Flex 
          direction={'column'}
          flex={1}
          overflow={'auto'}
          gap={'24px'}
          pt={'24px'}
          overflowY={'auto'}>
          { props.children }
          <br/>
        </Flex>
      </Flex>
    </Flex>
  );
}
