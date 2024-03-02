import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    
    const { userId, getToken } = auth(); //doesnt seem to work reuturns null
    const body = await req.json();
    const { testobj } = body;
    console.log("userId: ",userId)
    console.log("testobj: ",testobj)

    

    const userDetails = await currentUser();
    console.log("userDetails: ")
    console.log(userDetails?.firstName)
    console.log(userDetails?.lastName)
    console.log(userDetails?.emailAddresses[0].emailAddress)

    if (!userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
    // const newUser = await prismadb.user.create({
    //     data: {
    //     first_name: userDetails?.firstName,
    //     last_name: userDetails?.lastName,
    //     userId,
    //     email: userDetails?.emailAddresses[0].emailAddress
    //     }
    // })

    return NextResponse.json("newUser", { status: 200 });
  } catch (error) {
    console.log("[CREATE_USER_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
