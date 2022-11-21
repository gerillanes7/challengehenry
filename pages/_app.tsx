import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import CourseProvider from '../Context/CourseProvider';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CourseProvider>
        <Component {...pageProps} />
      </CourseProvider>
    </QueryClientProvider>
  )
}
