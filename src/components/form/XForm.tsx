import { Box, Flex, Text } from "@chakra-ui/react";
import { XInputDate } from "./input/XInputDate";
import { XInputFile } from "./input/XInputFile";
import { XInputMultipleCheck } from "./input/XInputMultipleCheck";
import { XInputMultiValue } from "./input/XInputMultiValue";
import { XInputNumber } from "./input/XInputNumber";
import { XInputPassword } from "./input/XInputPassword";
import { XInputRadioTick } from "./input/XInputRadioTick";
import { XInputSelect } from "./input/XInputSelect";
import { XInputSwitch } from "./input/XInputSwitch";
import { XInputText } from "./input/XInputText";
import { XInputTextarea } from "./input/XInputTextarea";
import { XFormItem } from "./interface";

interface XFormProps {
  forms: XFormItem[]
  gap?: string | number
  columnMode?: boolean
}

export function XForm(props: XFormProps) {
  return (
    <Flex 
      w={'100%'}
      direction={'column'}
      gap={props.gap ?? '24px'}>
      {
        props.forms.filter((form: XFormItem) => !form.hide).map((form: XFormItem, i: number) => {
          return (
            <Flex 
              w={'100%'} 
              key={i}>
              <Box flex={1}>
                {
                  (() => {
                    switch (form.type) {
                      case 'text': return (
                        <XInputText 
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'number': return (
                        <XInputNumber
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'password': return (
                        <XInputPassword
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'dropdown': return (
                        <XInputSelect
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'switch': return (
                        <XInputSwitch
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'multiple-check': return (
                        <XInputMultipleCheck
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'textarea': return (
                        <XInputTextarea
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'multivalue': return (
                        <XInputMultiValue
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'date': return (
                        <XInputDate
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'radio-tick': return (
                        <XInputRadioTick
                          {...form}
                          columnMode={props.columnMode} />
                      );
                      case 'file': return (
                        <XInputFile
                          {...form}
                          columnMode={props.columnMode} />
                      );
                    }
                  })()
                }
              </Box>
            </Flex>
          );
        })
      }
    </Flex>
  );
}
