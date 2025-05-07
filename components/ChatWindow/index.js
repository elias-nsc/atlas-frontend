import MessageList from './MessageList'
import TypingIndicator from './TypingIndicator'

export default function ChatWindow({ messages, isTyping }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <MessageList messages={messages} />
      {isTyping && <TypingIndicator />}
    </div>
  )
}

