import React from 'react'
import ListItem from './ListItem/ListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip, faHome, faTableList } from '@fortawesome/free-solid-svg-icons'
import Searchbar from '../Searchbar/Searchbar';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 w-full flex flex-col min-[300px]:flex-row gap-2 min-[300px]:gap-0 justify-center items-center min-[300px]:h-7 ">
      <Searchbar className="flex min-[300px]:hidden" />
      <ThemeSwitcher className="flex min-[300px]:hidden" />
      <ul className="w-full h-full max-w-screen-lg pl-0 pr-0 min-[300px]:pl-4 min-[300px]:pr-4 lg:pr-0 lg:pl-0 flex flex-col min-[300px]:flex-row justify-center items-center">
        <ListItem href="/" exact={true} className='min-[300px]:after:rounded-bl-lg' border="sky"><FontAwesomeIcon icon={faHome} className="hidden min-[350px]:inline" /> Inicio</ListItem>
        <ListItem href="/paginados/1" border="amber"><FontAwesomeIcon icon={faGrip} className="hidden min-[350px]:inline" /> Paginados</ListItem>
        <ListItem href="/tabela/1" className='min-[300px]:after:rounded-br-lg' border="red"><FontAwesomeIcon icon={faTableList} className="hidden min-[350px]:inline" /> Tabela</ListItem>
      </ul>
    </nav>
  )
}

export default Navbar