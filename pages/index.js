import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Link from 'next/link'

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
        <ActionButtons>

          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
              Ride
            </ActionButton>
          </Link>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
            2-Wheel
          </ActionButton>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Reserve
          </ActionButton>

        </ActionButtons>

        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 px-4 pb-8 flex flex-col justify-center
`

const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28
`

const Profile = tw.div`
  flex items-center mr-4
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border-dray-200 p-px
`

const ActionButtons = tw.div`
  flex mx-4
`

const ActionButton = tw.div`
  bg-gray-200 flex-1 mx-1 h-32 flex flex-col items-center justify-center rounded-lg
  transform hover:scale-105 transition text-base
`

const ActionButtonImage = tw.img`
  h-3/5
`

const InputButton = tw.div `
  bg-black text-white mt-8 mx-5 rounded-lg flex items-center p-4 text-base
`