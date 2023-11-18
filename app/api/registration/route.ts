import { connect } from "@/app/dbConf/dbConf";
import User from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      firstname,
      lastname,
      username,
      password,
    }: {
      firstname: string;
      lastname: string;
      username: string;
      password: string;
    } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ username });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 469 },
      );
    }

    //hash pass
    const salt = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(password, salt);

    const newUser = new User({
      firstname,
      lastname,
      username,
      password: hashedPass,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
