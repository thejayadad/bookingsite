import db from "@/lib/db";
import Host from "@/models/Host";

export async function GET(req) {
    await db.connect();

    try {
        const pipeline = [
            {
                $group: {
                    _id: "$type",
                    count: { $sum: 1 },
                },
            },
        ];

        const hostCounts = await Host.aggregate(pipeline);


        return new Response(JSON.stringify(hostCounts), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}