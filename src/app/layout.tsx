'use client'

import { CssBaseline } from '@mui/joy';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  fontFamily: {
    display: 'Pangram', // applies to `h1`–`h4`
    body: 'Lato', // applies to `title-*` and `body-*`
  },
  // "colorSchemes": {
  //   "dark": {
  //     "palette": {
  //       "primary": {
  //         "50": "#FFEBD6",
  //         "100": "#FFD39C",
  //         "200": "#F7B970",
  //         "300": "#F7A752",
  //         "400": "#EB874D",
  //         "500": "#DA7D48",
  //         "600": "#AD6439",
  //         "700": "#8A4F2D",
  //         "800": "#4F2E1A",
  //         "900": "#1A0F08"
  //       }
  //     }
  //   },
  //   "light": {
  //     "palette": {
  //       "primary": {
  //         "50": "#E4F3F5",
  //         "100": "#C4E9F5",
  //         "200": "#A6E1ED",
  //         "300": "#7ECED9",
  //         "400": "#5CB8CC",
  //         "500": "#41A0B7",
  //         "600": "#337D8F",
  //         "700": "#2D6D7D",
  //         "800": "#1E4954",
  //         "900": "#11282E"
  //       }
  //     }
  //   }
  // }
});

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <CssVarsProvider theme={theme} defaultMode='system'>
      <CssBaseline />
      <html lang="pt-BR">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
          <link href="https://db.onlinewebfonts.com/c/56a82ed18dbcec3eaab8c012dea226cf?family=Pangram" rel="stylesheet" />
          <title>BASE</title>
        </head>
        <body>
          {children}
        </body>
      </html>
    </CssVarsProvider>
  );
}