export default function Header({ onToggleSidebar, showSidebar }) {
    return (
      <header style={{
        padding: '1rem',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        {
          !showSidebar && (
            <button
              onClick={onToggleSidebar}
              style={{
                background: '#fff',
                border: '1px solid #ccc',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(224, 16, 16, 0.1)'
              }}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO2ZUUrDQBCGP19yjLYUfFfBC5jqgXzQEyieQNsTeAPvokVr7KtFax98CawEVlhCLJmN2Wx0PpiXNDM7/+xOEqagKIoSMyNgBiyBHDCBLLdrToGhb/InwEfApM0PtgYmPpWPIXnjiBhIBMwc5yfgCEhq+roL+5IAKbBwYt1IAiwdxyJ5Cb8h4JvUiZUhwG3YupVvQ0BSauxGSVwCnxXns7h20ZIA73hlpx1gs6XJNlt8oxCArXJvd0CCCmhrB/59E4+BOfAIHDQsZidNfOpcXwlEmFiaeGQTl4owsQgo2ANend/fgMOYm/iqwu5K96yA/VjfxHXtoW0Bvk1c1+5DCPDxPa+w2y6O0J9o4qa+474/Rs88ko9KwC7wbBu2k0+JEL5VqAApugMl9Aj18gjlfR9svUQyWpw4sYp3SG2mjuPCBgo93D0uDXevJQGGdqRtIrF36XgdW/V1JMmneDKwW5d18BdTZtcWV15RFIVgfAGYi1z8WjJeNgAAAABJRU5ErkJggg==" // coloque o base64 correto aqui
                alt="Abrir Sidebar"
                style={{ width: '20px', height: '20px' }}
              />
            </button>
          )
        }
        <h1 style={{
            margin: 0,
            fontFamily: "Segoe UI",
            fontWeight: 600
            }}>
            Atlas
        </h1>

      </header>
    );
  }
  