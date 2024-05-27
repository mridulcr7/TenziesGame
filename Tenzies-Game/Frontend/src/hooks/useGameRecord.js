import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import Cookies from "js-cookie";


export const useGameRecord = () => {
    const { user } = useAuthContext();


    const gameRecord = async (completionTime) => {

        console.log(completionTime);
        const response = await fetch('https://tenziesbackend.netlify.app/gamerecord', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({ completionTime: completionTime }),
        })
    }
    return { gameRecord }
}