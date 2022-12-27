import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Table1 = () => {
    const [players, setPlayers] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                setPlayers(res.data);
                setLoaded(true);

                console.log("hiiiiiiiiiii")
            })
            .catch(err => console.error(err));
    }, []);

    const changeZeroToOne = (id) => {
        axios.put('http://localhost:8000/api/users/update/' + id, { 'status': 1 })

            .then(res => {
                console.log(res)
                const objIndex = players.findIndex((obj => obj._id == id));
                const players1 = [...players.slice(0, objIndex), { ...players[objIndex], "status": 1 }, ...players.slice(objIndex + 1)];
                setPlayers(players1);
            })
            .catch(err => console.log(err));
    }
    const changeOneToTwo = (id) => {
        axios.put('http://localhost:8000/api/users/update/' + id, { 'status': 2 })
            .then(res => {
                console.log(res)
                const objIndex = players.findIndex((obj => obj._id == id));
                const players1 = [...players.slice(0, objIndex), { ...players[objIndex], "status": 2 }, ...players.slice(objIndex + 1)];
                setPlayers(players1);
            })
            .catch(err => console.log(err));
    }
    const changeTwoToOne = (id) => {
        axios.put('http://localhost:8000/api/users/update/' + id, { 'status': 1 })
            .then(res => {
                console.log(res)
                const objIndex = players.findIndex((obj => obj._id == id));
                const players1 = [...players.slice(0, objIndex), { ...players[objIndex], "status": 1 }, ...players.slice(objIndex + 1)];
                setPlayers(players1);
            })
            .catch(err => console.log(err));
    }
    const changeOneToZero = (id) => {
        axios.put('http://localhost:8000/api/users/update/' + id, { 'status': 0 })
            .then(res => {
                console.log(res)
                const objIndex = players.findIndex((obj => obj._id == id));
                const players1 = [...players.slice(0, objIndex), { ...players[objIndex], "status": 0 }, ...players.slice(objIndex + 1)];
                setPlayers(players1);
            })
            .catch(err => console.log(err));
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <table border="1">
                <thead>
                    <th>Name</th>
                    <th>Action</th>
                </thead>
                {loaded && players.map((player, i) =>
                    player.status == 0 ?
                        <tr
                            key={i}>
                            <td> {player.name} </td>
                            <td>
                                <button onClick={() => changeZeroToOne(player._id)}>
                                    Move
                                </button>
                            </td>
                        </tr>
                        : <tr></tr>
                )}
            </table>
            <table border="1">
                <thead>
                    <th>Name</th>
                    <th>Action</th>
                </thead>
                {loaded && players.map((player, i) =>
                    player.status == 1 ?

                        <tr
                            key={i}>
                            <td> {player.name} </td>
                            <td>
                                <button onClick={() => changeOneToTwo(player._id)}>
                                    Move
                                </button>
                                <button onClick={() => changeOneToZero(player._id)}>
                                    Back
                                </button>
                            </td>

                        </tr>
                        : <tr></tr>
                )}
            </table>
            <table border="1">
                <thead>
                    <th>Name</th>
                    <th>Action</th>
                </thead>
                {loaded && players.map((player, i) =>
                    player.status == 2 ?
                        <tr
                            key={i}>
                            <td> {player.name} </td>
                            <td>
                                <button onClick={() => changeTwoToOne(player._id)}>
                                    Back
                                </button>
                            </td>
                        </tr>
                        : <tr></tr>
                )}
            </table>
        </div>
    )
}

export default Table1