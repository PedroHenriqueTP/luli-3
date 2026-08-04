import { NextResponse } from "next/server";
import { prisma } from "@norte/db";

export async function GET() {
  try {
    const posts = await prisma.writerPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: { author: { select: { name: true, image: true } } },
    });

    return NextResponse.json({ status: "success", posts });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Falha ao buscar posts",
        details: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { title, content, excerpt, category, tags, authorId } = await req.json();

    if (!title || !content || !authorId) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const post = await prisma.writerPost.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        category,
        tags: tags ? JSON.stringify(tags) : null,
        authorId,
        published: false,
      },
    });

    return NextResponse.json({ status: "success", post });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Falha ao criar post",
        details: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}
