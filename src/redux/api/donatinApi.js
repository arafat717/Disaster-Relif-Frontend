import { baseApi } from "./baseApi";

const donationApi = baseApi.injectEndpoints({
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
  }),
});

export const {
  useGetAllDonatesPostQuery,
  useCreateDonationMutation,
  useDeleteDonationMutation,
  useUpdateDonationMutation,
  useGetSingleDonatesPostQuery,
} = donationApi;
