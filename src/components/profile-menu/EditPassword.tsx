import { Flex, Text } from "@chakra-ui/react";
import { AButton } from "../button/AButton";
import { XForm } from "../form/XForm";

interface EditPasswordProps {}

export function EditPassword(props: EditPasswordProps) {
  return (
    <Flex
      direction={'column'}
      w={'100%'}
      boxShadow={'0px 1px 14px rgba(0, 0, 0, .2)'}
      borderRadius={8}>
      <Flex
        direction={'column'}
        w={'100%'}
        p={'18px 24px'}
        gap={'24px'}>
        <Flex
          direction={'column'}
          gap={'4px'}>
          <Text
            fontWeight={700}>
            Kata Sandi
          </Text>
          <Text
            fontSize={'.85em'}
            color={'#626262'}>
            Kata sandi minimal 8 karakter, terdiri dari huruf kapital, huruf kecil, simbol dan angka.
          </Text>
        </Flex>
        <XForm
          gap={'15px'}
          forms={[{
            type: 'password',
            key: 'sandi_lama',
            label: 'Kata Sandi Lama',
            placeholder: 'Masukkan Kata Sandi Lama',
            value: '',
            containerStyle: {
              padding: 0
            },
            onChange(value) {
              //
            },
          }, {
            type: 'password',
            key: 'sandi_lama',
            label: 'Kata Sandi Baru',
            placeholder: 'Buat kata sandi baru',
            value: '',
            containerStyle: {
              padding: 0
            },
            onChange(value) {
              //
            },
          }, {
            type: 'password',
            key: 'sandi_lama',
            label: 'Konfirmasi Kata Sandi Baru',
            placeholder: 'Konfirmasi Kata Sandi Baru',
            value: '',
            containerStyle: {
              padding: 0
            },
            onChange(value) {
              //
            },
          }]} />
        <Flex
          alignSelf={'flex-end'}>
          <AButton
            variant={'outline'}>
            Simpan
          </AButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
