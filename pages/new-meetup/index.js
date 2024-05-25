import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  
    return (
    <NewMeetupForm onAddMeetup={addMeetHandler}/>
  )
}

export default NewMeetupPage;