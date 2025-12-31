import { Button, Link } from "@payloadcms/ui";

export const StripeVerify = () => {
  return (
    <Link href='/stripe-verify' className='text-blue-500 hover:text-blue-700'>
      <Button>Verify account</Button>
    </Link>
  );
};
