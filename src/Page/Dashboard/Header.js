import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Personel Yönetim Sistemi</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Kayıt Ekle</button>
            </div>
        </header>
    )
}

export default Header