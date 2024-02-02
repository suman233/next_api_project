import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import React from 'react'
import { Container, Grid, Skeleton, Typography } from "@mui/material";
import assest from "@/json/assest";
import Link from "next/link";
import styles from '@/styles/about.module.css'
import { axiosInstance } from '@/api/axiosinstance'
import { endpoints } from '@/api/endpoints'
import { Root } from '@/typescript/interface/products.interface'
import { useQuery } from 'react-query'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoading, data, isSuccess } = useQuery({
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
    <>

      {/* <Typography sx={{ mx: 5, textAlign: 'center' }}>Home Page</Typography> */}
      <Container>

        <Grid container>
          {
            isLoading ? (
              <>
                <Grid item xs={6}>
                  <Skeleton variant="rectangular" sx={{ backgroundColor: 'lightgray', borderRadius: '2%' }} width={520} height={400} />
                  <div>
                    <div>
                      <Skeleton variant="text" sx={{ backgroundColor: 'lightgray' }} width={200} />
                    </div>
                    <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', my: 2, height: 50, width: 400 }} />

                    <div>
                      <Skeleton variant="circular" width={40} height={40} sx={{ backgroundColor: 'lightgray', float: 'left' }} />
                      <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', height: 50, width: 200, float: 'right', marginRight: 10, }} />
                    </div>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <Skeleton variant="rectangular" sx={{ backgroundColor: 'lightgray', borderRadius: '2%' }} width={520} height={400} />
                  <div>
                    <div>
                      <Skeleton variant="text" sx={{ backgroundColor: 'lightgray' }} width={200} />
                    </div>
                    <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', my: 2, height: 50, width: 400 }} />
                    <div>
                      <Skeleton variant="circular" width={40} height={40} sx={{ backgroundColor: 'lightgray', float: 'left' }} />
                      <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', height: 50, width: 200, float: 'right', marginRight: 10, }} />
                    </div>
                  </div>
                </Grid>

              </>
            ) :
              <>
                <Grid item xs={6}>
                <Link href={`/${data?.data[0]?.id}`}><img className={styles.abtimg} 
                src={data?.data[0].image} alt="" width={520} height={400} style={{ borderRadius: '2%' }} /></Link>
                  <Link href={`/${data?.data[0]?.id}`} style={{ textDecoration: 'none' }}><Typography color={'blue'}>{data?.data[0].category.toUpperCase()}</Typography></Link>
                  <p style={{ color: 'black', fontSize: '24px', fontWeight: 'bold', marginRight: '50px' }}>{data?.data[0].title}</p>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <img src={assest.avatar1} alt="" style={{ borderRadius: '50%' }} width={40} />
                    </div>
                    <p style={{ marginLeft: '10px' }}>Mario Sanchez &nbsp; • &nbsp; October 21, 2022</p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Link href={`/${data?.data[1]?.id}`}><img src={data?.data[1].image} className={styles.abtimg} alt="" 
                  width={520} height={400} style={{ borderRadius: '2%' }} /></Link>
                  <Link href={`/${data?.data[1].id}`} style={{ textDecoration: 'none' }}><Typography color={'violet'}>{data?.data[1].category.toUpperCase()}</Typography></Link>
                  <p style={{ color: 'black', fontSize: '24px', fontWeight: 'bold', marginRight: '50px' }}>{data?.data[1].title}</p>
                  <div style={{ display: 'flex' }}>
                    <div>
                      <img src={assest.avatar2} alt="" style={{ borderRadius: '50%' }} width={40} />
                    </div>
                    <p style={{ marginLeft: '10px' }}>Joshua Wood &nbsp; • &nbsp; October 21, 2022</p>
                  </div>
                </Grid>
              </>
          }

        </Grid>
        <Grid container spacing={2} my={4}>
          {
            isLoading ? (
              <>

                <Grid item xs={4}>
                  <Skeleton variant="rectangular" sx={{ backgroundColor: 'lightgray', borderRadius: '10%' }} width={300} height={360} />

                  <div>
                    <div>
                      <Skeleton variant="text" sx={{ backgroundColor: 'lightgray' }} width={200} />
                    </div>
                    <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', borderRadius: '10%' }} />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <Skeleton variant="rectangular" sx={{ backgroundColor: 'lightgray', borderRadius: '10%' }} width={300} height={360} />

                  <div>
                    <div>
                      <Skeleton variant="text" sx={{ backgroundColor: 'lightgray' }} width={200} />
                    </div>
                    <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', borderRadius: '10%' }} />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <Skeleton variant="rectangular" sx={{ backgroundColor: 'lightgray', borderRadius: '10%' }} width={300} height={360} />

                  <div>
                    <div>
                      <Skeleton variant="text" sx={{ backgroundColor: 'lightgray' }} width={200} />
                    </div>
                    <Skeleton variant="text" sx={{ backgroundColor: 'lightgray', borderRadius: '10%' }} />
                  </div>
                </Grid>
              </>

            ) :
              data?.data.slice(2).map((item, index) => {
                return (
                  <>
                    <Grid item xs={4} key={index}>
                    <Link href={`/${item.id}`}><img src={item.image} className={styles.abtimg} alt="" 
                    style={{ borderRadius: '10%' }} width={300} height={360} /></Link>
                      <div>
                        <div style={{ display: 'flex' }}>
                          <Link href={`/${item.id}`} style={{ textDecoration: 'none' }}><p style={{ color: 'blue' }}>{item.category.toUpperCase()}</p></Link>
                          <Link href={`/${item.id}`} style={{ textDecoration: 'none' }}><p style={{ marginLeft: '10px', color: 'brown' }}>Price: ${item.price}</p></Link>
                        </div>
                        <Typography sx={{ color: 'black' }}>{item.title}</Typography>
                      </div>
                    </Grid>
                    {/* <Grid item xs={4}>
            <img src={assest.gallery2} className={styles.abtimg} alt="" style={{ borderRadius: '10%' }} width={300} height={360} />
            <div>
              <div style={{ display: 'flex' }}>
                <Link href="" style={{ textDecoration: 'none' }}><p style={{ color: 'blue' }}>LIFESTYLE</p></Link>
                <Link href="" style={{ textDecoration: 'none' }}><p style={{ marginLeft: '10px', color: 'green' }}>PERSONAL GROWTH</p></Link>
              </div>
              <Typography>Every Next Level of Your Life Will Demand a Different You</Typography>
            </div>
          </Grid>
          <Grid item xs={4}>
            <img src={assest.gallery3} className={styles.abtimg} alt="" style={{ borderRadius: '10%' }} width={300} height={360} />
            <div>
              <Link href="" style={{ textDecoration: 'none' }}><p style={{ color: 'brown' }}>TRAVEL</p></Link>
              <p>This Bread Pudding Will Give You All the Fall Feels</p>
            </div>
          </Grid> */}
                  </>
                )
              })
          }
        </Grid>

      </Container >

    </>
  );
}
