import prismadb from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { fname, lname } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const existingUser = await prismadb.user.findFirst({
      where: {
        userId,
      },
    });

    if (!existingUser) {
      const userDetails = await currentUser();
      const newUser = await prismadb.user.create({
        data: {
          first_name: fname,
          last_name: lname,
          userId,
          email: userDetails?.emailAddresses[0].emailAddress,
        },
      });

      return NextResponse.json(newUser, { status: 200 });
    }

    return NextResponse.json("User Already Exists", { status: 422 });
  } catch (error) {
    console.log("[CREATE_USER_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET() {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const existingUser = await prismadb.user.findFirst({
      where: {
        userId,
      },
    });

    if (!existingUser) {
      return NextResponse.json("User doesn't exist", { status: 403 });
    }

    return NextResponse.json(existingUser, { status: 200 });
  } catch (error) {
    console.log("[GET_USER]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
