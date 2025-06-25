import { NextResponse } from "next/server";

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return NextResponse.json(
    {
      code: 200,
      message: "成功",
      data: [
        {
          id: "1a",
          user_account: "system1",
          user_group: 0,
          user_name: "系統1"
        },
        {
          id: "2a",
          user_account: "system22",
          user_group: 1,
          user_name: "系統22"
        }
      ]
    }
  );
};
