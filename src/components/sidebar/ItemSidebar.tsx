import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { ChildItemSidebar } from "./child-item-sidebar/ChildItemSidebar";

export interface ItemSidebarProps {
  label: string
  href?: string
  logo?: string
  logoActive?: string
  code?: string
  items?: ItemSidebarProps[]
  listPermission?: string[]
}

export function ItemSidebar(props: ItemSidebarProps) {
  const router = useRouter();
  const items = (props.items ?? []).filter((isp: ItemSidebarProps) => !isp.code || (props.listPermission ?? []).includes(isp.code));
  const match_item = items.reduce((acc: boolean, item: ItemSidebarProps) => acc || (router.pathname === item.href), false);
  const match_router_path = router.pathname === props.href || match_item;
  const [is_open, setIsOpen] = useState<boolean>(true || match_router_path);
  
  return (
    <Flex 
      p={'12px 20px'}
      gap={'12px'}
      minW={'280px'}>
      { (props.logo && props.logoActive) && <Image 
        w={'1em'}
        h={'1em'}
        mt={'1.5px'}
        objectFit={'contain'}
        src={match_router_path ? props.logoActive : props.logo} /> }
      <Flex 
        flex={1}
        cursor={'pointer'}
        direction={'column'}>
        <Flex
          justify={'space-between'}
          align={'center'}
          marginBottom={'7px'}
          gap={'18px'}
          onClick={() => setIsOpen(!is_open)}>
          <Text 
            color={match_router_path ? 'brand' : '#000'}
            fontSize={'.85em'}
            fontWeight={600}>
            { props.label }
          </Text>
          <Image 
            w={'.85em'}
            h={'.85em'}
            transition={'250ms'}
            objectFit={'contain'}
            transform={`rotate(${is_open ? '0deg' : '180deg'})`}
            src={'/icons/light/icon-arrow-up.png'} />
        </Flex>
        <AnimateHeight
          duration={300}
          height={is_open ? 'auto' : 0}>
          {
            items.map((item: ItemSidebarProps, i: number) => (
              <ChildItemSidebar 
                key={i}
                data={item} />
            ))
          }
        </AnimateHeight>
      </Flex>
    </Flex>
  );
}
