import { uploadFile } from "@/util";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Karyawan } from "data-design/src/entity/Karyawan.entity";
import { useState } from "react";
import { AButton } from "../button/AButton";
import { XForm } from "../form/XForm";
import { ProfilePictureEditor } from "./ProfilePictureEditor";

export interface UpdateProfileData {
  foto?: string
  nik: string
  nama: string
  email: string
  nomor_hp: string
  alamat: string
}

interface EditProfileProps {
  karyawan: Karyawan
  data: UpdateProfileData
  loading?: boolean
  onChange(data: UpdateProfileData): void
  onSubmit?(): void
}

export function EditProfile(props: EditProfileProps) {
  const [loading_upload, setLoadingUpload] = useState<boolean>(false);

  async function uploadPicture(file: any) {
    const url = await uploadFile(file, setLoadingUpload);
    if (props.onChange) {
      props.onChange({
        ...props.data,
        foto: url
      });
    }
  }

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
        <Text
          fontWeight={700}>
          Profil Saya
        </Text>
        <ProfilePictureEditor
          loading={loading_upload}
          value={props.data.foto}
          onFileChange={uploadPicture} />
        <XForm
          gap={'15px'}
          forms={[{
            type: 'text',
            key: 'nama',
            label: 'NIK',
            placeholder: 'NIK',
            required: true,
            value: props.data.nik,
            containerStyle: {
              padding: 0
            },
            onChange(nik: string) {
              props.onChange({
                ...props.data,
                nik
              });
            },
          }, {
            type: 'text',
            key: 'nama',
            label: 'Nama',
            placeholder: 'Nama',
            required: true,
            value: props.data.nama,
            containerStyle: {
              padding: 0
            },
            onChange(nama: string) {
              props.onChange({
                ...props.data,
                nama
              });
            },
          }, {
            type: 'text',
            key: 'email',
            label: 'Email',
            placeholder: 'Email',
            required: true,
            value: props.data.email,
            containerStyle: {
              padding: 0
            },
            onChange(email: string) {
              props.onChange({
                ...props.data,
                email
              });
            },
          }, {
            type: 'text',
            key: 'nomor_hp',
            label: 'Nomor HP',
            placeholder: 'Nomor HP',
            required: true,
            value: props.data.nomor_hp,
            containerStyle: {
              padding: 0
            },
            onChange(nomor_hp: string) {
              props.onChange({
                ...props.data,
                nomor_hp
              });
            },
          }, {
            type: 'textarea',
            key: 'alamat',
            label: 'Alamat',
            placeholder: 'Alamat',
            required: true,
            value: props.data.alamat,
            containerStyle: {
              padding: 0
            },
            onChange(alamat: string) {
              props.onChange({
                ...props.data,
                alamat
              });
            },
          }, {
            type: 'text',
            key: 'ov',
            label: 'Organisasi Vertikal',
            placeholder: 'Organisasi Vertikal',
            disabled: true,
            value: props.karyawan.organisasi_vertikal,
            containerStyle: {
              padding: 0
            },
          }, {
            type: 'text',
            key: 'oh',
            label: 'Organisasi Horizontal',
            placeholder: 'Organisasi Horizontal',
            disabled: true,
            value: props.karyawan.organisasi_horizontal,
            containerStyle: {
              padding: 0
            },
          }, {
            type: 'text',
            key: 'posisi',
            label: 'Posisi',
            placeholder: 'Posisi',
            disabled: true,
            value: props.karyawan.posisi,
            containerStyle: {
              padding: 0
            },
          }, {
            type: 'text',
            key: 'email',
            label: 'Atasan',
            placeholder: 'Atasan',
            disabled: true,
            value: props.karyawan.induk?.nama ?? '',
            containerStyle: {
              padding: 0
            }
          }]} />
        <Flex
          alignSelf={'flex-end'}>
          <AButton
            isLoading={props.loading}
            onClick={props.onSubmit}>
            Simpan
          </AButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
