import TestComponent from "@/components/TestComponent";
import { auth, currentUser } from "@clerk/nextjs";


const ProfileDetailsPage = async () => {
  const { userId } = auth();
  const user = await currentUser();

  
  

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
      <br/>
      {/* <Button text="Testing Btn" onClick={(e)=>testing(e)}/> */}
      <TestComponent/>
  
    </>
  );
};

export default ProfileDetailsPage;
