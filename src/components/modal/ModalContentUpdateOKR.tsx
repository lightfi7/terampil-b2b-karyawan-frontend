import { uploadFile } from "@/util";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AButton } from "../button/AButton";
import { XForm } from "../form/XForm";

interface ModalContentUpdateOKRProps {
  onSubmit?(pencapaian: number, evidence: string): void
  loading?: boolean
}

export function ModalContentUpdateOKR(props: ModalContentUpdateOKRProps) {
  const [pencapaian, setPencapaian] = useState<number>('' as any);
  const [evidence, setEvidence] = useState<string>('');
  const [loading_upload, setLoadingUpload] = useState<boolean>(false);

  function submit() {
    if (!props.onSubmit) {
      return;
    }

    props.onSubmit(pencapaian, evidence);
  }

  async function onFileUpdate(file: any) {
    const url = await uploadFile(file, setLoadingUpload);
    setEvidence(url ?? '');
  }

  return (
    <Flex
      direction={'column'}
      gap={'8px'}>
      <Text
        color={'#626262'}
        fontSize={'.9em'}>
        Silakan update OKRs Kamu secara rutin
      </Text>
      <XForm
        columnMode
        gap={'8px'}
        forms={[{
          label: 'Pencapaian OKRs',
          key: 'pencapaian',
          placeholder: 'Contoh: 1000',
          type: 'number',
          value: pencapaian,
          onChange: setPencapaian
        }, {
          label: 'Tambah Evidence',
          key: 'evidence',
          type: 'file',
          onChange: onFileUpdate,
          loading: loading_upload,
          value: evidence
        }]} />
      <Text
        color={'#373737'}
        fontSize={'.9em'}
        mt={'8px'}>
        OKRs yang sudah diupdate akan direview terlebih dahulu oleh atasan.
      </Text>
      <AButton
        h={'42px'}
        disabled={!pencapaian}
        onClick={submit}>
        Kirim
      </AButton>
    </Flex>
  );
}
