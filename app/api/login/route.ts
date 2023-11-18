import { connect } from "@/app/dbConf/dbConf";
import User from "@/app/models/user";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;
    console.log(reqBody);

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { error: "User doesnt exists" },
        { status: 470 },
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 471 });
    }

    const tokenData = {
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
    };
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
