import React, { useState } from 'react'

const NameForm = () => {
    const [name, setName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Submitted: ${name}`);
        setName('');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter your name</label>
            <input type="text"
                   value={name}
                   onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default NameForm
