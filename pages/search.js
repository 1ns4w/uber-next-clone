import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const Search = () => {
    return (
        <Wrapper>

            {/*Button Container*/}
            <ButtonContainer>
                <Link href="/">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>

            {/*Input Container*/}
            <InputContainer>
                
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
                </FromToIcons>
                
                <InputBoxes>
                    <Input placeholder = "Enter pickup location"/>
                    <Input placeholder = "Where to?"/>
                </InputBoxes>

                <PlusIcon src = "https://img.icons8.com/ios/50/000000/plus-math.png" />

            </InputContainer>

            <SavedPlaces>
                <StarIcon src = "https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>
            
            <Link href = "/confirm">
                <ConfirmButton>
                    Confirm Locations
                </ConfirmButton>
            </Link>

        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
    bg-gray-200 h-screen
` // styled component

const ButtonContainer = tw.div `
    bg-white pl-4 py-2
`

const BackButton = tw.img`
    h-10
`

const InputContainer = tw.div`
    bg-white flex items-center px-4 pb-6
`

const FromToIcons = tw.div`
    w-10 flex flex-col items-center
`

const Circle = tw.img`
    h-2.5
`

const Square = tw.img`
    h-2.5
`

const Line = tw.img`
    h-10
`

const InputBoxes = tw.div`
    flex flex-col flex-1 mx-4
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-sm p-2 outline-none border-none
`

const PlusIcon = tw.img`
    w-10 h-10 rounded-full bg-gray-200
`

const SavedPlaces = tw.div`
    flex bg-white px-4 py-2 mt-2 rounded-sm items-center
`

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-4
`

const ConfirmButton = tw.div`
    bg-black text-white py-2 m-4 p-4 text-center 
`