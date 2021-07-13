import 'react-phone-input-2/lib/style.css';

import { useContext } from 'react';

import {
  CSSTransition,
  SwitchTransition,
} from 'react-transition-group';

import lady from '../../assets/images/lady.png';
import { switchContext } from '../../context/switchTransitionContext';
import AccountDetailForm from '../Layout/accountDetailFormLayout';
import PersonalAccount from '../Layout/personalAccount';

const SignUpBlue = () => {
    const { switchValue } = useContext(switchContext)

    return (

        <div className="flex flex-rol max-h-screen max-w-screen overflow-hidden">
            <div className='hidden md:flex flex-col flex-1 w-1/2  h-screen bg-blueTray px-10'>
                <p className='pb-40 pt-5 font-helBold  text-3xl text-white'>RStudio</p>
                <img src={lady} alt='sign up lady' className='md:w-100 lg:h-3/6 lg:w-11/12 self-center items-center' />
            </div>
            <div className='flex flex-col flex-1 w-1/2 h-screen bg-white '>
                <div className='flex flex-row justify-end items-end'>
                    <div className='flex rounded-full h-10 w-10 bg-gray-100 justify-center items-center mx-2 mt-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                
                </div>
                <div className='flex flex-col  items-center'>
                    <div className='flex flex-col   items-self place-content-center'>
                        <p className='font-helLight text-3xl text-black justify-self pb-4'>Sign up</p>
                        <div className='flex '>
                            <div className=''>
                                <p className='font-normal pr-5 pb-2 text-base text-gray-300'>Personal Info</p>

                                <div className={`transition duration-500 ease-in-out rounded-lg h-1 w-40  ${switchValue ? "bg-blueTray" : "bg-lightBlue"} `}></div>
                            </div>
                            <div className='pl-4'>
                                <p className='font-normal pr-5 pb-2 text-base text-gray-300'>Account Details</p>
                                <div className={`transition duration-500 ease-in-out rounded-lg h-1 w-40 ${switchValue ? "bg-lightBlue" : "bg-blueTray"}  `}></div>
                            </div>
                        </div>
                        <SwitchTransition mode="out-in">
                            <CSSTransition
                                key={switchValue}
                                addEndListener={(node, done) => {
                                    node.addEventListener("transitionend", done, false);

                                }}
                                classNames="fade"
                            >
                                {switchValue ? <PersonalAccount /> : <AccountDetailForm />}
                            </CSSTransition>
                        </SwitchTransition>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUpBlue
