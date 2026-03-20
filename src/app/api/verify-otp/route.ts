import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { otp } = await request.json();

        // Any 6-digit OTP works for the mock
        if (otp && otp.length === 6) {
            return NextResponse.json({ success: true, message: "OTP verified" }, { status: 200 });
        }

        return NextResponse.json({ success: false, message: "Invalid OTP" }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
