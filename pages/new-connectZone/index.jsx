import NewConnectZoneForm from "@/components/connections/NewConnectZoneForm";

function NewMeetupPage() {
  function handleAddZone(enteredZoneDate) {
    console.log(enteredZoneDate);
  }

  return <NewConnectZoneForm onAddZone={handleAddZone} />;
}

export default NewMeetupPage;
