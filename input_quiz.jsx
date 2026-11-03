
import { useState } from 'react';

function InputQuiz() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');

    return (
        <div>
            <h2>Form Data Diri</h2>

            <div>
                <label>Nama:</label><br />
                <input
                    type="text"
                    placeholder="Masukkan nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
            </div>

            <br />

            <div>
                <label>Email:</label><br />
                <input
                    type="email"
                    placeholder="Masukkan email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <br />

            <div>
                <label>Alamat:</label><br />
                <input
                    type="text"
                    placeholder="Masukkan alamat"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                />
            </div>

            <hr />

            <h2>Hasil Inputan</h2>
            <p>Nama: {nama}</p>
            <p>Email: {email}</p>
            <p>Alamat: {alamat}</p>
        </div>
    );
}

export default InputQuiz;


