import { baseApi } from "./baseApi";

const testominalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

export const { useCreateTestominalMutation, useGetTestominalQuery } =
  testominalApi;
