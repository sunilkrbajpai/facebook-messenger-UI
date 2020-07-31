import React, {forwardRef} from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import "./Message.css";

const Message=forwardRef(({message,username},ref) =>{
    const isUser=username===message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message__userCard':'message__guestCard'}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        <span className={`user__name ${isUser && 'me__user'}`}>
                            {isUser?"You":message.username||"Unknown user"}
                            </span> :  <span className="message__text">{message.message}</span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
