import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Karyawan } from "data-design/src/entity/Karyawan.entity";
import { RolePermission } from "data-design/src/entity/RolePermission.entity";
import { useRouter } from "next/router";
import { ItemSidebar, ItemSidebarProps } from "./ItemSidebar";
import { SIDEBAR_DATA } from "./sidebar.data";

export interface MainSidebarGroup {
  title: string
  items: ItemSidebarProps[]
}

interface SidebarProps {
  karyawan: Karyawan
}

export function Sidebar(props: SidebarProps) {
  const router = useRouter();
  const list_permission: any[] = [];
  return (
    <Flex 
      h={'100%'}
      minH={'100%'}
      maxH={'100%'}
      direction={'column'}>
      <Flex
        bg={'white'}
        borderRadius={8}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        p={'12px'}
        pl={'18px'}>
        <Image
          w={'auto'}
          h={'2em'}
          mt={'1.5px'}
          objectFit={'contain'}
          src={'/icons/light/logo.png'} />
      </Flex>
      <Flex
        bg={'white'}
        overflowY={'auto'}
        borderRadius={8}
        borderTopLeftRadius={0}
        borderTopRightRadius={0}>
        {
          SIDEBAR_DATA.map((msg: MainSidebarGroup, i: number) => (
            <Flex 
              key={i}
              pt={'18px'}
              direction={'column'}>
              { i !== 0 && <Box 
                w={'100%'}
                h={'1px'}
                mb={'18px'}
                opacity={.5} /> }
              {
                msg.items.filter((isp: ItemSidebarProps) => {
                  const items = (isp.items ?? []).filter((isp: ItemSidebarProps) => !isp.code || list_permission.includes(isp.code));
                  return items.length > 0;
                }).map((isp: ItemSidebarProps, j: number) => (
                  <ItemSidebar 
                    key={j} 
                    listPermission={list_permission}
                    {...isp} />
                ))
              }
            </Flex>
          ))
        }
      </Flex>
    </Flex>
  );
}
