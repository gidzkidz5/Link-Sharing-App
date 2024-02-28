import { auth, currentUser } from "@clerk/nextjs";
import axios from "axios";

const ProfileDetailsPage = async () => {
  const { userId } = auth();
  const user = await currentUser();

  await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/whatever`, {testobj: "test"})

  return (
    <>
      ProfileDetailsPage
      {userId}
      <br />
      currentUser: {user?.id}
      <br />
      email: {user?.emailAddresses[0].emailAddress}
      <br />
      first_name: {user?.firstName}
      <br />
      last_name: {user?.lastName}
    </>
  );
};

export default ProfileDetailsPage;
