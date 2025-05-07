'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ChatWindow from '../../components/ChatWindow';
import InputArea from '../../components/InputArea';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  function handleNewMessage(msg) {
    setMessages((prev) => [...prev, msg]);
  }

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
  <Sidebar show={showSidebar} onToggle={toggleSidebar} />
  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100vh' }}>
    <Header onToggleSidebar={toggleSidebar} showSidebar={showSidebar} />
    <ChatWindow messages={messages} isTyping={isTyping} />
    <InputArea onSend={handleNewMessage} setIsTyping={setIsTyping} />
  </div>
</div>

  );
}

