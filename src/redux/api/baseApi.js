import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://l2-b2-frontend-path-assignment-6-server-starter-pack-plum.vercel.app/api/v1",
  }),
  tagTypes: ["adddonation", "addcomment", "volunteerData", "testominalData"],
  endpoints: (builder) => ({
    getAllDonatesPost: builder.query({
      query: () => "/donations",
      method: "GET",
      providesTags: ["adddonation"],
    }),
    getSingleDonatesPost: builder.query({
      query: (id) => `/donations/${id}`,
    }),
    createDonation: builder.mutation({
      query: (donationData) => ({
        url: "/donations",
        method: "POST",
        body: donationData,
      }),
      invalidatesTags: ["adddonation"],
    }),
    deleteDonation: builder.mutation({
      query: (id) => ({
        url: `/donations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["adddonation"],
    }),

    updateDonation: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/donations/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["adddonation"],
    }),

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
  useGetAllDonatesPostQuery,
  useGetSingleDonatesPostQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useCreateDonationMutation,
  useDeleteDonationMutation,
  useGetAllDonerQuery,
  useCreateCommentMutation,
  useGetCommunityQuery,
  useCreateVolunteerMutation,
  useGetVolunteerQuery,
  useCreateTestominalMutation,
  useGetTestominalQuery,
} = baseApi;
