import React from 'react'

type WelcomeProps = {
    name: string;
};

const Welcome = ({name} : WelcomeProps) => {
  return (
    <div>
        <h1>Welcome, {name}!</h1>
    </div>
  )
}

export default Welcome
