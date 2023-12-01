import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import{ auth, provider } from '../firebase'
import Image from 'next/image'
import driverImage from '../styles/driver.png'
import riderImage from '../styles/Rider.png'
import uberLogo from '../styles/uber.png'

const Login = () => {
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                router.push('/')
            }
        })
    }, [])

    return (
        <div className='flex flex-col h-screen w-screen p-4'>
            <Image src={uberLogo}/>
            {/* <UberLogo src = "https://i.ibb.co/n6LWQM4/Post.png"/> */}
            {/* <Title>
                Login in to access your account.
            </Title> */}
            {/* <HeadImage src = " https://i.ibb.co/CsV9RYZ/login-image.png"/> */}
            <div className='self-center'>
                {/* <Image src={driverImage} height={30} width={30} alt='Driver Image'/>
                <Image src={riderImage} height={30} width={30} alt='Rider Image'/> */}
                <Header>
                    Anywhere, Anytime
                </Header>
                <Description>
                    Go where you wanna go, Do <br></br>what you gonna do
                </Description>
            </div>
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>
                Sign In with Google
            </SignInButton>
        </div>
    )
}

export default Login;


// const Wrapper = tw.div`
// flex flex-col h-screen w-screen p-4
// `

const SignInButton = tw. button`
bg-black text-white text-center py-4 mt-8 self-center w-full 
`

const UberLogo = tw.img`
h-20 w-auto object-contain self-center pb-10
`
// const DriverImage = tw.img`
// h-10 w-auto
// `
const RiderImage = tw.img`

`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`

// const HeadImage = tw.img`
// object-contain w-full h-full
// `

const Header = tw.div`
text-3xl pt-40 text-black-500 text-center
`

const Description = tw.div`
text-lg pt-10 text-gray-400 text-center
`

