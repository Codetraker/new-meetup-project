import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title: 'First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',
        address:'some address, city, 234566'
    },
    {
        id:'m2',
        title: 'Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg',
        address:'some address, city, 234566'
    },
];

function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS}/>
  )
}

export default HomePage;