import axios from "axios";


 export async function fetchEvents(){
     try {
        const response=await axios.get("http://127.0.0.1:5001/event");
         return response.data;

     } catch (error) {
             console.log(error);
     }
 }

export async function saveEvent(eventData){
    try {
        const response=await axios.post("http://127.0.0.1:5001/event",eventData);
        console.log("Successful");
        return response.data;
        
    } catch (error) {
        console.log(error);
    }
}

export async function deleteEvent(artistName) {
  try {
    const response = await axios.delete(`http://127.0.0.1:5001/event/${encodeURIComponent(artistName)}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


export async function deleteAll(){
  try {
        const response=await axios.delete("http://127.0.0.1:5001/event");
       return response.data;
  } catch (error) {
       console.log(error);
   }
}

// export async function fetchStudentByRoll(roll){
//     try {
//         const response=await axios.get(`http://127.0.0.1:5000/student/${roll}`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }



export async function updateEvent(eventId, eventData) {
  try {
    const response = await axios.put(`http://127.0.0.1:5001/event/${eventId}`, eventData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

