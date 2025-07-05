
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

// Check if a user is enrolled in a specific course
export async function GET(req: Request, { params }: { params: { userId: string, courseId: string } }) {
    const session = await getSession();
    const { userId, courseId } = params;

    if (!session || session.id !== userId) {
        return NextResponse.json({ message: 'No autorizado' }, { status: 403 });
    }

    try {
        const enrollment = await prisma.enrollment.findUnique({
            where: {
                userId_courseId: {
                    userId,
                    courseId,
                },
            },
        });

        return NextResponse.json({ isEnrolled: !!enrollment });
    } catch (error) {
        console.error('[ENROLLMENT_STATUS_ERROR]', error);
        return NextResponse.json({ message: 'Error al verificar la inscripción' }, { status: 500 });
    }
}
