import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../../../../lib/sdk/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const fromLayerZeroGetUserInfo = createAsyncThunk('firebase/currentUser',
  async (_, { rejectWithValue }) => {
    try {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth,
          async (user) => {
            if (user) {
              const token = await user.getIdTokenResult(true)
              if (token.length > 0) {
                const { claims, token: tokenString } = token
                if (claims['role'] === 'admin') {
                  resolve({
                    userData: {
                      email: user.email,
                      uid: user.uid,
                      token: tokenString,
                      claim: claims['role']
                    }
                  })
                } else {
                  resolve({
                    userData: {
                      email: user.email,
                      uid: user.uid,
                      token: tokenString,
                    }
                  })
                }
              } else {
                claimsCallback(null)
              }
            }
            reject('common rejection - no user')
          }
        )
      })
    } catch (sdkErr) {
      rejectWithValue(`thunk rejection - ${sdkErr.message}`)
    }

  }   // callback de asynThunk
)

const authLogicalSlice = createSlice({
  name: 'gAuth',
  initialState: {
    currentUser: null,
    loadingAuthSDK: true,
    errorInAuthSDK: false,
    currentUser: null,
    userClaim: null,
  },
  reducers: {
    setUserUID: (state, action) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase('firebase/currentUser/pending', (state, action) => {
        state.loadingAuthSDK = true;
      })
      .addCase('firebase/currentUser/fulfilled', (state, action) => {
        if (action.payload.userData.claim) {
          state.currentUser = action.payload.userData;
          state.userClaim = action.payload.userData.claim;
          state.loadingAuthSDK = false;
        }
        state.currentUser = action.payload.userData;
      })
      .addCase('firebase/currentUser/rejected', (state, action) => {
        state.errorInAuthSDK = action;
        state.loadingAuthSDK = false;
      })
  }
})

export const { setUserUID } = authLogicalSlice.actions
export default authLogicalSlice.reducer;