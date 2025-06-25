import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, psd } = body;

  // 假設你這邊只是做測試驗證帳號密碼
  if (email === "lock90037@gmail.com" && psd === "123456") {
    return NextResponse.json({
      code: 200,
      message: "成功",
      token: "fake-jwt-token", // 可選，實際應返回真正 token
    });
  } else {
    return NextResponse.json(
      {
        code: 403,
        message: "失敗，帳號或密碼錯誤",
      },
      { status: 403 }
    );
  }
}