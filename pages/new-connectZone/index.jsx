import NewConnectZoneForm from "@/components/connections/NewConnectZoneForm";
import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>Add a new connect zone</title>
        <meta
          name={"description"}
          content={"Add new connect zone and share with your friends"}
        />
      </Head>
      <NewConnectZoneForm onAddZone={handleAddZone} />;
    </>
  );
}

export default NewMeetupPage;
