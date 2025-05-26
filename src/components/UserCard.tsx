import React, { useState } from 'react'

type UserCardProps = {
    name: string;
    age: number;
}

const UserCard = ({name, age}: UserCardProps) => {
    const [isOnline, setIsOnline] = useState<boolean>(true);

  return (
    <div>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
        <button onClick={() => setIsOnline(!isOnline)}>Toggle Status</button>
    </div>
  )
}

export default UserCard
