import { createSlice } from '@reduxjs/toolkit';

const AgeUtil = (year, month, day) => {
  if (year === '--' || month === '--' || day === '--') return { year: '--', month: '--', day: '--' };

  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  var ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  var ageMonths = currentDate.getMonth() - birthDate.getMonth();
  var ageDays = currentDate.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); 
  }

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  return { years: ageYears, months: ageMonths, days: ageDays };
};

export const AgeSlice = createSlice({
  name: 'age',
  initialState: {
    years: '--',
    months: '--',
    days: '--',
    calculatedYears: '--',
    calculatedMonths: '--',
    calculatedDays: '--',
  },
  reducers: {
    setYears: (state, action) => {
      state.years = action.payload;
    },
    setMonths: (state, action) => {
      state.months = action.payload;
    },
    setDays: (state, action) => {
      state.days = action.payload;
    },
    calculateAge: (state) => {
      const { years, months, days } = state;
      const age = AgeUtil(years, months, days);
      state.calculatedYears = age.years;
      state.calculatedMonths = age.months;
      state.calculatedDays = age.days;
    },
  },
});

export const { setYears, setMonths, setDays, calculateAge } = AgeSlice.actions;

export default AgeSlice.reducer;
