import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "/data/email.json");

  let emails = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    emails = JSON.parse(data);
  }

  emails.push({ email, date: new Date().toISOString() });

  fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));

  return NextResponse.json({ success: true });
}