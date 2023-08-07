import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { name } = await request.json();

  const category = await prisma.category.create({
    data: {
      name: name,
    },
  });

  console.log(category);

  // if (!category)
  //   return NextResponse.json({
  //     errors: { password: "category!" },
  //   });

  return NextResponse.json({ status: true });
}
