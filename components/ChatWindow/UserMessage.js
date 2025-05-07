export default function UserMessage({ text }) {
    return (
      <div style={{ textAlign: 'right', margin: '0.5rem 0' }}>
        <span style={{ background: '#007bff', color: '#fff', padding: '0.5rem', borderRadius: '8px' }}>{text}</span>
      </div>
    )
  }
  