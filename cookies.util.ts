import axios from "axios";
import cookie from "cookie"
import { Karyawan } from "data-design/src/entity/Karyawan.entity";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useCookies } from "react-cookie";

const cookies_name = 'kue-terampil-karyawan';

export function getServerTokenCookie(context: GetServerSidePropsContext): string | undefined {
  return cookie.parse(context.req ? context.req.headers.cookie || "" : document.cookie)[cookies_name];
}

export function useTokenCookie() {
  const [cookie, setCookie] = useCookies([cookies_name]);

  function setToken(token: string) {
    setCookie(cookies_name, token, {
      path: "/",
      maxAge: Number.MAX_SAFE_INTEGER,
      sameSite: true,
    });
  }

  function removeToken() {
    setCookie(cookies_name, '', {
      path: "/",
      maxAge: 0,
      sameSite: true,
    });
  }

  function getToken(): string {
    return cookie[cookies_name];
  }

  function isLoggedIn(): boolean {
    return getToken() ? true : false;
  }

  return {
    setToken, removeToken, getToken, isLoggedIn
  };
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<WithKaryawanPageProps|any>> {
  const token = getServerTokenCookie(context);

  if (!token) {
    return NEXT_ERROR_RETURN;
  }

  let karyawan: Karyawan | null = null;
  try {
    karyawan = (await axios.get('/profile', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })).data;
    console.log(karyawan);
  } catch (err: any) {
    console.log(err);
    return NEXT_ERROR_RETURN;
  }

  return {
    props: {
      karyawan
    }
  }
}

export async function initAuthorizationToken(token: string) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const NEXT_ERROR_RETURN = {
  redirect: {
    destination: '/login',
    permanent: false
  }
};

export interface WithKaryawanPageProps {
  karyawan: Karyawan
}
