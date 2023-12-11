import React, { useContext } from 'react'
import NextLink from 'next/link'
import ThemeContext from '@/contexts/ThemeContext';

const Link = ({ href, children, ...props }) => {
  const theme = useContext(ThemeContext);

  const willRedirect = () => {
    theme.setReady(false);
  }

  return (
    <NextLink onClick={willRedirect} href={href} {...props}>
      {children}
    </NextLink>
  )
}

export default Link