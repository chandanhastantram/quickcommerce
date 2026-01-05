function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>
        QuickCommerce
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
        Shop smarter, not harder
      </p>
      <button style={{
        padding: '15px 40px',
        fontSize: '1.2rem',
        background: 'white',
        color: '#FF0000',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        Explore Products
      </button>
    </div>
  )
}

export default App
