import { useState } from 'react'
import { Box, InputAdornment, IconButton, Stack, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { analyzeEndpointsApi } from '../../api'

export default function InputArea({ onSend, setIsTyping }) {
  const [input, setInput] = useState('')

  async function handleSend() {
    if (!input.trim()) return
    onSend({ sender: 'user', text: input })
    setIsTyping(true)
    try {
      const res = await analyzeEndpointsApi('gpt-4', input)
      onSend({ sender: 'bot', text: JSON.stringify(res.data, null, 2) })
    } catch (err) {
      onSend({ sender: 'bot', text: 'Erro na API' })
    }
    setIsTyping(false)
    setInput('')
  }

  return (
    <Box sx={{ px: 10, py: 2, backgroundColor: '#fafafa' }}>
  <Stack direction="row">
    <TextField
      fullWidth
      multiline
      minRows={2}
      maxRows={4}
      placeholder="Digite sua pergunta..."
      variant="outlined"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      sx={{
        borderRadius: '25px',
        backgroundColor: 'white',
        '& .MuiOutlinedInput-root': {
          borderRadius: '25px',
          paddingRight: '8px',
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ alignSelf: 'flex-end' }}>
            <IconButton
              color="primary"
              onClick={handleSend}
              sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                borderRadius: '50%',
                width: 36,
                height: 36,
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              }}
            >
              <SendIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  </Stack>
</Box>

  )
}
