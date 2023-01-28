import React from 'react'

interface InputFieldProps {
    text: string,
    handleInput: (str: string) => void,
    handleSubmit: () => void
}

const InputField: React.FC<InputFieldProps> = ({text, handleInput, handleSubmit}) => {
    return (
        <label>
            <input type="text" value={text} onChange={e => handleInput(e.target.value)} />
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}

export default InputField
