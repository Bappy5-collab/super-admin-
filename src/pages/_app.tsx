// pages/_app.tsx
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import Layout from '@/Components/Layout/Layout';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
