import { List, ListItemButton, ListItemText, Paper } from '@mui/material';

// Coloque essa função *antes* da definição de BotMessage
function convertMarkdownToHtml(markdown) {
  return markdown
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **negrito**
    .replace(/\n/g, '<br/>'); // quebra de linha
}

export default function BotMessage({ text, onOptionSelect }) {
  let content = text;
  let options = [];

  try {
    const parsed = JSON.parse(text);
    console.log(parsed)
    if (parsed.llm_response) content = parsed.llm_response;
    if (parsed.options) options = parsed.options;
  } catch (e) {
    // texto simples, não JSON
  }

  return (
    <div style={{ textAlign: 'left', margin: '0.5rem 0', whiteSpace: 'pre-wrap' }}>
      <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(content) }} />
      {options.length > 0 && (
        <List sx={{ mt: 2 }}>
          {options.map((opt, i) => (
            <Paper
              key={i}
              elevation={3}
              sx={{
                mb: 1,
                borderRadius: 2,
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: 6,
                },
              }}
            >
              <ListItemButton
                onClick={() => onOptionSelect(opt)}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: '#e0f7fa',
                  },
                  '&:hover': {
                    backgroundColor: '#f1f1f1',
                  },
                }}
              >
                <ListItemText primary={opt} />
              </ListItemButton>
            </Paper>
          ))}
        </List>
      )}
    </div>
  );
}