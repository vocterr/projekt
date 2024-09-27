import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const comments = await prisma.comment.findMany({
            orderBy: {createdAt: "desc"}
        });
        return new Response(JSON.stringify(comments), {
            status: 200,
            headers: {"Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*',
            },
            
        });
    }
    catch(error) {
        return new Response(JSON.stringify({error: "Failed to fetch comments"}), {
            status: 500,
            headers: {"Content-Type": "application/json",
              'Access-Control-Allow-Origin': '*',
            }
        });
    }
}

export async function POST(request: Request) {
  try {
    const { text, color } = await request.json();

    if (!text || !color) {
      return new Response(JSON.stringify({ error: 'Missing text or color' }), {
        status: 400,
      });
    }

    const comment = await prisma.comment.create({
      data: { text, color },
    });

    return new Response(JSON.stringify(comment), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error); // Log the actual error
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    });
  }
}