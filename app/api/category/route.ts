import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { name } = await request.json();
  try {
    const checkCategory = await prisma.category.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });

    if (checkCategory)
      return NextResponse.json({
        errors: { name: "The Name Category already exists." },
        status: 422,
      });

    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });
    return NextResponse.json({ category });
  } catch (err) {
    return NextResponse.json({
      message: `Something went wrong ${err}`,
      status: 500,
    });
  }
}
