import { axiosInstance } from '@/api/axiosinstance'
import { endpoints } from '@/api/endpoints'
import { Root } from '@/typescript/interface/products.interface'
import { Card, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'

const product = () => {
    const { data, isSuccess } = useQuery({
        queryKey: ['prods'],
        queryFn: async () => {
            const data = await axiosInstance.get<Root[]>(
                endpoints.fetchedProducts.prod
            )
            console.log(data.data);
            return data
        }
    })

    return (
        <div>
            <Typography variant='h3' sx={{ color: 'black', fontSize: '35px', textAlign: 'center' }}>Product page</Typography>
            {
                data?.data.map((item, key) => {
                    return (
                        <>
                            <Card key={key}>
                                <h1>{item.title}</h1>
                                <img src={item.image} alt="" />
                            </Card>
                        </>
                    )
                })
            }
        </div>
    )
}

export default product