import { Flex, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ItemSidebarProps } from "../ItemSidebar";

export interface ChildItemSidebarProps {
  data: ItemSidebarProps
}

export function ChildItemSidebar(props: ChildItemSidebarProps) {
  const router = useRouter();
  const match_router_path = router.pathname === props.data.href;

  return (
    <Link 
      href={props.data.href}>
      <Text 
        paddingTop={'7px'}
        paddingBottom={'7px'}
        color={match_router_path ? 'brand' : 'black'}
        fontSize={'.8em'}>
        { props.data.label }
      </Text>
    </Link>
  );
}
