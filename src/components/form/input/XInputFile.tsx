import { Input, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { XFormItem, XFormItemFile, XFormItemText } from "../interface";
import { XFormLabel } from "../XFormLabel";

interface XInputFileProps extends XFormItemFile {}

export function XInputFile(props: XInputFileProps) {
  const [selected_file, setSelectedFile] = useState<any>();

  return (
    <XFormLabel 
      prefix={props.prefix}
      label={props.label}
      required={props.required}
      columnMode={props.columnMode}>
      <Input 
        disabled={props.disabled}
        border={'solid 1.8px #C7C9D9'}
        type={'file'}
        fontSize={'.9em'}
        p={'12px 12px'}
        h={'54px'}
        onChange={e => {
          if (!props.onChange) {
            return;
          }
          const files = e.target.files;
          if (!files) {
            return;
          }
          props.onChange(files[0]);
        }}
        placeholder={props.placeholder}
        style={props.style} />
      { props.loading && <Spinner 
        right={'15px'}
        mt={'15px'}  
        position={'absolute'} /> }
    </XFormLabel>
  );
}
