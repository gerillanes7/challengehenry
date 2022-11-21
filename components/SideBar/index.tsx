import { BiRadar } from 'react-icons/bi'
import { RiFoldersLine } from 'react-icons/ri'
import { BsCalendar, BsBook } from 'react-icons/bs'
import { TbCertificate } from 'react-icons/tb'
import { HiOutlineChat } from 'react-icons/hi'
import { CiSettings } from 'react-icons/ci'
import { FiLogOut } from 'react-icons/fi'

import { Container, ItemsContainer, MenuItem, MenuTitle, LogOutButtonContainer } from "./SideBarStyles"

const SideBar = () => {

    const menuItems = [
        {
            title: 'Main',
            icon: <BiRadar size='1.5em' />,
            active: false
        },
        {
            title: 'Courses',
            icon: <RiFoldersLine size='1.5em' />,
            active: true
        },
        {
            title: 'Schedule',
            icon: <BsCalendar size='1.5em' />,
            active: false
        },
        {
            title: 'Materials',
            icon: <BsBook size='1.5em' />,
            active: false
        },
        {
            title: 'Certificates',
            icon: <TbCertificate size='1.5em' />,
            active: false
        },
        {
            title: 'Messages',
            icon: <HiOutlineChat size='1.5em' />,
            active: false
        },
        {
            title: 'Settings',
            icon: <CiSettings size='1.5em' />,
            active: false
        }
    ]

    return (
        <Container>
            <div>
                logo
            </div>
            <ItemsContainer>
                {
                    menuItems.map((item, i) => (
                        <MenuItem key={i} active={item.active}>
                            {item.icon}
                            <MenuTitle>
                                {item.title}
                            </MenuTitle>
                        </MenuItem>
                    ))
                }
            </ItemsContainer>
            <LogOutButtonContainer>
                <FiLogOut />
                <MenuTitle>
                    Log Out
                </MenuTitle>
            </LogOutButtonContainer>
        </Container>
    )
}

export default SideBar