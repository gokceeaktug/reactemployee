import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';


function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [place, setPlace] = useState('');
    const [address, setAddress] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName  || !date || !place || !address) {
            return Swal.fire({
                icon: 'error',
                title: 'Hata!',
                text: 'Alanları doldurunuz.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            date,
            place,
            address,
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Eklendi!',
            text: `${firstName} ${lastName} eklendi.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Kayıt Ekle</h1>
                <label htmlFor="firstName">Ad</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Soyad</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="date">Doğum Tarihi</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <label htmlFor="place">Doğum Yeri</label>
                <input
                    id="place"
                    type="text"
                    name="place"
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                />
                <label htmlFor="address">Adres</label>
                <div className='form-group' id='address' type='text' value={address} onChange={e=>setAddress(e.target.value)}>
                    <select className='form-select' placeholder='Şehir giriniz'>
                    <option>Şehir Giriniz</option>
                    <option>Muğla</option>
                    </select>
                    
                    <select className='form-select' placeholder='İlçe giriniz'>
                    <option>İlçe Giriniz</option>
                    <option>Köyceğiz</option>
                    <option>Fethiye</option>
                    <option>Dalaman</option></select>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Ekle" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Geri Dön"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add