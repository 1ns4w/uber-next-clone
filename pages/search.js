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
                
                {/*Saved Paces*/}
                <InputBoxes>
                    <Input placeholder = "Enter pickup location"/>
                    <Input placeholder = "Where to?"/>
                </InputBoxes>

                {/*Confirm Location*/}
                <PlusIcon src = "https://img.icons8.com/ios/50/000000/plus-math.png" />

            </InputContainer>


            


        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
    bg-gray-200 h-screen
` // styled component

const ButtonContainer = tw.div `
    bg-white pl-2
`

const BackButton = tw.img`
    h-10
`

const InputContainer = tw.div`
    bg-white flex items-center
`

const FromToIcons = tw.div`
    w-10 flex flex-col
`

const Circle = tw.img``

const Square = tw.img``

const Line = tw.img``

const InputBoxes = tw.div`
    flex flex-col flex-1
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-sm p-2 outline-none border-none
`

const PlusIcon = tw.img`
    w-10 h-10 rounded-full bg-gray-200
`