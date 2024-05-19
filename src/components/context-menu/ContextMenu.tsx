import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ThreeDotsImage } from "../three-dots-image/ThreeDotsImage";

export interface ContextMenuItem {
  label: string
  onClick?(): void
}

interface ContextMenuProps {
  trigger?: any
  listMenu: ContextMenuItem[]
}

export function ContextMenu(props: ContextMenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  function openCM(e: any) {
    setOpen(!open);
    e.stopPropagation();
  }

  function handleContextMenu() {
    setOpen(false);
  }

  useEffect(() => {
    window.addEventListener('click', handleContextMenu);
    return () => {
      window.removeEventListener('click', handleContextMenu);
    };
  }, [open]);

  return (
    <Flex 
      position={'relative'}
      ml={'12px'}>
      <Flex onClick={openCM}>
        { props.trigger ?? <ThreeDotsImage /> }
      </Flex>
      { open && <Flex 
        top={'100%'}
        right={'0%'}
        bg={'#FFF'}
        zIndex={999}
        mt={'4px'}
        overflow={'hidden'}
        borderRadius={8}
        boxShadow={'0px 1px 12px rgba(0, 0, 0, .15)'}
        position={'absolute'}>
        {
          props.listMenu.map((item: ContextMenuItem, i: number) => (
            <Flex
              key={i}
              cursor={'pointer'}
              className={'context-menu'}
              transition={'200ms'}
              onClick={e => {
                if (item.onClick) {
                  item.onClick();
                }
              }}
              _hover={{
                bg: '#F9F9F9'
              }}
              p={'12px 16px'}>
              { item.label }
            </Flex>
          ))
        }
      </Flex> }
    </Flex>
  );
}
