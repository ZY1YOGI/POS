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

  // if (user.password !== password)
  //   return NextResponse.json({
  //     errors: { password: "The password is incorrect!" },
  //   });

  return NextResponse.json({ status: true });
}
