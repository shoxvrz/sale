import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com/products"}),
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: () => ''
        })
    })
})

export const {useGetAllDataQuery} = dataApi;