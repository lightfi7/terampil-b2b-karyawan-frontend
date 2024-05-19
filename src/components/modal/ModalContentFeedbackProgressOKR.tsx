import { Flex, Text } from "@chakra-ui/react";
import moment from "moment";

interface ModalContentFeedbackProgressOKRProps {
  onSubmit?(pencapaian: number, evidence: string): void
  atasan: string
  tanggal: Date
  feedback: string
}

export function ModalContentFeedbackProgressOKR(props: ModalContentFeedbackProgressOKRProps) {
  return (
    <Flex
      direction={'column'}
      gap={'12px'}>
      <Flex
        direction={'column'}
        flex={'5px'}>
        <Text
          color={'#979797'}
          fontSize={'.8em'}>
          Atasan
        </Text>
        <Text
          color={'#626262'}
          fontSize={'.9em'}>
          { props.atasan ?? '-' }
        </Text>
      </Flex>
      <Flex
        direction={'column'}
        flex={'5px'}>
        <Text
          color={'#979797'}
          fontSize={'.8em'}>
          Tanggal
        </Text>
        <Text
          color={'#626262'}
          fontSize={'.9em'}>
          { moment(props.tanggal).format('dddd, DD MMMM YYYY, HH:mm') }
        </Text>
      </Flex>
      <Flex
        direction={'column'}
        flex={'5px'}>
        <Text
          color={'#979797'}
          fontSize={'.8em'}>
          Feedback
        </Text>
        <Text
          color={'#626262'}
          fontSize={'.9em'}>
          { props.feedback }
        </Text>
      </Flex>
    </Flex>
  );
}
