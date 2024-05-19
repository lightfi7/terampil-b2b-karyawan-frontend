import { AButton } from "@/components/button/AButton";
import { XInputPassword } from "@/components/form/input/XInputPassword";
import { XInputText } from "@/components/form/input/XInputText";
import { XForm } from "@/components/form/XForm";
import { Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useTokenCookie } from "cookies.util";
import { useState } from "react";

interface LoginPageProps {}

export namespace LoginDTO {
  export interface LoginRequestData {
    email: string
    password: string
  }
}

export default function LoginPage() {
  const cookie = useTokenCookie();
  const [login_data, setLoginData] = useState<LoginDTO.LoginRequestData>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  async function login() {
    setLoading(true);
    try {
      const jwt: string = (await axios.post('/login', login_data)).data;
      cookie.setToken(jwt);
      window.location.href = '/main';
    } catch (err: any) {
      alert(err.response.data.toString());
    } finally {
      setLoading(false);
    }
  }

  return (
    <Flex 
      w={'100%'}
      minH={'100vh'}
      align={'center'}
      direction={'column'}>
      <Flex p={'4% 0'}>
        <Image
          w={'auto'}
          h={'2em'}
          ml={'3%'}
          mt={'1.5px'}
          objectFit={'contain'}
          src={'/icons/light/logo.png'} />
      </Flex>
      <Flex
        align={'center'}>
        <Flex 
          flex={3}
          direction={'column'}
          align={'center'}>
          <Image 
            w={'60%'}
            h={'60%'}
            objectFit={'contain'}
            src={'/icons/light/ilustration-karyawan.png'} />
          <Text
            textAlign={'center'}
            fontWeight={700}
            fontSize={'1.1em'}>
            Welcome to Terampil Business
          </Text>
          <Text
            fontSize={'.9em'}
            textAlign={'center'}
            w={'50%'}>
            Nikmati pengalaman belajar tanpa batas langsung dengan pakar profesional, dan dapatkan sertifikat.
          </Text>
        </Flex>
        <Flex 
          flex={2}
          direction={'column'}>
          <Flex 
            p={'36px'}
            boxShadow={'0px 1px 12px rgba(0, 0, 0, .1)'}
            borderRadius={12}
            h={'auto'}
            direction={'column'}
            w={'80%'}
            gap={'12px'}>
            <Text 
              alignSelf={'center'}
              fontWeight={700}
              fontSize={'1.1em'}>
              Masuk
            </Text>
            <XInputText
              containerStyle={{ padding: 0 }} 
              key={"a"}
              placeholder={'Email'}
              value={login_data.email}
              onKeyDown={(e: any) => {
                if (e.key === 'Enter') {
                  login();
                }
              }}
              onChange={(email: string) => {
                setLoginData({
                  ...login_data,
                  email
                });
              }} />
            <XInputPassword 
              containerStyle={{ padding: 0 }} 
              key={"a"}
              placeholder={'Password'} 
              type={"password"}
              value={login_data.password}
              onKeyDown={(e: any) => {
                if (e.key === 'Enter') {
                  login();
                }
              }}
              onChange={(password: string) => {
                setLoginData({
                  ...login_data,
                  password
                });
              }} />
            <AButton
              onClick={login}>
              Lanjutkan
            </AButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
