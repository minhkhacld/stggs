import { faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Input, Textarea } from "@material-tailwind/react";
import axios from 'axios';
import React from 'react';

const Contact = () => {

    const [user, setUser] = React.useState({
        name: "",
        email: '',
        message: '',
        err: null,
    });

    const [sending, setSending] = React.useState(false);

    const onChangeName = (e) => {
        setUser({
            ...user, name: e, err: null,
        })
    };

    const onChangeEmail = (e) => {
        setUser({
            ...user, email: e, err: null,
        })
    };

    const onChangeMessage = (e) => {
        setUser({
            ...user, message: e, err: null,
        })
    };

    const onSumitForm = async (e) => {
        e.preventDefault();
        if (user.name === "" || user.email === "" || user.text === "") {
            setUser({
                ...user, err: "Please fill in your information and message",
            })
            return
        }

        setSending(true)
        let data = {
            sheetName: "Message from users",
            sheetUrl: process.env.REACT_APP_API_SHEETS,
            columns: [
                {
                    title: "Name",
                    value: user.name,
                },
                {
                    title: "Email",
                    value: user.email,
                },
                {
                    title: "Message",
                    value: user.message,
                }
            ]
        }

        await axios.post(`${process.env.REACT_APP_API_EMAIL}`, { data: data }, {
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            }
        }).then(async (response) => {
            console.log(response);
            if (response.data.code === 1) {
                setSending(false);
            }
        }).catch(err => {
            console.log(err);
            setSending(false);
        });
    };

    const ownerInfo = [
        { title: 'Email', icon: faEnvelope, text: "pmkha92@gmail.com" },
        { title: 'Location', icon: faLocationPin, text: "Cai Lay, Tien Giang, Viet Nam" },
    ]


    return (
        <div className="relative w-full h-full min-h-[900px] flex flex-col sm:flex-row justify-center items-center " id="contact"
        >         

            <div className="w-[50%] flex flex-row justify-end items-center">
                <div className="w-full sm:w-[70%] pb-10 sm:pb-0">
                    {ownerInfo.map((item, index) => (
                        <div key={index} className="w-full flex flex-row justify-center items-center mb-10 custom_contact_class opacity-0">
                            <div className="w-3/12 flex flex-col justify-center items-center ">
                                <FontAwesomeIcon icon={item.icon} className="text-5xl text-[#FF00C3]" />
                            </div>
                            <div className="w-9/12 flex flex-col justify-center items-center">
                                <p className="w-full text-4xl">{item.title}</p>
                                <p className="w-full text-5 select-all">{item.text}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className="relative w-[90%] sm:w-[50%] h-full p-2">
                <div className="w-[100%] sm:w-[70%] h-full flex flex-col justify-center items-center rounded-3xl shadow-2xl">
                    <div className="h-[20%] flex flex-col justify-center items-center">
                        <p className="w-full h-30 text-3xl mt-5 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact</p>
                        <p className="mt-4 text-xl text-gray-500">Leave a message to me.</p>
                    </div>
                    <form className="w-[90%] h-[80%] min-h-[600px] flex flex-col justify-start items-center">
                        {/* <label className="w-full h-8 text-slate-600">Name</label>
                        <input
                            placeholder="Type name"
                            className="w-full h-10 border border-slate-400 mb-3 rounded outline-none p-2 text-slate-600" required type="text" value={user.name} onChange={(e) => onChangeName(e.target.value)} />
                        <label className="w-full h-8 text-slate-600">Email</label>
                        <input placeholder="Type email" className="w-full h-10 border border-slate-400 mb-3 rounded outline-none p-2 text-slate-600" required type="text" value={user.email} onChange={(e) => onChangeEmail(e.target.value)} />
                        <label className="w-full h-8 text-slate-600">Message (max: 500)</label>
                        <textarea
                            placeholder="Write some things to me"
                            className="w-full border border-slate-400 mb-3 rounded outline-none p-2 text-slate-600"
                            maxLength={500}
                            rows={5} cols={1} type="text" value={user.message} onChange={(e) => onChangeMessage(e.target.value)}
                            required /> */}
                        <div className="w-full mt-5">
                            <Input size="lg" className="w-full h-10" label="Name" value={user.name} onChange={(e) => onChangeName(e.target.value)} />

                        </div>
                        <div className="w-full mt-5">
                            <Input size="lg" className="w-full h-10" label="Email" value={user.email} onChange={(e) => onChangeEmail(e.target.value)} />

                        </div>
                        <div className="w-full mt-5 mb-5">
                            <Textarea variant="outlined" label="Message"
                                className="w-full" value={user.message} onChange={(e) => onChangeMessage(e.target.value)}
                            />
                        </div>

                        {
                            sending &&
                            <Alert>Message has already been sent, I will check it as soon as possible.</Alert>
                        }
                        {user.err !== null &&
                            <Alert color="red">{user.err}</Alert>
                        }
                        <button type="submit" className="w-4/12 bg-[#c542a6] h-[50px] rounded-3xl mt-5 text-white hover:bg-[#ff00c3]"
                            onClick={(e) => onSumitForm(e)} >Send</button>
                    </form>
                </div>

            </div>
        </div>
    )
};

export default Contact;