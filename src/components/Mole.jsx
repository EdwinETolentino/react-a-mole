import mole from '../components/MoleContainer'
import { useEffect } from 'react'

export default function Mole({setIsShowing, onMoleClick}) {
    useEffect(() => {
        let randMillis = Math.ceil(Math.random() * 2000 + 2000)
        let timer = setTimeout(() => {
            setIsShowing(false)
        }, randMillis);

        return () => clearTimeout(timer);

    }, []);

    return <div>
        <img
            style={{ width: '30vw' }}
            src={mole}
            onClick={onMoleClick}
        />
    </div>
}