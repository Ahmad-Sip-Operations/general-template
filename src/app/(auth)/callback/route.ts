// src/app/auth/callback/route.ts

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { signToken } from '@/lib/jwt';
import { UsersDM } from '@/domain-models/UsersDM';
import { UserRepository } from '@/repository/UserRepository';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    console.log(username, password);


    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required" }, { status: 400 });
    }

    const user: UsersDM | null = await UserRepository.getUserByEmail(username);

    if (!user || !await bcrypt.compare(password, user.password || "")) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await signToken({ id: user.id, username: user.email });

    return NextResponse.json({
      token,
      user_name: `${user.first_name} ${user.last_name}`,
      user_id: user.id,
      email: user.email,
    });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
