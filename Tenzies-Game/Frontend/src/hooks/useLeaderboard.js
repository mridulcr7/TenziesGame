import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import Cookies from "js-cookie";


export const useLeaderboard = () => {
    const [error, setError] = useState(null)
    const [leaderboardData, setleaderboardData] = useState(null);

    const { user } = useAuthContext();


    const leaderboard = async () => {

      //  console.log(user.token);
        
        
        try {
            const response = await fetch('https://tenziesgame-backend.onrender.com/leaderboard', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                },
            })
            const json = await response.json()
            if (!response.ok) {
                setError(json.error)
            }
            else {
                //console.log(json);
                setleaderboardData(json);
            }

        }
        catch (err) {
            setError(err)
            //console.log(err);
        }
    }

    return { leaderboard, leaderboardData, error }

}


