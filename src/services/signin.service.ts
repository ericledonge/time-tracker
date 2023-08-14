// @ts-ignore
import { apiClient } from "./api.service.ts";

type signInResponse = {
  authenticated: boolean;
  error: unknown;
};

export const signInWithEmail = async (
  email: string,
  password: string
): Promise<signInResponse> => {
  console.log("signInWithEmail");

  try {
    // @ts-ignore
    const response = await apiClient.auth.signInWithPassword({
      email,
      password,
    });

    return {
      authenticated: response?.user?.aud === "authenticated",
      error: "",
    };
  } catch (error) {
    return {
      authenticated: false,
      error,
    };
  }
};

export const signInWithEmailMocked = async (
  email: string,
  password: string
) => {
  console.log(`signInWithEmailMocked: ${email} ${password}`);

  return {
    authenticated: true,
    error: "",
  };
};

// No network
// {
//   "data": {
//     "user": null,
//     "session": null
//   },
//   "error": {
//     "name": "AuthRetryableFetchError",
//     "message": "Failed to fetch",
//     "status": 0
//   }
// }

// Success
// {
//   "data": {
//   "user": {
//     "id": "251486ef-5f35-43d2-b7c6-67d14e578af8",
//       "aud": "authenticated",
//       "role": "authenticated",
//       "email": "eric.ledonge@gmail.com",
//       "email_confirmed_at": "2023-06-11T20:16:43.660333Z",
//       "phone": "",
//       "confirmed_at": "2023-06-11T20:16:43.660333Z",
//       "last_sign_in_at": "2023-07-07T09:19:30.542221715Z",
//       "app_metadata": {
//       "provider": "email",
//         "providers": [
//         "email"
//       ]
//     },
//     "user_metadata": {},
//     "identities": [
//       {
//         "id": "251486ef-5f35-43d2-b7c6-67d14e578af8",
//         "user_id": "251486ef-5f35-43d2-b7c6-67d14e578af8",
//         "identity_data": {
//           "email": "eric.ledonge@gmail.com",
//           "sub": "251486ef-5f35-43d2-b7c6-67d14e578af8"
//         },
//         "provider": "email",
//         "last_sign_in_at": "2023-06-11T20:16:43.657473Z",
//         "created_at": "2023-06-11T20:16:43.657522Z",
//         "updated_at": "2023-06-11T20:16:43.657522Z"
//       }
//     ],
//       "created_at": "2023-06-11T20:16:43.654373Z",
//       "updated_at": "2023-07-07T09:19:30.543821Z"
//   },
//   "session": {
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjg4NzI1MTcwLCJpYXQiOjE2ODg3MjE1NzAsInN1YiI6IjI1MTQ4NmVmLTVmMzUtNDNkMi1iN2M2LTY3ZDE0ZTU3OGFmOCIsImVtYWlsIjoiZXJpYy5sZWRvbmdlQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNjg4NzIxNTcwfV0sInNlc3Npb25faWQiOiI5MTAxZTEwOS01ZGMxLTRkMjUtODVhNi01ZDFmM2I3YTdhYmIifQ.yGTa75O8kRqUwBNz5L6MMOWdE89ymHv_hC_TM_k-3k0",
//       "token_type": "bearer",
//       "expires_in": 3600,
//       "refresh_token": "yW7VtzVwAs4GaW-RqG8-tg",
//       "user": {
//       "id": "251486ef-5f35-43d2-b7c6-67d14e578af8",
//         "aud": "authenticated",
//         "role": "authenticated",
//         "email": "eric.ledonge@gmail.com",
//         "email_confirmed_at": "2023-06-11T20:16:43.660333Z",
//         "phone": "",
//         "confirmed_at": "2023-06-11T20:16:43.660333Z",
//         "last_sign_in_at": "2023-07-07T09:19:30.542221715Z",
//         "app_metadata": {
//         "provider": "email",
//           "providers": [
//           "email"
//         ]
//       },
//       "user_metadata": {},
//       "identities": [
//         {
//           "id": "251486ef-5f35-43d2-b7c6-67d14e578af8",
//           "user_id": "251486ef-5f35-43d2-b7c6-67d14e578af8",
//           "identity_data": {
//             "email": "eric.ledonge@gmail.com",
//             "sub": "251486ef-5f35-43d2-b7c6-67d14e578af8"
//           },
//           "provider": "email",
//           "last_sign_in_at": "2023-06-11T20:16:43.657473Z",
//           "created_at": "2023-06-11T20:16:43.657522Z",
//           "updated_at": "2023-06-11T20:16:43.657522Z"
//         }
//       ],
//         "created_at": "2023-06-11T20:16:43.654373Z",
//         "updated_at": "2023-07-07T09:19:30.543821Z"
//     },
//     "expires_at": 1688725170
//   }
// },
//   "error": null
// }
