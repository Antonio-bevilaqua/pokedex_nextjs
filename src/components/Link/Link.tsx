import React, { useContext } from 'react'
import NextLink from 'next/link'
import ThemeContext from '@/contexts/ThemeContext';
import { usePathname } from 'next/navigation';

const Link = ({ href, children, ...props }) => {
  const pathname = usePathname();
  const theme = useContext(ThemeContext);

  const willRedirect = () => {
    if (pathname === href) return;
    theme.setReady(false);
  }

  return (
    <NextLink onClick={willRedirect} href={href} {...props}>
      {children}
    </NextLink>
  )
}

export default Link