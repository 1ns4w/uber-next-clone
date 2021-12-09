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
            Hello
            {/*Input Container*/}
            {/*Saved Paces*/}
            {/*Confirm Location*/}
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
