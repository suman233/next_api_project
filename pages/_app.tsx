import Wrapper from "@/layout/Wrapper/Wrapper";
import MuiThemeProvider from "@/mui_theme/MuiThemeProvider";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider attribute="class" defaultTheme="light">

    <MuiThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </QueryClientProvider>

    </MuiThemeProvider>
    // </ThemeProvider>
  )
}
