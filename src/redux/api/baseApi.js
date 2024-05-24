import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["adddonation", "addcomment", "volunteerData", "testominalData"],
  endpoints: (builder) => ({
    getAllDoner: builder.query({
      query: () => "/doners",
      method: "GET",
    }),
    createComment: builder.mutation({
      query: (commentData) => ({
        url: "/community",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: ["addcomment"],
    }),
    getCommunity: builder.query({
      query: () => "/community",
      providesTags: ["addcomment"],
    }),

    createTestominal: builder.mutation({
      query: (volunteerData) => ({
        url: "/testominal",
        method: "POST",
        body: volunteerData,
      }),
      invalidatesTags: ["testominalData"],
    }),
    getTestominal: builder.query({
      query: () => "/testominal",
      providesTags: ["testominalData"],
    }),
  }),
});

export const {
  useGetAllDonerQuery,
  useCreateCommentMutation,
  useGetCommunityQuery,
  useCreateTestominalMutation,
  useGetTestominalQuery,
} = baseApi;
