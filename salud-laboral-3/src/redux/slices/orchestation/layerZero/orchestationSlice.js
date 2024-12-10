import { createSlice } from '@reduxjs/toolkit'

const orchestationSlice = createSlice({
  name: 'orchestation',
  initialState: {
    surveyRound: {
      queryStep: 0,
      surveyId: null,
      employeeId: null,
    }
  },
  reducers: {
    setQueryStep: (state, action) => {
      state.surveyRound.queryStep = action.payload
    },
    setSurveyTupleID: (state, action) => {
      state.surveyRound.surveyId = action.payload
    },
    setSurveyEmployeeID: (state, action) => {
      state.surveyRound.employeeId = action.payload
    }
  }
})


export const {
  setQueryStep,
  setSurveyTupleID,
  setSurveyEmployeeID
} = orchestationSlice.actions

export default orchestationSlice.reducer;