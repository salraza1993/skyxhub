// App Router API route
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    name: 'John Doe',
    message: 'Hello from App Router API!',
    timestamp: new Date().toISOString()
  });
}

export async function POST(request) {
  const body = await request.json();
  
  return NextResponse.json({ 
    message: 'Data received',
    data: body,
    timestamp: new Date().toISOString()
  });
}
