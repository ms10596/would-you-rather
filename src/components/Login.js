import { useEffect, useState } from "react"
import { _getUsers } from "../_DATA"
export default function Login({ setCurrentUser }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        _getUsers().then(res => Object.keys(res).map(a => res[a]))
            .then(res => setUsers(res))
    }, [users])

    const handleSelect = (e) => {
        setCurrentUser(e.target.value)
    }
    return (
        <div>
            <select onChange={handleSelect}>
                {users.map(
                    user => (<option key={user.id} value={user.id} >{user.name}</option>)
                )}
                <option key="nothing" value="" defaultValue></option>
            </select>
        </div>
    );
}

