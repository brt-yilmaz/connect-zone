import NewConnectZoneForm from "@/components/connections/NewConnectZoneForm";
import { useRouter } from "next/router";

function NewMeetupPage() {
  const router = useRouter();

  async function handleAddZone(enteredZoneData) {
    const response = await fetch("/api/new-zone", {
      method: "POST",
      body: JSON.stringify(enteredZoneData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  }

  return <NewConnectZoneForm onAddZone={handleAddZone} />;
}

export default NewMeetupPage;
