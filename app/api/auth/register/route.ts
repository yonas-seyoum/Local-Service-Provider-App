import { NextRequest, NextResponse } from "next/server";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/app/utils/firebase";

export async function POST(request: NextRequest) {
  try {
    const {
      uid,
      userType,
      name,
      email,
      phone,
      location,
      skills,
      hourlyRate,
      bio,
      token,
    } = await request.json();

    if (userType === "customer") {
      const user = await setDoc(doc(db, "users", uid), {
        name,
        email,
        phone,
        type: userType,
      });

      const res = NextResponse.json({
        success: true,
        user,
      });
      res.cookies.set("token", token, { httpOnly: true, path: "/" });
      return res;
    }
    const user = await setDoc(doc(db, "users", uid), {
      name,
      email,
      phone,
      location,
      skills,
      hourlyRate,
      bio,
      type: userType,
    });

    const res = NextResponse.json({
      success: true,
      user,
    });
    res.cookies.set("token", token, { httpOnly: true, path: "/" });
    return res;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
