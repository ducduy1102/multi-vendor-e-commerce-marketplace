import "server-only";
import { cookies as getCookies } from "next/headers";

interface Props {
  prefix: string;
  value: string;
}

export const generateAuthCookie = async ({ prefix, value }: Props) => {
  const cookies = await getCookies();
  
  cookies.set({
    name: `${prefix}-token`, // payload token by default
    value: value,
    httpOnly: true,
    path: "/",
    // TODO: Ensure cross-domain cookie sharing
    // brand.com // initial cookie
    // brand-fake.com // cookie does not exist here
    sameSite: "none",
    domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN!,
    secure: process.env.NODE_ENV === "production",
  });
};
