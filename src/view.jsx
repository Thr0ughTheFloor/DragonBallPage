import Style from './view.module.css'
import { useEffect, useState } from 'react'

import { ApiDB } from './api/api.js'

import { Cards } from './components/card'
import { Modal } from 'bootstrap'
import { Menu } from './components/menu'


export default function View() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        ApiDB.get(`/characters?page=${page}`)
            .then((res) => {
                setData(res.data.items);
                setErro(false);
            })
            .catch((error) => {
                if (error.response.status === 404 || null === data) {
                    setErro(true);
                }
                console.error(error);
            });
    }, [page]);

    console.log(data)

    return (
        <>
            <Menu name01='Home Page' name02='Personagens' />
            <section className={Style.wrapPage}>
                <h1>Dragon Ball API</h1>
                <div className={Style.btn_conteiner}>
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}>Página Anterior</button>
                    <h4>{page}</h4>
                    <button onClick={() => setPage(page + 1)} disabled={page === 6}>Próxima Página</button><br />
                </div>
                <div className={Style.wrapCards}>
                    {data.map((characters) => (
                        <div key={characters.id} className='cards-conteiner' style={{ width: '288px' }}>
                            <Cards name={characters.name} image={characters.image} race={characters.race} gender={characters.gender} baseKi={characters.ki} totalKI={characters.maxKi} />
                        </div>
                    ))}
                </div>
                <div className={Style.btn_conteiner}>
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}>Página Anterior</button>
                    <h4>{page}</h4>
                    <button onClick={() => setPage(page + 1)} disabled={page === 6}>Próxima Página</button><br />
                </div>
            </section>
        </>
    )
}