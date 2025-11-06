// pages/_app.tsx
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import Layout from '@/Components/Layout/Layout';
import theme from '@/theme/theme';


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthPage = router.pathname === '/login' || router.pathname === '/signup';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isAuthPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}
