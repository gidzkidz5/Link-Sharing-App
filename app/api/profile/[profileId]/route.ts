import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { profileId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const profile = await prismadb.user.findFirst({
      where: {
        userId: params.profileId

      }
    })

    console.log("api body: ", body);
    console.log("userId: ", userId);

    return new NextResponse("success", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
