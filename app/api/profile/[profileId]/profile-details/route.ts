import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { profileId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { first_name, last_name, email, profile_img } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!first_name || !last_name || !email) {
      return new NextResponse("Form incomplete", { status: 400 });
    }

    const user = await prismadb.user.findFirst({
      where: {
        userId,
      },
    });

    if (!user) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    const updateUser = await prismadb.user.update({
      where: {
        id: params.profileId,
      },
      data: {
        first_name,
        last_name,
        email,
        profile_img,
      },
    });

    return NextResponse.json(updateUser, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
