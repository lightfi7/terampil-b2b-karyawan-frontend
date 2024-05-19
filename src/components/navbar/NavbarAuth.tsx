import { Flex, Image, Input, InputGroup, InputLeftElement, Link, Skeleton, Text } from "@chakra-ui/react";
import axios from "axios";
import { useTokenCookie } from "cookies.util";
import { Karyawan } from "data-design/src/entity/Karyawan.entity";
import { useEffect, useState } from "react";
import { currencyFormatter } from "../input-number";
import { ProfileFloatingCard } from "../profile-floating-card/ProfileFloatingCard";

interface NavbarAuthProps {
  karyawan: Karyawan
}

export function NavbarAuth(props: NavbarAuthProps) {
  const cookie = useTokenCookie();
  const [show_floating_profile, setShowFloatingProfile] = useState<boolean>(false);

  function logout() {
    cookie.removeToken();
    location.href = '/';
  }

  return (
    <Flex 
      zIndex={999}
      w={'100%'}
      bg={'#FFF'}
      boxShadow={'0px 1px 12px rgba(0, 0, 0, .05)'}
      alignItems={'center'}
      justify={'space-between'}
      p={'12px 5%'}
      gap={'48px'}>
      <Link
        href={'/main'}>
        <Image
          w={'auto'}
          h={'5em'}
          m={'-17px 0'}
          objectFit={'contain'}
          src={'/icons/light/logo.png'} />
      </Link>
      <Flex
        align={'center'}
        gap={'24px'}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Image 
              src={'/icons/light/icon-search-grey.png'}
              w={'18px'}
              h={'18px'}
              objectFit={'contain'} />
            }
          />
          <Input 
            placeholder={'Cari training'} 
            fontSize={'.8em'}
            bg={'#E5E5E5'}
            w={'200px'}
            border={'none'}
            value={''} /> 
        </InputGroup>
        <Link 
          whiteSpace={'nowrap'}
          fontSize={'.9em'}
          href={'/main/e-library'}>
          E-Library
        </Link>
        <Link 
          whiteSpace={'nowrap'}
          fontSize={'.9em'}
          href={'/main/my-activity'}>
          Aktivitas Saya
        </Link>
        <Link 
          whiteSpace={'nowrap'}
          fontSize={'.9em'}
          href={'/main/my-training'}>
          Training Saya
        </Link>
      </Flex>
      <Flex 
        justify={'flex-end'}
        align={'center'}
        w={'100%'}
        gap={'24px'}>
        <Image 
          h={'24px'}
          w={'24px'}
          src={'/icons/light/icon-notif-black.png'}
          objectFit={'cover'} />
        <Flex 
          align={'center'}
          gap={'12px'}
          cursor={'pointer'}
          position={'relative'}
          onMouseOver={() => setShowFloatingProfile(true)}
          onMouseLeave={() => setShowFloatingProfile(false)}>
          <Image 
            h={'36px'}
            w={'36px'}
            borderRadius={999}
            bg={'#EEE'}
            src={props.karyawan.foto}
            objectFit={'cover'} />
          { show_floating_profile && <Flex 
            position={'absolute'}
            top={'100%'}
            w={'180px'}
            right={'-36px'}
            pt={'12px'}>
            <ProfileFloatingCard onLogout={logout} />
          </Flex> }
        </Flex>
      </Flex>
    </Flex>
  );
}
