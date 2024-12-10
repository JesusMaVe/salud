import { createSlice } from '@reduxjs/toolkit'

const orchestationSlice = createSlice({
  name: 'layerTwoPlusOrchestation',
  initialState: {
    queryStep: 0,
    surveyId: null,
    employeeId: null,
  },
  reducers: {
    setQueryStep: (state, action) => {
      state.queryStep = action.payload
    },
    setSurveyTupleID: (state, action) => {
      state.surveyId = action.payload
    },
    setSurveyEmployeeID: (state, action) => {
      state.employeeId = action.payload
    }
  }
})


export const {
  setQueryStep,
  setSurveyTupleID,
  setSurveyEmployeeID
} = orchestationSlice.actions

export default orchestationSlice.reducer;