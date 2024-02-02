export const baseUrl= 'https://fakestoreapi.com'
export const baseUrlApi = `${baseUrl}/products`
// export const baseUrlMedia = ``

export const endpoints={
    fetchedProducts: {
        prod: '/products',
        single: (id?: number)=> `/products/${id}`
    }
}