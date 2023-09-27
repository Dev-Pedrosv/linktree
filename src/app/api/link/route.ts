import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const list = await prisma.link.findMany();

  return new NextResponse(JSON.stringify(list), { status: 200 });
}

export async function POST(request: Request) {
  const req = await request.json();

  const { brand, link } = req;

  console.log(brand, link);
  const newLinkItem = await prisma.link.create({
    data: {
      brand,
      link,
    },
  });

  if (!newLinkItem) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "ERROR_TO_CREATE_NEW_LINK",
        },
      })
    );
  }

  return new NextResponse(
    JSON.stringify({
      success: true,
      newLinkItem,
    }),
    { status: 201 }
  );
}
