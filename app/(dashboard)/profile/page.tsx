import { auth, currentUser } from "@clerk/nextjs"



export default async function ProfilePage() {
    const { userId } = auth()
    const user = await currentUser()


    return (
        <>
            Profile Page
            <br/>
            {userId}
            <br/>
            currentUser: {user?.id}
            <br/>
            email: {user?.emailAddresses[0].emailAddress}
            <br/>
            first_name: {user?.firstName}
            <br/>
            last_name: {user?.lastName}
        </>
    )
}