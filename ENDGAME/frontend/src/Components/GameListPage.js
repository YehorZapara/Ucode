import React, {useContext, useEffect, useState} from 'react'
import { useHistory, Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import axios from "axios"
import moment from "moment"
import { Modal, ListGroup } from "react-bootstrap";

const GameListPage = () => {
    const history = useHistory()

    const [games, setGames] = useState([])
    const [participants, setParticipants] = useState([])
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState({})
    const [showModal, setShowModal] = useState(false)

    const {user, setUser} = useContext(UserContext)

    const handleCreateGame = () => {
        console.log("Creating");

        axios.post(axios.defaults.baseURL + "api/games", {
            participants: [user._id, selectedUser._id]
        }).then(res => {
            console.log(res.data);
            renderGames()
            setShowModal(false)
        }).catch(err => console.log(err))
    }

    const handleLogOut = () => {
        localStorage.removeItem("token")
        setUser(null)
        history.push("/login")
    }

    const renderGames = () => {
        setGames([])
        setParticipants([])

        axios.get(axios.defaults.baseURL + "api/games").then(res => {
            setGames(res.data.filter(c => c.participants.includes(user._id)));
        
            res.data.forEach(c => {
                c.participants.filter(p => p !== user._id).forEach(p => {
                    axios.get(axios.defaults.baseURL + `api/users/${p}`).then(r => {
                        r.data["game"] = c._id
                        setParticipants(participants => [...participants, r.data])
                    })
                })
            })
        }).catch(err => {
            console.log(err);
        })
    }

    const updateGame = (game) => {
        var newParticipants = game.participants
        newParticipants.push(selectedUser._id)
        console.log(newParticipants);

        axios.put(axios.defaults.baseURL + `api/games/${game._id}`, {
            messages: game.messages,
            participants: newParticipants
        }).then(res => {
            console.log(res.data)
            renderGames()
            setShowModal(false)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        if (!user)
            history.push("/login")

        renderGames()

        axios.get(axios.defaults.baseURL + "api/users").then(res => {
            setUsers(res.data.filter(u => u._id !== user._id))
            setSelectedUser(res.data[0])
        }).catch(err => console.log(err))
    }, [user])

    return (
        <div className="p-5">
            <h1 className="mb-4">Games</h1>
            <div className="mb-4">
                <button className="btn btn-secondary" onClick={() => handleLogOut()}>Log out</button>
                <button className="btn btn-success mx-4 rounded-circle" onClick={() => setShowModal(true)}>+</button>
            </div>
            <div className="col-11" style={{marginLeft: 32}}>
                {
                    games.map((c, idx) => (
                        <Link 
                            key={idx} 
                            className="d-flex bg-light align-items-center p-3 rounded my-4 text-decoration-none"
                            to={`/games/${c._id}`}
                        >
                            <p className="m-0" style={{flexGrow: 1}}>
                                {
                                    participants.filter(p => p.game === c._id).map(p => p.alias).join(", ")
                                }
                            </p>
                            <h6 className="m-0" style={{marginLeft: 16}}>
                                {
                                    c.messages && c.messages.length >= 1 ? 
                                    moment(c.messages[c.messages.length - 1].sentOn).format("M/D") : null
                                }
                            </h6>
                        </Link>
                    ))
                }
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <div className="d-flex">
                    <div className="rounded" style={{width: 200, height: 500}}>
                        <ListGroup style={{overflow: "scroll", height: 500}}>
                            {
                                users.map((item, idx) => (
                                    <ListGroup.Item 
                                        key={idx}
                                        action 
                                        onClick={() => setSelectedUser(item)}
                                        active={selectedUser._id === item._id}
                                    >
                                        {item.alias}
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </div>
                    <div className="rounded" style={{width: 300, height: 500, overflow: "scroll"}}>
                        {
                            games.find(c => c.participants.length === 2 && c.participants.includes(selectedUser._id)) ?
                            null : 
                            <button className="btn btn-dark mx-3 my-3" onClick={() => handleCreateGame()}>New</button>
                        }
                        <div>
                            {
                                games.filter(c => !c.participants.includes(selectedUser._id)).map((c, idx) => (
                                    <button 
                                        key={idx}
                                        className="d-flex bg-light align-items-center p-3 mt-4 rounded col-11 mx-auto" 
                                        style={{
                                            border: "none"
                                        }}
                                        onClick={() => updateGame(c)}
                                    >
                                        <p className="m-0" style={{flexGrow: 1}}>
                                            {
                                                participants.filter(p => p.game === c._id).map(p => p.alias).join(", ")
                                            }
                                        </p>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default GameListPage