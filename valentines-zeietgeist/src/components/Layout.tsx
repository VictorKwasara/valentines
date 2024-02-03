import React from 'react'
import theme from '../theme'
import {ThemeProvider } from '@mui/material/styles';
import "./styles/layout.css"
const Layout = ({children}: {children: React.ReactNode} ) => {
  return (
    <ThemeProvider  theme={theme}>{children}</ThemeProvider>
  )
}

export default Layout
