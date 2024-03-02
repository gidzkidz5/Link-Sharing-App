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

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    const user = await prismadb.user.findFirst({
      where: {
        userId,
      },
    });

    if (!user) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    const platforms = body
      .filter((row: String[]) => row[0] !== null)
      .map((row: String[], id: number) => {
        return { name: row[0], link: row[1], order: id + 1 };
      });

    const platformType = await prismadb.platformType.findMany();

    const finalArray: any = [];

    platforms.forEach((element: any) => {
      platformType.filter((row: any) => {
        if (element.name === row.platform) {
          finalArray.push({
            userId: params.profileId,
            platformId: row.id,
            link: element.link,
            orderKey: element.order,
          });
        }
      });
    });

    const newData = await prismadb.link.createMany({
      data: finalArray,
    });

    return NextResponse.json(newData, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { profileId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    const user = await prismadb.user.findFirst({
      where: {
        userId,
      },
    });

    if (!user) {
      return new NextResponse("Unauthorised", { status: 401 });
    }
    console.log("params.profileId", params.profileId);

    const links = await prismadb.link.findMany({
      where: {
        userId: params.profileId,
      },
      orderBy: {
        orderKey: "asc",
      },
    });

    return NextResponse.json(links, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Errorr", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { profileId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    const user = await prismadb.user.findFirst({
      where: {
        userId,
      },
    });

    if (!user) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    const platforms = body
      .filter((row: String[]) => row[0] !== null)
      .map((row: String[], id: number) => {
        return { name: row[0], link: row[1], order: id + 1 };
      });

    const platformType = await prismadb.platformType.findMany();

    const finalArray: any = [];

    platforms.forEach((element: any) => {
      platformType.filter((row: any) => {
        if (element.name === row.platform) {
          finalArray.push({
            userId: params.profileId,
            platformId: row.id,
            link: element.link,
            orderKey: element.order,
          });
        }
      });
    });

    const newLinks = await prismadb.link.deleteMany({
      where: {
        userId: params.profileId,
      },
    });

    const newData = await prismadb.link.createMany({
      data: finalArray,
    });

    return NextResponse.json(newData, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
