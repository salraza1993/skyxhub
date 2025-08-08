import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    // Get the JSON file path
    const jsonDirectory = path.join(process.cwd(), 'src/data/sliders');
    const fileContents = await fs.readFile(jsonDirectory + '/hero-slideshow.json', 'utf8');
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading slider data:', error);
    return NextResponse.json(
      { error: 'Failed to load slider data' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // You can implement updating the JSON file here if needed
    const body = await request.json();
    
    // For security, you might want to validate the data first
    const jsonDirectory = path.join(process.cwd(), 'src/data/sliders');
    await fs.writeFile(
      jsonDirectory + '/hero-slideshow.json', 
      JSON.stringify(body, null, 2)
    );

    return NextResponse.json({ success: true, message: 'Slider data updated' });
  } catch (error) {
    console.error('Error updating slider data:', error);
    return NextResponse.json(
      { error: 'Failed to update slider data' },
      { status: 500 }
    );
  }
}
