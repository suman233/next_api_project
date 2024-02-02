import { axiosInstance } from '@/api/axiosinstance'
import { Root } from '@/typescript/interface/products.interface'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Skeleton } from '@mui/material'

const productdetails = () => {
    const router = useRouter()
    const { slug } = router.query

    const { data, isLoading } = useQuery({
        queryKey: ['singleproduct', { slug }],
        queryFn: async () => {
            const data = await axiosInstance.get<Root>(
                // endpoints.fetchedProducts.prod
                `https://fakestoreapi.com/products/${slug}`
            )
            console.log(data.data);
            return data
        }
    })

    return (
        <Container>
            <Typography sx={{ color: 'black', fontSize: '30px', fontWeight: 'bold', mb: 3 }}>Product Details</Typography>
            {
                isLoading ? (
                    <>
                        <Card sx={{ maxWidth: 345 }}>

                            <Skeleton variant="rectangular" sx={{ backgroundColor: 'lightgray' }} height={240} />

                            <div>
                                <div>
                                    <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', mx:2 }} height={60}/>
                                </div>
                                <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', mx:2 }} height={100}/>
                                <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', mx:2 }} width={80}/>

                                <Skeleton variant="rounded" sx={{ backgroundColor: 'lightgray', mx:2 }} height={20} width={100}/>

                            </div>
                        </Card>
                    </>
                )
                    :
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={data?.data.image}
                            title={data?.data.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div" sx={{ color: 'black' }}>
                                {data?.data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data?.data.description}
                            </Typography>
                            <Typography sx={{ color: 'black' }}>
                                Price: ${data?.data.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained' size="small">ADD TO CART</Button>
                        </CardActions>
                    </Card>
            }

        </Container>
    )
}

export default productdetails