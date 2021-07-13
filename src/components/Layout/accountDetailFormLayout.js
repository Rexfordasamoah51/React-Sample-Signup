import 'react-phone-input-2/lib/style.css';

import {
  useContext,
  useState,
} from 'react';

import CreditCardInput from 'react-credit-card-input';
import PhoneInput from 'react-phone-input-2';

import { switchContext } from '../../context/switchTransitionContext';
import InputFieldLayout from './inputFieldLayout';

const AccountDetailForm = () => {

    const [phone, updatePhone] = useState('')

    const { updateSwitchValue } = useContext(switchContext)

    const handleSubmit = event => {


        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <InputFieldLayout id="email" label="Email ID" placeHolder="Enter your email" />
            <InputFieldLayout id="password" label="Create New Password" placeHolder="Enter your password" show={true} icon={<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
            </svg>} />
            <div className="mb-5 mt-4 ">
                <label className="font-normal pr-5 mb-10 text-base text-gray-300" for="email">
                    Phone Number(Optional)
                </label>
                <PhoneInput
                    placeholder='Enter your number'
                    country={'gh'}
                    buttonStyle={{ backgroundColor: 'transparent', border: 'none' }}
                    containerStyle={{ width: '100%', height: '48px', }}
                    inputStyle={{ width: '100%', height: '48px', backgroundColor: 'transparent', outline: 'none', border: 'none', }}
                    value={phone}
                    containerClass='mb-5 border-lightBlue border-2 mt-2   hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 focus:border-blue-300 shadow appearance-none rounded-md h-12 w-full bg-opacity-20 text-gray-700 leading-tight focus:outline-none bg-lightBlue focus:shadow-outline'
                    onChange={phone => updatePhone(phone)}
                />
            </div>
            <div className="mb-9 mt-4 item-center ">
                <label className="font-normal pr-5 mb-10 text-base text-gray-300" for="email">
                    Credit Card Info
                </label>
                <CreditCardInput
                    invalidStyle={{ width: '331px', height: '48px', backgroundColor: '#E0E7FF', outline: 'none', border: 'none', opacity: '0.2', display:'block' }}
                    fieldStyle={{ width: '331px', height: '48px', backgroundColor: '#E0E7FF', opacity: '0.2' , }}
                    containerStyle={{ width: '100%', height: '48px', backgroundColor: 'transparent', display:'block' }}
                    inputStyle={{ width: '100%', height: '48px', backgroundColor: 'transparent', outline: 'none', border: 'none', display:'flex'  }}
                    fieldClassName="input"
                    containerClassName='block border-lightBlue border-2 mt-2   hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 focus:border-blue-300 shadow appearance-none  rounded-md h-12 w-full bg-opacity-20 text-gray-700 leading-tight focus:outline-none bg-lightBlue focus:shadow-outline'
                />
            </div>
            <button className='h-12 rounded-md text-white w-full bg-blueTray' onClick={() => updateSwitchValue()}>
                SUBMIT
            </button>
            <p className="flex justify-center item-center mt-2 font-normal pr-5 mb-10 text-base text-gray-300 ">Already have an account? <span className='text-blueTray font-helBold pl-1 cursor-pointer'> Sign In</span></p>
        </form>
    )
}

export default AccountDetailForm
