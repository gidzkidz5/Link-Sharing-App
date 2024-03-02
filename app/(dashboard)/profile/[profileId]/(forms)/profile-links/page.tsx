
import FullForm from "../../components/FullForm";


const ProfileIdPage = async () => {
//    const { userId } = auth()
//    const user = await currentUser()
//     if (!userId) {
//         redirect('/')
//         return null
//     }
    
    return (
        <>
            <div className="grid grid-cols-5 gap-4 sm:w-full h-full mx-4 sm:mx-auto">
                <div className="bg-white rounded-xl col-span-2 hidden md:block">
                {/* phone overlay */}
          
                </div>
                <FullForm/>

            </div>
        </>

    )
}

export default ProfileIdPage