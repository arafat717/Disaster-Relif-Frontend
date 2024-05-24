import { baseApi } from "./baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useCreateVolunteerMutation, useGetVolunteerQuery } =
  volunteerApi;
