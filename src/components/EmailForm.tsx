import React, { useState } from 'react'

const EmailForm = () => {
    const [email, setEmail] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email.includes('@')) {
             alert(`Email sent to: ${email}`);
        } else {
            alert('Invalid email');
        }

       
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <label>Please enter you email: </label>
            <input type="text"
                   name='email'
                   value={email}
                   onChange={handleChange} />
            <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EmailForm
