import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["adddonation", "addcomment", "volunteerData", "testominalData"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
    }),
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
    createVolunteer: builder.mutation({
      query: (volunteerData) => ({
        url: "/volunteer",
        method: "POST",
        body: volunteerData,
      }),
      invalidatesTags: ["volunteerData"],
    }),
    getVolunteer: builder.query({
      query: () => "/volunteer",
      providesTags: ["volunteerData"],
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
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetAllDonerQuery,
  useCreateCommentMutation,
  useGetCommunityQuery,
  useCreateVolunteerMutation,
  useGetVolunteerQuery,
  useCreateTestominalMutation,
  useGetTestominalQuery,
} = baseApi;
