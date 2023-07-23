import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      name: {
        equals: username,
        mode: "insensitive",
      },
    },
  });

  if (!user)
    return NextResponse.json({
      errors: { username: "The user not found!" },
      status: false,
    });
  if (user.role !== "ADMIN")
    return NextResponse.json({
      errors: { username: "The user not Admin!" },
      status: false,
    });

  if (user.password !== password)
    return NextResponse.json({
      errors: { password: "The password is incorrect!" },
    });

  return NextResponse.json({ status: true });
}
