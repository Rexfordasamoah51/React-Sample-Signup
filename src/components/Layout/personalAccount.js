import { useContext } from 'react';

import { switchContext } from '../../context/switchTransitionContext';
import GenderDropDown from './genderDropDownLayout';
import InputFieldLayout from './inputFieldLayout';

const PersonalAccount = () => {
    const { updateSwitchValue } = useContext(switchContext)

    const handleSubmit = event => {


        event.preventDefault();
    };
    return (
        <form  onSubmit={handleSubmit}>
            <InputFieldLayout id="text" label="Full Name" placeHolder="Enter your name" />
            <InputFieldLayout type="text" id="hear" label="How did you hear about us?" placeHolder="Google" />
            <div class="mb-5 mt-4">
                <label className="font-normal pr-5 mb-10 text-base text-gray-300" for="email">
                    Gender
                </label>
                <GenderDropDown />
            </div>
            <button onClick={() => updateSwitchValue()} className='h-12 rounded-md text-white w-full bg-blueTray'>
                NEXT
            </button>

            <p className="flex justify-center item-center mt-2 font-normal pr-5 mb-10 text-base text-gray-300 ">Already have an account? <span className='text-blueTray font-helBold pl-1 cursor-pointer'> Sign In</span></p>
        </form>
    )
}

export default PersonalAccount
