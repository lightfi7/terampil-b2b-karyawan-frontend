import { Box, Flex, Image } from "@chakra-ui/react";
import { AButton } from "../button/AButton";
import { XInputSelect } from "../form/input/XInputSelect";
import { XInputText } from "../form/input/XInputText";

interface TableActionProps {
  button?: {
    label: string
    onClick?(): void
  }
  noSort?: boolean
}

export function TableAction(props: TableActionProps) {
  return (
    <Flex 
      justify={'space-between'}
      align={'center'}>
      <Flex h={'38px'}>
        <Flex 
          border={'solid 1px #C4C4C4'}
          borderTopLeftRadius={999}
          borderBottomLeftRadius={999}>
          <XInputSelect 
            unstyled
            containerStyle={{
              padding: 0,
              width: 150,
              paddingLeft: '15px'
            }}
            key={''} 
            placeholder={'Choose'}
            type={"dropdown"} />
          <Flex w={'1px'} h={'100%'} bg={'#C4C4C4'} />
          <XInputText 
            key={""}
            containerStyle={{
              padding: 0,
              width: 200,
              outline: 'none'
            }}
            placeholder={'Enter text here...'}
            style={{
              padding: '0 12px',
              border: 'none',
              height: 35,
              outline: 'none',
              borderRadius: 0,
              fontSize: '.85em'
            }} />
        </Flex>
        <Flex 
          cursor={'pointer'}
          h={'100%'}
          w={'40px'}
          align={'center'}
          justify={'center'}
          bg={'brand'}>
          <Image
            w={'20px'}
            h={'20px'}
            src={'/icons/light/icon-search-white.png'} />
        </Flex>
        { !props.noSort && <XInputSelect 
          containerStyle={{
            padding: 0,
            width: 150,
            paddingLeft: '15px',
            paddingTop: 0,
            paddingBottom: 0
          }}
          key={''} 
          placeholder={'Sort'}
          type={"dropdown"} /> }
      </Flex>
      { props.button && <AButton 
        onClick={props.button?.onClick}
        style={{
          padding: '20px 12px',
          fontSize: '.85em'
        }}>
        { props.button?.label }
      </AButton> }
    </Flex>
  );
}
