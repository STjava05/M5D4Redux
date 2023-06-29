
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';


const ApiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdkZDIyOTM5N2RmMTAwMTRkZGRkYjgiLCJpYXQiOjE2ODc0MjM1OTIsImV4cCI6MTY4ODYzMzE5Mn0.zshdAertgqrJND9BmOfjOUW4RU_gpklt_9AZzOtUPUU"

 export const fetchCommenti = createAsyncThunk(
  'commenti/fetchCommenti',
  async () => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      headers: {
        Authorization: ApiKey
      }
    })
    const data = await response.json()
    return data
  }
)



const initialState = {
  apiArray: [],
  reviewArray: [],  
  isOpen: false,
  
 
  categoria: "",

};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    apiCall: (state, action) => {
      state.apiArray = action.payload;
      
    },

    toggleDesc: (state, action) => {
      const index = action.payload; // L'indice viene passato come payload
      state.apiArray[index].isDescrizioneAperta = !state.apiArray[index].isDescrizioneAperta;


    },
    setCategory: (state, action) => {
      state.categoria = action.payload;
    },
    setSearch: (state, action) => {
      const search = action.payload;
      console.log(search);
      state.apiArray = state.apiArray.filter((item) => {

        return item.title.toLowerCase().includes(search);
      }
      )
      console.log(state.apiArray);
    },
    openModal: (state) => {
      state.isOpen = !state.isOpen;
      
    }


  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommenti.fulfilled, (state, action) => {
      state.reviewArray = action.payload
    })
    
    builder.addCase(fetchCommenti.pending, (state, action) => {
      state.reviewArray = []
    })
    
  }

});


export const { apiCall, toggleDesc,setCategory,setSearch,openModal } = apiSlice.actions;
export default apiSlice.reducer;