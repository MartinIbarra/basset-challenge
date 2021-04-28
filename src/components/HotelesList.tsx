import React, { useState, useEffect } from 'react'
import Hotel from './Hotel'
import { Typography } from '@material-ui/core'

const url = 'https://basset.free.beeceptor.com/reactjs-test/accommodations'
const staticJson = '/clusters.json' // Como la api solo acepta 50 peticiones por día, puede tirar un 429, por eso copié el JSON

const HotelesList: React.FC = () => {

    const [ hoteles, setHoteles ] = useState([])
    const [ error, setError ] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch(staticJson,
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(res => {
            if(res.ok) {
                return res.json()
            }
            throw res
        })
        .then(data => {
            setHoteles(data.clusters)
        })
        .catch(err => {
            setError(true)
        })
    }

    if(error) return <Typography component="h1">Hubo un error al cargar los archivos..</Typography>

    return (
        <div>
            {
                hoteles && hoteles.length > 0 && hoteles.map(hotel => {
                    let recommended = false
                    let rank:number[] = []
                    hoteles.map(num => {
                        rank.push(num['rank'])
                    })
                    if(Math.min(...rank) === hotel['rank']){
                        recommended = true
                    }
                    return (
                        <Hotel 
                            name={hotel["name"]}
                            address={hotel["address"]}
                            key={hotel["id"]}
                            stars={hotel["stars"]}
                            images={hotel['images']}
                            amenities={hotel['amenities']}
                            refundable={hotel['rates'][0]['refundable']}
                            total={hotel['rates'][0]['total']}
                            night={hotel['rates'][0]['nightly_basis']}
                            base={hotel['rates'][0]['base_rate']}
                            commision={hotel['rates'][0]['commission']}
                            recommended={recommended}
                        />
                    )
                })
            }
        </div>
    )
}

export default HotelesList
