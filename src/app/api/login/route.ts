import { NextRequest, NextResponse } from 'next/server';
import { handleCors } from '@/middleware/cors';
import { AuthService } from '@/business-logic-layer/auth/AuthService';

export async function OPTIONS(req: NextRequest) {
  const res = handleCors(req);
  return res ?? new Response(null, { status: 204 });
}

export async function POST(req: NextRequest) {
  const corsResponse = handleCors(req);
  if (corsResponse) return corsResponse;

  try {
    const body = await req.json();
    const result = await AuthService.login(body);

    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  }
}
