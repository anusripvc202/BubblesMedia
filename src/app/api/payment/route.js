import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request) {
  try {
    const { amount } = await request.json();
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error('Razorpay API keys are not configured in environment variables.');
      return NextResponse.json({ error: 'Razorpay keys are missing' }, { status: 500 });
    }

    const razorpayInstance = new Razorpay({
      key_id: keyId,
      key_secret: keySecret
    });

    // Razorpay expects the amount in Paise (e.g. 1 INR = 100 Paise)
    const amountInPaise = Math.round(amount * 100);

    const orderOptions = {
      amount: amountInPaise,
      currency: 'INR',
      receipt: 'rcpt_' + Math.floor(Math.random() * 1000000)
    };

    const order = await razorpayInstance.orders.create(orderOptions);

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    console.error('Razorpay order creation failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
