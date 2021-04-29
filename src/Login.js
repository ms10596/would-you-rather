import { useEffect, useState } from "react"
import {_getUsers} from "./_DATA"
function Login() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        _getUsers().then(res => Object.keys(res).map(a => res[a]))
            .then(res => res.sort((a, b) => a["questions"].length - b["answers"].length))
            .then(res => setUsers(res))
    }, [users])

    return (
        <div>
            <select>
                {users.map(
                    user => (<option key={user.name} value={user.name} >{user.name}</option>)
                )}
                <option key="nothing" value="" selected></option>
            </select>
        </div>
    );
}

export default Login;
