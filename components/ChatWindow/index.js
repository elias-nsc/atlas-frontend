import MessageList from './MessageList'
import TypingIndicator from './TypingIndicator'

export default function ChatWindow({ messages, isTyping, onOptionSelect }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <MessageList messages={messages} onOptionSelect={onOptionSelect} />
      {isTyping && <TypingIndicator />}
    </div>
  );
}