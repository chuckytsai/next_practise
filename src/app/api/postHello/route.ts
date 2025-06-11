import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name } = body;
  return NextResponse.json({ message: `你好，${name}！` });
}