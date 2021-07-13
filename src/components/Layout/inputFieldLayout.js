const InputFieldLayout = ({ label, show, id, placeHolder, icon, type }) => {
    return (
        <div className="mb-5 mt-4 ">
            <label className=" font-normal pr-5 mb-10 text-base text-gray-300" for="email">
                {label}
            </label>
            <div className='relative mt-2'>
                {show && <span class="absolute inset-y-0 right-5 flex items-center pl-2">
                    <button >
                        {icon}
                    </button>
                </span>}
                <input className={`border-lightBlue border-2 hover:shadow-lg ring-1 ring-transparent hover:ring-blue-500 focus:border-blue-300 shadow appearance-none  rounded-md h-12 w-full bg-opacity-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-lightBlue focus:shadow-outline" `} id={type ?? 'name'} type={id ?? 'text'} placeholder={placeHolder}/>
            </div>

        </div>
    )
}

export default InputFieldLayout
