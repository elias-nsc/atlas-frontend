'use client';
import { useState } from 'react';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { CardContent } from '../components/cardContent';
import { motion } from 'framer-motion';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'; // 👈 Novo import

export default function Home() {
  const [query, setQuery] = useState('');
  const [model, setModel] = useState('mistral');
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState<{ role: string; content: string }[]>([]);
  const [options, setOptions] = useState<string[]>([]);

  const sendQuery = async () => {
    if (!query) return;
    setLoading(true);
    setChat([...chat, { role: 'user', content: query }]);
    try {
      const response = await axios.post('http://localhost:8000/analyze-endpoints', {
        user_query: query,
        model_name: model,
      });
      setChat((prev) => [...prev, { role: 'assistant', content: response.data.llm_response }]);
      setOptions(response.data.options || []);
    } catch (error) {
      setChat((prev) => [...prev, { role: 'assistant', content: 'Erro ao analisar os endpoints.' }]);
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Atlas</h1>

        <div className="flex gap-2 mb-6">
          <Input
            className="flex-1"
            placeholder="Digite sua pergunta sobre a API..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendQuery()}
          />
          <Button onClick={sendQuery} disabled={loading}>
            {loading ? 'Analisando...' : 'Enviar'}
          </Button>
        </div>

        <div className="space-y-4">
        {chat.map((msg, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`p-4 rounded-xl ${
      msg.role === 'user' ? 'bg-blue-800 self-end' : 'bg-gray-800'
    }`}
  >
    <div className="whitespace-pre-wrap text-white">
      <ReactMarkdown>
        {msg.content}
      </ReactMarkdown>
    </div>
  </motion.div>
))}

          {options.length > 0 && (
            <Card className="bg-gray-900 border border-gray-700">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Opções recomendadas:</h2>
                <ul className="space-y-2">
                  {options.map((opt, i) => (
                    <li
                      key={i}
                      className="bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer"
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
