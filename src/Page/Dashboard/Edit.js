import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [date, setDate] = useState(selectedEmployee.date);
    const [place, setPlace] = useState(selectedEmployee.place);
    const [address, setAddres] = useState(selectedEmployee.address);
    const [ilce, setIlce] = useState(selectedEmployee.address);
    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !date ||!place ||!address) {
            return Swal.fire({
                icon: 'error',
                title: 'Hata!',
                text: 'Gerekli alanları doldurunuz.',
                
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            date,
            place,
            address,
            
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Güncellendi!',
            text: `${employee.firstName} ${employee.lastName} güncellendi.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Güncelle</h1>
                <label htmlFor="firstName">Ad</label>
                <input
                    id="firstName"
                    type="text"
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
                <div className='form-group' id='address' type='text' value={address} onChange={e=>setAddres(e.target.value)}>
                    <select className='form-select' placeholder='Şehir giriniz'>
                    <option>Şehir Giriniz</option>
                    <option>Muğla</option></select>
                    <select className='form-select' placeholder='İlçe giriniz'>
                    <option>İlçe Giriniz</option>
                    <option>Köyceğiz</option>
                    <option>Fethiye</option>
                    <option>Dalaman</option></select>
                </div>
                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Güncelle" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Geri Dön"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit