import { createContext, useContext, useRef, useState } from 'react';

const WebSocketContext = createContext();

export function WebSocketProvider({ children }) {
  const ws = useRef(null);
  const [connected, setConnected] = useState(false);
  const messageCallbackRef = useRef(null);

  function connectSocket(onOpenCallback) {
    if (!ws.current || ws.current.readyState === WebSocket.CLOSED) {
      ws.current = new WebSocket('ws://localhost:8011/ws');
      
      ws.current.onopen = () => {
        console.log('WebSocket conectado');
        setConnected(true);
        if (onOpenCallback) onOpenCallback();
      };
      
      ws.current.onclose = () => {
        console.log('WebSocket desconectado');
        setConnected(false);
      };
      
      ws.current.onmessage = (e) => {
        try {
          const data = JSON.parse(e.data);
          console.log('Mensagem recebida:', data);
          if (messageCallbackRef.current) {
            messageCallbackRef.current(data);
          }
        } catch (err) {
          console.error('Erro ao parsear mensagem:', err);
        }
      };
      
      ws.current.onerror = (error) => {
        console.error('Erro no WebSocket:', error);
      };
    }
  }

  function sendMessage(message) {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      const messageToSend = typeof message === 'string' ? message : JSON.stringify(message);
      console.log('Enviando mensagem:', messageToSend);
      ws.current.send(messageToSend);
    } else {
      console.error('WebSocket não está conectado');
    }
  }

  function setOnMessage(callback) {
    messageCallbackRef.current = callback;
  }

  return (
    <WebSocketContext.Provider value={{ 
      sendMessage, 
      setOnMessage, 
      connectSocket, 
      connected 
    }}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocket() {
  return useContext(WebSocketContext);
}