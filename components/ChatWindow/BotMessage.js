export default function BotMessage({ text }) {
  let content = text

  try {
    const parsed = JSON.parse(text)
    if (parsed.llm_response) {
      content = parsed.llm_response
    }
  } catch (e) {
    // Se não for JSON válido, deixa como está
  }

  return (
    <div style={{ textAlign: 'left', margin: '0.5rem 0', whiteSpace: 'pre-wrap' }}>
      <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(content) }} />
    </div>
  )
}

// Conversor simples de Markdown para HTML básico
function convertMarkdownToHtml(markdown) {
  return markdown
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **negrito**
    .replace(/\n/g, '<br/>') // Quebra de linha
}
