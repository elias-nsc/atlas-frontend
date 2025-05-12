'use client';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ChatWindow from '../../components/ChatWindow';
import InputArea from '../../components/InputArea';
import { WebSocketProvider, useWebSocket } from '../../components/context/WebSocketContext';

function MainApp() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedModel, setSelectedModel] = useState('deepseek-r1:8b');
  const [initialQuestion, setInitialQuestion] = useState('');
  const [selectedPath, setSelectedPath] = useState('');
  const [step, setStep] = useState(null);
  const [webSocketActive, setWebSocketActive] = useState(false);
  const { sendMessage, setOnMessage, connectSocket, connected } = useWebSocket();

  useEffect(() => {
    setOnMessage((data) => {
      console.log('Dados recebidos:', data); // Para debug
      
      if (data?.type === 'prompt' && data.message.includes('Método')) {
        setMessages(prev => [...prev, { sender: 'bot', text: data.message }]);
        setStep({ type: 'method' });
      } 
      else if (data?.type === 'response') {
        setMessages(prev => [...prev, { sender: 'bot', text: data.message }]);
        setStep(null);
        setWebSocketActive(false);
        setInitialQuestion('');
      }
      else if (data?.type === 'error') {
        setMessages(prev => [...prev, { sender: 'bot', text: `Erro: ${data.message}` }]);
        setStep(null);
        setWebSocketActive(false);
      }
    });
  }, [setOnMessage]);

  function handleNewMessage(msg) {
    setMessages((prev) => [...prev, msg]);
    
    if (step?.type === 'method') {
      const payload = {
        ip: '123.123.134.6767:8030',
        method: msg.text,
        path: selectedPath,
        question: initialQuestion
      };
      console.log('Enviando payload:', payload);
      sendMessage(JSON.stringify(payload));
      setStep(null);
      return;
    }
    
    if (msg.sender === 'user' && !initialQuestion && !webSocketActive && !step) {
      setInitialQuestion(msg.text);
    }
  }

  function handleOptionSelect(optionText) {
    setMessages(prev => [...prev, { sender: 'user', text: optionText }]);
    const match = optionText.match(/\/[^\s]+/);
    const path = match ? match[0] : '';
    setSelectedPath(path);
    
    setWebSocketActive(true);
    connectSocket(() => {
      console.log('Enviando path:', path);
      sendMessage(path);
    });
  }

  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar show={showSidebar} onToggle={toggleSidebar} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100vh' }}>
        <Header
          onToggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
          selectedModel={selectedModel}
          onModelChange={setSelectedModel}
        />
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onOptionSelect={handleOptionSelect}
        />
        <InputArea
          onSend={handleNewMessage}
          setIsTyping={setIsTyping}
          selectedModel={selectedModel}
          step={step}
          webSocketActive={webSocketActive}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <WebSocketProvider>
      <MainApp />
    </WebSocketProvider>
  );
}