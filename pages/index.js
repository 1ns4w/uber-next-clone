import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

export default function Home() {
  return (
    <Wrapper>
      <Map /> 
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Angel Mejia</Name>
            <UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEgbg8d75Jf5Vfs_tTkWkZHSmFNDZCTlLg-lR12cjGp2-PO0YWM4VfFR99apfQ1DXr8Q&usqp=CAU" />
          </Profile>
        </Header>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1
`

const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-18
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20
`

const UserImage = tw.img`
  h-12 w-12 rounded-full
`