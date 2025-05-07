export default function Sidebar({ onToggle, show }) {
    if (!show) return null;
  
    return (
      <aside
        style={{
          width: '250px',
          backgroundColor: '#f0f4f9',
          padding: '1rem',
          boxSizing: 'border-box',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <button
          onClick={onToggle}
          style={{
            marginBottom: '1rem',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABe0lEQVR4nO2ZQU7DMBBFH5scowUk9hCJC9DCeVjBCUCcANoTcAMOA4gSuqWC0gWbSEaRXMmyghU7TWJL86TZRJ3x/LEnjqYgCIIQM/vAHFgCJaB6slKvOQPGoclfAD89Jq3+sTUwDal8DMkrQ8TIR8DccH4DzoCsoa+5cCgZMAEWRqwHnwBLw7FK3oddCNgyMWIVeGA2bNPKdyEgsxq7VRK3wG/N+aye3XQkIDie7bQHbBxNtnH4RiEAXeVkd8AHEdDVDkgTO8j1hfkMHKTWxDmwMnwuuxLQhW9uJb+q+fqMVsAx8Gn89gs4TaWJT6zKK+AJuKuxKG/iV0cs5bBgAbtu4pchBDQl9Ag9Atc1FqWAQZq4r9foYYt47ZwCfXNLxFVqArYiqs+Id+CIBAW4EAG+yA5YyBFK8giVqQ+2PiIZLU6NWNUd0ZiZ4bjQgfoe7p5bw917nwBjPdJWkdi373gdXfV1JMlPCGSkt64Y4C+mQq/tXXlBEAR64w8raVz9E4nYLwAAAABJRU5ErkJggg==" // ícone fechar
            alt="Fechar Sidebar"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
        <p>Nova Conversa</p>
        <ul>
          <li>Conversa 1</li>
          <li>Conversa 2</li>
        </ul>
      </aside>
    );
  }
  