import { useEffect, useRef } from 'react'
import UserMessage from './UserMessage'
import BotMessage from './BotMessage'

export default function MessageList({ messages }) {
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div
      style={{
        flex: 1,
        overflowY: 'auto',
        padding: '6rem', // Afastando do canto esquerdo e direito
      }}
    >
      {messages.map((msg, i) =>
        msg.sender === 'user' ? (
          <UserMessage key={i} text={msg.text} />
        ) : (
          <BotMessage key={i} text={msg.text} />
        )
      )}
      <div ref={endRef} />
    </div>
  )
}
